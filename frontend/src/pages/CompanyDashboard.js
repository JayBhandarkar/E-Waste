import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Package, FileText, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyDashboard = () => {
  const companyStats = {
    totalCollected: 15420,
    monthlyRevenue: 125000,
    activePartners: 45,
    recyclingRate: 94.5
  };

  const recentTransactions = [
    { id: 'TXN-001', type: 'Collection', amount: 2500, partner: 'TechCorp Inc.', date: '2024-01-25' },
    { id: 'TXN-002', type: 'Sale', amount: 8900, partner: 'RefurbTech Ltd.', date: '2024-01-24' },
    { id: 'TXN-003', type: 'Collection', amount: 1800, partner: 'GreenTech Co.', date: '2024-01-23' }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Company Dashboard</h1>
        <p className="text-gray-600">Monitor your e-waste management operations and performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Collected</p>
              <p className="text-2xl font-bold text-gray-900">{companyStats.totalCollected.toLocaleString()} kg</p>
            </div>
            <Package className="h-8 w-8 text-eco-600" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${companyStats.monthlyRevenue.toLocaleString()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Partners</p>
              <p className="text-2xl font-bold text-gray-900">{companyStats.activePartners}</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Recycling Rate</p>
              <p className="text-2xl font-bold text-gray-900">{companyStats.recyclingRate}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-primary-600" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/company/reports" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-eco-50 hover:border-eco-300 transition-colors">
            <FileText className="h-8 w-8 text-eco-600 mr-3" />
            <div>
              <h3 className="font-medium text-gray-900">Generate Report</h3>
              <p className="text-sm text-gray-600">Create analytics reports</p>
            </div>
          </Link>

          <Link to="/company/marketplace" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
            <ShoppingCart className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <h3 className="font-medium text-gray-900">Browse Marketplace</h3>
              <p className="text-sm text-gray-600">Buy/sell materials</p>
            </div>
          </Link>

          <Link to="/company/partnerships" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-colors">
            <Users className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <h3 className="font-medium text-gray-900">Manage Partners</h3>
              <p className="text-sm text-gray-600">View partnerships</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly Performance</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Performance chart will be displayed here</p>
            <p className="text-sm text-gray-400">Integration with charting library needed</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
          <Link to="/company/transactions" className="text-eco-600 hover:text-eco-700 font-medium">
            View All
          </Link>
        </div>
        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  transaction.type === 'Collection' ? 'bg-blue-500' : 'bg-green-500'
                }`}></div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.id}</p>
                  <p className="text-sm text-gray-500">{transaction.partner} • {transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  transaction.type === 'Collection' ? 'text-blue-600' : 'text-green-600'
                }`}>
                  {transaction.type === 'Collection' ? '-' : '+'}${transaction.amount.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">{transaction.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="card bg-gradient-to-r from-eco-50 to-green-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Environmental Impact This Month</h2>
          <p className="text-gray-600 mb-6">Your company's contribution to sustainability</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-eco-600">{companyStats.totalCollected.toLocaleString()} kg</p>
              <p className="text-sm text-gray-600">E-Waste Processed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">8,750 kg</p>
              <p className="text-sm text-gray-600">CO₂ Emissions Prevented</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">125 m²</p>
              <p className="text-sm text-gray-600">Landfill Space Saved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;