const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/E-waste', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB database: E-waste');
});

// User Schema (Individual Users Collection)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, default: '' },
  address: { type: String, default: '' },
  bio: { type: String, default: '' },
  ecoPoints: { type: Number, default: 0 },
  totalDevicesRecycled: { type: Number, default: 0 },
  totalCO2Saved: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'users' });

// Company Schema (Companies Collection)
const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, default: '' },
  address: { type: String, default: '' },
  description: { type: String, default: '' },
  totalCollected: { type: Number, default: 0 },
  monthlyRevenue: { type: Number, default: 0 },
  activePartners: { type: Number, default: 0 },
  recyclingRate: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'companies' });

// Device Schema
const deviceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  qrCode: { type: String, unique: true },
  deviceType: { type: String, required: true },
  brand: { type: String, required: true },
  condition: { type: String, required: true },
  estimatedValue: { type: Number, required: true },
  ecoPoints: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'processing', 'sold', 'recycled'], default: 'pending' },
  photo: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Transaction Schema
const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  deviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
  type: { type: String, enum: ['device_submission', 'reward_redemption'], required: true },
  amount: { type: Number, required: true },
  points: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Company = mongoose.model('Company', companySchema);
const Device = mongoose.model('Device', deviceSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);

// User Register endpoint
app.post('/api/user/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, userType: 'user' });
    await user.save();

    const token = jwt.sign({ userId: user._id, userType: 'user' }, 'your-secret-key', { expiresIn: '24h' });
    
    res.status(201).json({
      message: 'User created successfully',
      token,
      user: { id: user._id, name: user.name, email: user.email, userType: 'user' }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Company Register endpoint
app.post('/api/company/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return res.status(400).json({ message: 'Company already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const company = new Company({ name, email, password: hashedPassword, userType: 'company' });
    await company.save();

    const token = jwt.sign({ userId: company._id, userType: 'company' }, 'your-secret-key', { expiresIn: '24h' });
    
    res.status(201).json({
      message: 'Company created successfully',
      token,
      user: { id: company._id, name: company.name, email: company.email, userType: 'company' }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Legacy register endpoint (for backward compatibility)
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, userType = 'user' } = req.body;
    
    if (userType === 'company') {
      const existingCompany = await Company.findOne({ email });
      if (existingCompany) {
        return res.status(400).json({ message: 'Company already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const company = new Company({ name, email, password: hashedPassword, userType: 'company' });
      await company.save();
      const token = jwt.sign({ userId: company._id, userType: 'company' }, 'your-secret-key', { expiresIn: '24h' });
      res.status(201).json({
        message: 'Company created successfully',
        token,
        user: { id: company._id, name: company.name, email: company.email, userType: 'company' }
      });
    } else {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashedPassword, userType: 'user' });
      await user.save();
      const token = jwt.sign({ userId: user._id, userType: 'user' }, 'your-secret-key', { expiresIn: '24h' });
      res.status(201).json({
        message: 'User created successfully',
        token,
        user: { id: user._id, name: user.name, email: user.email, userType: 'user' }
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// User Login endpoint
app.post('/api/user/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, userType: 'user' }, 'your-secret-key', { expiresIn: '24h' });
    
    res.json({
      message: 'Login successful',
      token,
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        phone: user.phone, 
        address: user.address, 
        bio: user.bio,
        ecoPoints: user.ecoPoints,
        totalDevicesRecycled: user.totalDevicesRecycled,
        totalCO2Saved: user.totalCO2Saved,
        userType: 'user'
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Company Login endpoint
app.post('/api/company/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const company = await Company.findOne({ email });
    if (!company) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: company._id, userType: 'company' }, 'your-secret-key', { expiresIn: '24h' });
    
    res.json({
      message: 'Login successful',
      token,
      user: { 
        id: company._id, 
        name: company.name, 
        email: company.email, 
        phone: company.phone, 
        address: company.address, 
        description: company.description,
        totalCollected: company.totalCollected,
        monthlyRevenue: company.monthlyRevenue,
        activePartners: company.activePartners,
        recyclingRate: company.recyclingRate,
        userType: 'company'
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update profile endpoint
app.put('/api/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, 'your-secret-key');
    const { name, email, phone, address, bio } = req.body;
    
    const user = await User.findByIdAndUpdate(
      decoded.userId,
      { name, email, phone, address, bio },
      { new: true }
    );

    res.json({
      message: 'Profile updated successfully',
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        phone: user.phone, 
        address: user.address, 
        bio: user.bio,
        ecoPoints: user.ecoPoints,
        totalDevicesRecycled: user.totalDevicesRecycled,
        totalCO2Saved: user.totalCO2Saved
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all users endpoint (for debugging)
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude passwords
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.userId = decoded.userId;
    req.userType = decoded.userType;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Submit device endpoint
app.post('/api/devices', verifyToken, async (req, res) => {
  try {
    const { deviceType, brand, condition, estimatedValue, ecoPoints, qrCode } = req.body;
    
    const device = new Device({
      userId: req.userId,
      deviceType,
      brand,
      condition,
      estimatedValue,
      ecoPoints,
      qrCode: qrCode || `EWASTE-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    });
    
    await device.save();
    
    // Update user stats
    await User.findByIdAndUpdate(req.userId, {
      $inc: { 
        ecoPoints: ecoPoints,
        totalDevicesRecycled: 1,
        totalCO2Saved: Math.round(estimatedValue * 0.01) // Rough CO2 calculation
      }
    });
    
    // Create transaction record
    const transaction = new Transaction({
      userId: req.userId,
      deviceId: device._id,
      type: 'device_submission',
      amount: estimatedValue,
      points: ecoPoints,
      status: 'completed'
    });
    
    await transaction.save();
    
    res.status(201).json({ message: 'Device submitted successfully', device, transaction });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user devices
app.get('/api/devices', verifyToken, async (req, res) => {
  try {
    const devices = await Device.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(devices);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user transactions
app.get('/api/transactions', verifyToken, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.userId })
      .populate('deviceId', 'deviceType brand')
      .sort({ createdAt: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user stats
app.get('/api/user-stats', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId, 'ecoPoints totalDevicesRecycled totalCO2Saved');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create test user endpoint
app.post('/api/create-test-user', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash('123456', 10);
    const testUser = new User({
      name: 'Test User',
      email: 'test@example.com',
      password: hashedPassword,
      userType: 'user'
    });
    await testUser.save();
    res.json({ message: 'Test user created', email: 'test@example.com', password: '123456' });
  } catch (error) {
    if (error.code === 11000) {
      res.json({ message: 'Test user already exists', email: 'test@example.com', password: '123456' });
    } else {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
});

// Create test company endpoint
app.post('/api/create-test-company', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash('123456', 10);
    const testCompany = new Company({
      name: 'Test Company',
      email: 'company@example.com',
      password: hashedPassword,
      userType: 'company',
      totalCollected: 15420,
      monthlyRevenue: 125000,
      activePartners: 45,
      recyclingRate: 94.5
    });
    await testCompany.save();
    res.json({ message: 'Test company created', email: 'company@example.com', password: '123456' });
  } catch (error) {
    if (error.code === 11000) {
      res.json({ message: 'Test company already exists', email: 'company@example.com', password: '123456' });
    } else {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Separate collections: users, companies');
});