import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import Rewards from './pages/Rewards';
import Partnerships from './pages/Partnerships';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CompanyResale from './pages/CompanyResale';
import RewardsWallet from './pages/RewardsWallet';
import ImpactDashboard from './pages/ImpactDashboard';
import Profile from './pages/Profile';

const AppContent = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('user');
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  const isPublicPage = ['/', '/about', '/how-it-works'].includes(location.pathname);
  
  const showNavbar = !isLoggedIn && (isPublicPage || isAuthPage);
  const showSidebar = isLoggedIn;

  return (
    <div className="min-h-screen bg-gray-50">
      {showNavbar && <Navbar />}
      {showSidebar && <Sidebar />}
      <div className={showSidebar ? "lg:ml-64" : ""}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/features" element={<ProtectedRoute><Features /></ProtectedRoute>} />
            <Route path="/rewards" element={<ProtectedRoute><Rewards /></ProtectedRoute>} />
            <Route path="/partnerships" element={<ProtectedRoute><Partnerships /></ProtectedRoute>} />
            <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            <Route path="/company-resale" element={<ProtectedRoute><CompanyResale /></ProtectedRoute>} />
            <Route path="/rewards-wallet" element={<ProtectedRoute><RewardsWallet /></ProtectedRoute>} />
            <Route path="/impact-dashboard" element={<ProtectedRoute><ImpactDashboard /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;