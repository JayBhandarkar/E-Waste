import React from 'react';
import { Trophy, Star, Gift, TrendingUp, Leaf, Users, Award, Target } from 'lucide-react';

const Rewards = () => {
  const leaderboard = [
    { rank: 1, name: 'EcoChampion', points: 2450, devices: 45, impact: '125 kg CO₂ saved' },
    { rank: 2, name: 'GreenGuru', points: 2100, devices: 38, impact: '98 kg CO₂ saved' },
    { rank: 3, name: 'RecycleHero', points: 1875, devices: 32, impact: '87 kg CO₂ saved' },
    { rank: 4, name: 'EcoWarrior', points: 1650, devices: 28, impact: '76 kg CO₂ saved' },
    { rank: 5, name: 'PlanetSaver', points: 1420, devices: 24, impact: '65 kg CO₂ saved' },
  ];

  const achievements = [
    { icon: '🌱', title: 'First Steps', description: 'Recycle your first device', points: 50, unlocked: true },
    { icon: '🔋', title: 'Battery Master', description: 'Recycle 10 batteries', points: 100, unlocked: true },
    { icon: '📱', title: 'Phone Collector', description: 'Recycle 5 smartphones', points: 150, unlocked: false },
    { icon: '💻', title: 'Tech Guru', description: 'Recycle 3 laptops', points: 200, unlocked: false },
    { icon: '🏆', title: 'Eco Champion', description: 'Reach 1000 points', points: 300, unlocked: false },
    { icon: '🌍', title: 'Planet Protector', description: 'Save 100kg CO₂', points: 500, unlocked: false },
  ];

  const rewards = [
    { points: 100, reward: '$1 Eco Store Voucher', category: 'voucher', available: true },
    { points: 250, reward: 'Reusable Water Bottle', category: 'product', available: true },
    { points: 500, reward: '$5 Green Products Discount', category: 'voucher', available: true },
    { points: 750, reward: 'Bamboo Phone Case', category: 'product', available: true },
    { points: 1000, reward: 'Plant a Tree Certificate', category: 'impact', available: true },
    { points: 1500, reward: 'Solar Power Bank', category: 'product', available: false },
  ];

  const impactStats = [
    { icon: Leaf, label: 'CO₂ Saved', value: '1,250 tons', color: 'text-green-600' },
    { icon: Users, label: 'Active Users', value: '25,000+', color: 'text-blue-600' },
    { icon: Award, label: 'Devices Recycled', value: '50,000+', color: 'text-purple-600' },
    { icon: Target, label: 'Materials Recovered', value: '15 tons', color: 'text-orange-600' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-eco-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rewards & Impact
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Track your environmental impact, compete with others, and earn rewards 
            for your contributions to sustainable e-waste management.
          </p>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Impact</h2>
            <p className="text-xl text-gray-600">Together, we're making a real difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="card text-center">
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leaderboard</h2>
            <p className="text-xl text-gray-600">Top contributors this month</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary-600 text-white p-6">
                <div className="flex items-center justify-center space-x-2">
                  <Trophy className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Monthly Champions</h3>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {leaderboard.map((user, index) => (
                  <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                        user.rank === 1 ? 'bg-yellow-500' : 
                        user.rank === 2 ? 'bg-gray-400' : 
                        user.rank === 3 ? 'bg-orange-600' : 'bg-gray-300'
                      }`}>
                        {user.rank}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.devices} devices recycled</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary-600">{user.points} pts</div>
                      <div className="text-sm text-gray-500">{user.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
            <p className="text-xl text-gray-600">Unlock badges as you reach recycling milestones</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`card ${achievement.unlocked ? 'border-2 border-primary-200' : 'opacity-60'}`}>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-600 font-semibold">{achievement.points} pts</span>
                      {achievement.unlocked && (
                        <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">Unlocked</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Store */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rewards Store</h2>
            <p className="text-xl text-gray-600">Redeem your points for eco-friendly rewards</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward, index) => (
              <div key={index} className={`card ${!reward.available ? 'opacity-60' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <Gift className="h-8 w-8 text-primary-600" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    reward.category === 'voucher' ? 'bg-blue-100 text-blue-800' :
                    reward.category === 'product' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {reward.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{reward.reward}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 font-bold">{reward.points} points</span>
                  <button 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      reward.available 
                        ? 'bg-primary-600 text-white hover:bg-primary-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!reward.available}
                  >
                    {reward.available ? 'Redeem' : 'Coming Soon'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Impact Visualization */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Environmental Impact</h2>
          <p className="text-xl text-primary-100 mb-8">
            See the real-world impact of your recycling efforts
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <Leaf className="h-12 w-12 text-primary-200 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">45.2 kg</div>
              <div className="text-primary-100">CO₂ Emissions Prevented</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <TrendingUp className="h-12 w-12 text-primary-200 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">12.8 kg</div>
              <div className="text-primary-100">Materials Recovered</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <Star className="h-12 w-12 text-primary-200 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">1,250</div>
              <div className="text-primary-100">Total Points Earned</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rewards;