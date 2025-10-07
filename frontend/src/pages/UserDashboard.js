import React from 'react';
import { QrCode, Wallet, BarChart3, Gift, Plus, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const userStats = {
    devicesSubmitted: 12,
    totalRewards: 2450,
    carbonSaved: 85,
    rank: 15
  };

  const recentDevices = [
    { id: 'EW-001', type: 'Smartphone', status: 'Collected', points: 150, date: '2024-01-25' },
    { id: 'EW-002', type: 'Laptop', status: 'Processing', points: 300, date: '2024-01-24' },
    { id: 'EW-003', type: 'Tablet', status: 'Recycled', points: 200, date: '2024-01-23' }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
        <p className="text-gray-600">Track your e-waste contributions and rewards</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Devices Submitted</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.devicesSubmitted}</p>
            </div>
            <QrCode className="h-8 w-8 text-primary-600" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Rewards</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.totalRewards} pts</p>
            </div>
            <Wallet className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Carbon Saved</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.carbonSaved} kg CO₂</p>
            </div>
            <BarChart3 className="h-8 w-8 text-eco-600" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Community Rank</p>
              <p className="text-2xl font-bold text-gray-900">#{userStats.rank}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/user/qr-scan" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-colors">
            <QrCode className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <h3 className="font-medium text-gray-900">Scan QR Code</h3>
              <p className="text-sm text-gray-600">Track your devices</p>
            </div>
          </Link>

          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors">
            <Plus className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <h3 className="font-medium text-gray-900">Submit Device</h3>
              <p className="text-sm text-gray-600">Register new e-waste</p>
            </div>
          </button>

          <Link to="/user/rewards-wallet" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-yellow-50 hover:border-yellow-300 transition-colors">
            <Gift className="h-8 w-8 text-yellow-600 mr-3" />
            <div>
              <h3 className="font-medium text-gray-900">Redeem Rewards</h3>
              <p className="text-sm text-gray-600">Use your points</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Devices */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Devices</h2>
          <Link to="/user/devices" className="text-primary-600 hover:text-primary-700 font-medium">
            View All
          </Link>
        </div>
        <div className="space-y-3">
          {recentDevices.map((device) => (
            <div key={device.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <QrCode className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">{device.id}</p>
                  <p className="text-sm text-gray-500">{device.type} • {device.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-green-600 font-medium">+{device.points} pts</span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  device.status === 'Collected' ? 'bg-green-100 text-green-800' :
                  device.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {device.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Summary */}
      <div className="card bg-gradient-to-r from-primary-50 to-eco-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Environmental Impact</h2>
          <p className="text-gray-600 mb-6">You've made a real difference in protecting our planet!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-primary-600">{userStats.devicesSubmitted}</p>
              <p className="text-sm text-gray-600">Devices Recycled</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-eco-600">{userStats.carbonSaved} kg</p>
              <p className="text-sm text-gray-600">CO₂ Emissions Saved</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">2.5 m²</p>
              <p className="text-sm text-gray-600">Landfill Space Saved</p>
            </div>
          </div>
          <Link to="/user/impact-dashboard" className="inline-block mt-6 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
            View Detailed Impact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;