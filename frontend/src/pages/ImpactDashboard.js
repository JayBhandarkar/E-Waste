import React from 'react';
import { Leaf, Recycle, Award, TrendingUp, Users, Globe } from 'lucide-react';

const ImpactDashboard = () => {
  const monthlyData = [
    { month: 'Jan', devices: 120, co2Saved: 45, value: 25000 },
    { month: 'Feb', devices: 150, co2Saved: 58, value: 32000 },
    { month: 'Mar', devices: 180, co2Saved: 72, value: 38000 },
    { month: 'Apr', devices: 200, co2Saved: 85, value: 45000 },
    { month: 'May', devices: 220, co2Saved: 95, value: 52000 },
    { month: 'Jun', devices: 250, co2Saved: 110, value: 58000 }
  ];

  const deviceTypeData = [
    { name: 'Smartphones', value: 35, count: 875 },
    { name: 'Laptops', value: 25, count: 625 },
    { name: 'Tablets', value: 15, count: 375 },
    { name: 'Monitors', value: 12, count: 300 },
    { name: 'Accessories', value: 13, count: 325 }
  ];

  const rewardsData = [
    { month: 'Jan', distributed: 12000, redeemed: 8500 },
    { month: 'Feb', distributed: 15000, redeemed: 11200 },
    { month: 'Mar', distributed: 18000, redeemed: 13800 },
    { month: 'Apr', distributed: 22000, redeemed: 16500 },
    { month: 'May', distributed: 25000, redeemed: 19200 },
    { month: 'Jun', distributed: 28000, redeemed: 22100 }
  ];



  const impactStats = [
    {
      icon: Recycle,
      title: 'Total Devices Recycled',
      value: '2,500',
      change: '+12%',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    },
    {
      icon: Leaf,
      title: 'CO₂ Emissions Saved',
      value: '465 tons',
      change: '+18%',
      color: 'text-eco-600',
      bgColor: 'bg-eco-100'
    },
    {
      icon: Award,
      title: 'Rewards Distributed',
      value: '120K points',
      change: '+25%',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: TrendingUp,
      title: 'Total Value Generated',
      value: '₹2.5M',
      change: '+15%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    }
  ];

  const globalImpact = [
    { metric: 'Landfill Waste Reduced', value: '125 tons', icon: '🗑️' },
    { metric: 'Precious Metals Recovered', value: '45 kg', icon: '💎' },
    { metric: 'Energy Saved', value: '2.3 MWh', icon: '⚡' },
    { metric: 'Water Saved', value: '15K liters', icon: '💧' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Impact Dashboard</h1>
          <p className="text-gray-600">Track the environmental and economic impact of our e-waste recycling efforts</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Recycling Trends */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Monthly Recycling Trends</h2>
            <div className="h-72 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-600">Monthly Recycling Chart</p>
                <p className="text-sm text-gray-500">Install recharts for interactive charts</p>
              </div>
            </div>
          </div>

          {/* Device Type Distribution */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Device Type Distribution</h2>
            <div className="h-72 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🥧</div>
                <p className="text-gray-600">Device Distribution Chart</p>
                <p className="text-sm text-gray-500">Install recharts for interactive charts</p>
              </div>
            </div>
          </div>
        </div>

        {/* CO2 Savings & Value Generation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* CO2 Savings Trend */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6">CO₂ Savings Over Time</h2>
            <div className="h-72 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <p className="text-gray-600">CO₂ Savings Trend</p>
                <p className="text-sm text-gray-500">Install recharts for interactive charts</p>
              </div>
            </div>
          </div>

          {/* Rewards Distribution */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Rewards Distribution</h2>
            <div className="h-72 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎁</div>
                <p className="text-gray-600">Rewards Distribution Chart</p>
                <p className="text-sm text-gray-500">Install recharts for interactive charts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact Metrics */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Global Environmental Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalImpact.map((impact, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-3">{impact.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{impact.value}</div>
                <div className="text-sm text-gray-600">{impact.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-8 w-8 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Community Growth</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Active Users</span>
                <span className="font-bold text-blue-600">25,000+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Partner Companies</span>
                <span className="font-bold text-blue-600">150+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cities Covered</span>
                <span className="font-bold text-blue-600">45</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="h-8 w-8 text-green-600" />
              <h3 className="text-lg font-bold text-gray-900">Sustainability Goals</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">2024 Target: 5,000 devices</span>
                  <span className="text-sm font-medium">50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">CO₂ Target: 1,000 tons</span>
                  <span className="text-sm font-medium">46.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '46.5%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="h-8 w-8 text-purple-600" />
              <h3 className="text-lg font-bold text-gray-900">Recognition</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏆</span>
                <span className="text-sm text-gray-600">Green Tech Award 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌟</span>
                <span className="text-sm text-gray-600">Sustainability Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎖️</span>
                <span className="text-sm text-gray-600">Innovation in Recycling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;