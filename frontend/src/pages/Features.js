import React from 'react';
import { QrCode, Shield, Gamepad2, FileCheck, Zap, BarChart3, Smartphone, Globe } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: QrCode,
      title: 'Complete Traceability',
      description: 'Track your e-waste from disposal to final recycling with QR-powered transparency',
      benefits: ['Real-time tracking', 'Chain of custody', 'Audit trail', 'Compliance reporting'],
      color: 'bg-blue-500'
    },
    {
      icon: Gamepad2,
      title: 'Gamification System',
      description: 'Earn points, badges, and rewards for your environmental contributions',
      benefits: ['Point system', 'Achievement badges', 'Leaderboards', 'Reward redemption'],
      color: 'bg-purple-500'
    },
    {
      icon: FileCheck,
      title: 'Compliance Management',
      description: 'Automated compliance tracking and reporting for regulatory requirements',
      benefits: ['Regulatory compliance', 'Automated reports', 'Certificate generation', 'Audit support'],
      color: 'bg-green-500'
    },
    {
      icon: Zap,
      title: 'Operational Efficiency',
      description: 'Streamlined processes for collectors and recyclers to maximize efficiency',
      benefits: ['Route optimization', 'Inventory management', 'Process automation', 'Cost reduction'],
      color: 'bg-orange-500'
    }
  ];

  const technicalFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized mobile experience for all stakeholders',
      details: 'Native mobile apps for iOS and Android with offline capabilities and push notifications.'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security protecting user data',
      details: 'End-to-end encryption, secure authentication, and GDPR compliance ensure data protection.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights and reporting tools',
      details: 'Real-time analytics, custom reports, and environmental impact visualization.'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Global accessibility with localization',
      details: 'Support for multiple languages and regional compliance requirements.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-eco-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Advanced technology and innovative features that make e-waste management 
            transparent, efficient, and rewarding for everyone.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600">Everything you need for responsible e-waste management</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="card">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability Deep Dive */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Traceability
              </h2>
              <p className="text-gray-600 mb-6">
                Our QR-powered tracking system provides unprecedented visibility into 
                the e-waste recycling process, ensuring accountability at every step.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Device Registration</h4>
                    <p className="text-gray-600 text-sm">Unique QR code generated for each device</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Collection Tracking</h4>
                    <p className="text-gray-600 text-sm">Real-time updates during pickup and transport</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Processing Verification</h4>
                    <p className="text-gray-600 text-sm">Certified recycling with material recovery data</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <QrCode className="h-24 w-24 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Live Tracking Demo</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-800">Device Registered</span>
                    <span className="text-xs text-green-600">✓ Complete</span>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-800">In Transit</span>
                    <span className="text-xs text-blue-600">🚛 Active</span>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Processing</span>
                    <span className="text-xs text-gray-500">⏳ Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gamification System */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gamification & Rewards</h2>
            <p className="text-xl text-gray-600">Making sustainability engaging and rewarding</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Achievement System</h3>
              <p className="text-gray-600 mb-4">Unlock badges and achievements for recycling milestones</p>
              <div className="flex justify-center space-x-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">First Device</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Eco Warrior</span>
              </div>
            </div>
            <div className="card text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leaderboards</h3>
              <p className="text-gray-600 mb-4">Compete with friends and community members</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>🥇 EcoChampion</span>
                    <span className="font-bold">2,450 pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🥈 GreenGuru</span>
                    <span className="font-bold">2,100 pts</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reward Redemption</h3>
              <p className="text-gray-600 mb-4">Exchange points for eco-friendly products and discounts</p>
              <div className="space-y-2">
                <div className="bg-primary-50 text-primary-800 text-xs px-2 py-1 rounded">500 pts = $5 voucher</div>
                <div className="bg-eco-50 text-eco-800 text-xs px-2 py-1 rounded">1000 pts = Tree planted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Excellence</h2>
            <p className="text-xl text-gray-600">Built with cutting-edge technology for reliability and scale</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="card">
                <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <p className="text-sm text-gray-500">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;