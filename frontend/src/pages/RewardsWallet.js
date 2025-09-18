import React, { useState } from 'react';
import { Wallet, Gift, Star, Trophy, CheckCircle, Clock } from 'lucide-react';

const RewardsWallet = () => {
  const [activeTab, setActiveTab] = useState('wallet');
  
  const userStats = {
    totalPoints: 1250,
    availablePoints: 850,
    redeemedPoints: 400,
    rank: 15,
    level: 'Eco Champion'
  };

  const rewardHistory = [
    { id: 1, type: 'earned', amount: 90, description: 'iPhone 12 recycled', date: '2024-03-15', status: 'completed' },
    { id: 2, type: 'redeemed', amount: -50, description: 'Amazon Gift Card ₹500', date: '2024-03-14', status: 'completed' },
    { id: 3, type: 'earned', amount: 64, description: 'Dell Laptop recycled', date: '2024-03-13', status: 'completed' },
    { id: 4, type: 'redeemed', amount: -100, description: 'Plant a Tree Certificate', date: '2024-03-12', status: 'pending' }
  ];

  const availableRewards = [
    {
      id: 1,
      title: 'Amazon Gift Card',
      description: '₹500 Amazon voucher',
      points: 100,
      category: 'voucher',
      image: '🎁',
      available: true
    },
    {
      id: 2,
      title: 'Flipkart Voucher',
      description: '₹1000 shopping voucher',
      points: 200,
      category: 'voucher',
      image: '🛒',
      available: true
    },
    {
      id: 3,
      title: 'Plant a Tree',
      description: 'Plant a tree in your name',
      points: 100,
      category: 'impact',
      image: '🌱',
      available: true
    },
    {
      id: 4,
      title: 'Eco Water Bottle',
      description: 'Sustainable steel water bottle',
      points: 150,
      category: 'product',
      image: '🍶',
      available: true
    },
    {
      id: 5,
      title: 'Solar Power Bank',
      description: '10000mAh solar power bank',
      points: 300,
      category: 'product',
      image: '🔋',
      available: false
    },
    {
      id: 6,
      title: 'Organic Cotton Tote',
      description: 'Eco-friendly shopping bag',
      points: 75,
      category: 'product',
      image: '👜',
      available: true
    }
  ];

  const achievements = [
    { icon: '🌱', title: 'First Steps', description: 'First device recycled', unlocked: true },
    { icon: '🔋', title: 'Battery Master', description: '10 batteries recycled', unlocked: true },
    { icon: '📱', title: 'Phone Collector', description: '5 smartphones recycled', unlocked: true },
    { icon: '💻', title: 'Tech Guru', description: '3 laptops recycled', unlocked: false },
    { icon: '🏆', title: 'Eco Champion', description: '1000 points earned', unlocked: true },
    { icon: '🌍', title: 'Planet Protector', description: '100kg CO₂ saved', unlocked: false }
  ];

  const handleRedeem = (reward) => {
    if (userStats.availablePoints >= reward.points) {
      alert(`Redeemed: ${reward.title} for ${reward.points} points!`);
    } else {
      alert('Insufficient points!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rewards Wallet</h1>
          <p className="text-gray-600">Manage your eco-points and redeem exciting rewards</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center">
            <Wallet className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary-600 mb-2">{userStats.availablePoints}</div>
            <div className="text-gray-600">Available Points</div>
          </div>
          <div className="card text-center">
            <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-yellow-600 mb-2">{userStats.totalPoints}</div>
            <div className="text-gray-600">Total Earned</div>
          </div>
          <div className="card text-center">
            <Trophy className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-purple-600 mb-2">#{userStats.rank}</div>
            <div className="text-gray-600">Global Rank</div>
          </div>
          <div className="card text-center">
            <Gift className="h-12 w-12 text-eco-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-eco-600 mb-2">{userStats.redeemedPoints}</div>
            <div className="text-gray-600">Points Redeemed</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="card mb-8">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('wallet')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'wallet'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Wallet
            </button>
            <button
              onClick={() => setActiveTab('redeem')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'redeem'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Redeem
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'achievements'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Achievements
            </button>
          </div>
        </div>

        {/* Wallet Tab */}
        {activeTab === 'wallet' && (
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Transaction History</h2>
            <div className="space-y-4">
              {rewardHistory.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'earned' ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      {transaction.type === 'earned' ? (
                        <Star className="h-5 w-5 text-green-600" />
                      ) : (
                        <Gift className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{transaction.description}</div>
                      <div className="text-sm text-gray-500">{transaction.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`font-bold ${
                      transaction.type === 'earned' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {transaction.type === 'earned' ? '+' : ''}{transaction.amount} pts
                    </div>
                    <div className="flex items-center">
                      {transaction.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <Clock className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Redeem Tab */}
        {activeTab === 'redeem' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableRewards.map((reward) => (
              <div key={reward.id} className={`card ${!reward.available ? 'opacity-60' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{reward.image}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    reward.category === 'voucher' ? 'bg-blue-100 text-blue-800' :
                    reward.category === 'product' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {reward.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reward.title}</h3>
                <p className="text-gray-600 mb-4">{reward.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-primary-600">{reward.points} pts</div>
                  <div className={`text-sm ${
                    userStats.availablePoints >= reward.points ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {userStats.availablePoints >= reward.points ? 'Available' : 'Insufficient points'}
                  </div>
                </div>
                
                <button
                  onClick={() => handleRedeem(reward)}
                  disabled={!reward.available || userStats.availablePoints < reward.points}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    reward.available && userStats.availablePoints >= reward.points
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {reward.available ? 'Redeem Now' : 'Coming Soon'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`card ${achievement.unlocked ? 'border-2 border-primary-200 bg-primary-50' : 'opacity-60'}`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{achievement.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4">{achievement.description}</p>
                  {achievement.unlocked ? (
                    <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Unlocked
                    </div>
                  ) : (
                    <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                      <Clock className="h-4 w-4 mr-1" />
                      Locked
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardsWallet;