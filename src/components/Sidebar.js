import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Recycle, Home, Info, Cog, Award, Users, BookOpen, Phone, LayoutDashboard, ShoppingCart, Wallet, BarChart3, LogIn, User } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isLoggedIn = localStorage.getItem('user');
  
  const publicNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'How It Works', href: '/how-it-works', icon: Cog },
  ];
  
  const privateNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Rewards Wallet', href: '/rewards-wallet', icon: Wallet },
    { name: 'Company Resale', href: '/company-resale', icon: ShoppingCart },
    { name: 'Impact Dashboard', href: '/impact-dashboard', icon: BarChart3 },
    { name: 'Features', href: '/features', icon: Award },
    { name: 'Rewards', href: '/rewards', icon: Award },
    { name: 'Partners', href: '/partnerships', icon: Users },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];
  
  const navigation = isLoggedIn ? privateNavigation : publicNavigation;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b">
            <Link to="/" className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-gray-900">E-Waste Loop</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'bg-primary-100 text-primary-700 border-r-4 border-primary-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Profile & CTA Section */}
          <div className="p-4 border-t space-y-3">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="btn-primary w-full inline-flex items-center justify-center">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Link>
                <Link to="/signup" className="btn-secondary w-full inline-flex items-center justify-center">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                {/* Profile Section */}
                <Link to="/profile" className="block">
                  <div className="bg-primary-50 rounded-lg p-3 hover:bg-primary-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 truncate">
                          {JSON.parse(localStorage.getItem('user') || '{}').name || 'User'}
                        </div>
                        <div className="text-sm text-gray-500 truncate">
                          {JSON.parse(localStorage.getItem('user') || '{}').email || 'user@example.com'}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                
                {/* Logout Button */}
                <button 
                  onClick={() => {
                    localStorage.removeItem('user');
                    window.location.href = '/';
                  }}
                  className="btn-secondary w-full"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;