import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, QrCode, Award, Recycle, Leaf, Users, TrendingUp, MapPin, Smartphone, ShoppingCart } from 'lucide-react';

const Home = () => {
  const stats = [
    { label: 'Devices Recycled', value: '50,000+', icon: Recycle },
    { label: 'CO₂ Saved (tons)', value: '1,250', icon: Leaf },
    { label: 'Active Users', value: '25,000+', icon: Users },
    { label: 'Partner Companies', value: '150+', icon: TrendingUp },
  ];

  const steps = [
    {
      icon: MapPin,
      title: 'Find E-Waste Bin',
      description: 'Open the app and locate nearby e-waste bins on the interactive map',
      color: 'bg-blue-500'
    },
    {
      icon: QrCode,
      title: 'Scan QR Code',
      description: 'Scan the unique QR code on the bin to identify and verify the location',
      color: 'bg-indigo-500'
    },
    {
      icon: Smartphone,
      title: 'Fill E-Waste Info',
      description: 'Enter device type, quantity, and upload optional photos through the form',
      color: 'bg-purple-500'
    },
    {
      icon: ShoppingCart,
      title: 'Marketplace Listing',
      description: 'Your e-waste appears on the marketplace for recycling companies to purchase',
      color: 'bg-orange-500'
    },
    {
      icon: Award,
      title: 'Earn Rewards',
      description: 'Receive cashback, vouchers, or reward points when recycling is completed',
      color: 'bg-primary-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-eco-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                E-Waste Loop
                <span className="block text-primary-600">Closing the Loop on E-Waste</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A traceable, QR-powered system for responsible electronic waste management. 
                Track your devices from disposal to recycling and earn rewards for sustainable choices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  Recycle Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/partnerships" className="btn-secondary inline-flex items-center justify-center">
                  Partner With Us
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <QrCode className="h-24 w-24 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Start Your Journey</h3>
                  <p className="text-gray-600">Scan to begin responsible recycling</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-600">100%</div>
                    <div className="text-sm text-gray-600">Traceable</div>
                  </div>
                  <div className="bg-eco-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-eco-600">Secure</div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference in e-waste management</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center animate-fade-in">
                <stat.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to responsible e-waste recycling</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center animate-slide-up hover:shadow-xl transition-shadow">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of users who are already contributing to a sustainable future through responsible e-waste management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Start Recycling Today
            </Link>
            <Link to="/how-it-works" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;