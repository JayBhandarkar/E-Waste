import React, { useState } from 'react';
import { ShoppingCart, Search, Filter, Star, MapPin, Clock } from 'lucide-react';

const CompanyMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Refurbished Laptops',
      category: 'Electronics',
      price: 299,
      originalPrice: 599,
      condition: 'Excellent',
      seller: 'TechRecycle Co.',
      rating: 4.8,
      location: 'New York',
      image: '💻',
      description: 'High-quality refurbished laptops with warranty'
    },
    {
      id: 2,
      name: 'Recycled Smartphone Parts',
      category: 'Components',
      price: 45,
      originalPrice: 120,
      condition: 'Good',
      seller: 'Mobile Parts Inc.',
      rating: 4.5,
      location: 'California',
      image: '📱',
      description: 'Genuine smartphone components from recycled devices'
    },
    {
      id: 3,
      name: 'Precious Metal Recovery',
      category: 'Materials',
      price: 1250,
      originalPrice: null,
      condition: 'Pure',
      seller: 'GoldTech Recycling',
      rating: 4.9,
      location: 'Texas',
      image: '🥇',
      description: 'Recovered gold, silver, and platinum from e-waste'
    },
    {
      id: 4,
      name: 'Refurbished Monitors',
      category: 'Electronics',
      price: 150,
      originalPrice: 300,
      condition: 'Very Good',
      seller: 'Display Solutions',
      rating: 4.6,
      location: 'Florida',
      image: '🖥️',
      description: '24-inch LED monitors, tested and certified'
    }
  ];

  const categories = ['all', 'Electronics', 'Components', 'Materials', 'Accessories'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketplace</h1>
        <p className="text-gray-600">Buy and sell refurbished electronics and recycled materials</p>
      </div>

      {/* Search and Filters */}
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-eco-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card hover:shadow-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="text-6xl mb-2">{product.image}</div>
              <span className="px-2 py-1 text-xs font-medium bg-eco-100 text-eco-800 rounded-full">
                {product.category}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                {product.location}
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Condition:</span>
              <span className="text-sm font-medium text-green-600">{product.condition}</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                )}
              </div>
              {product.originalPrice && (
                <span className="text-sm font-medium text-green-600">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                </span>
              )}
            </div>

            <div className="text-sm text-gray-600 mb-4">
              Sold by: <span className="font-medium">{product.seller}</span>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-eco-600 text-white py-2 px-4 rounded-lg hover:bg-eco-700 transition-colors flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Buy Now
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sell Your Products */}
      <div className="card mt-8 bg-gradient-to-r from-eco-50 to-primary-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Sell Your Products</h2>
          <p className="text-gray-600 mb-6">List your refurbished electronics and recycled materials</p>
          <button className="bg-eco-600 text-white px-8 py-3 rounded-lg hover:bg-eco-700 transition-colors font-medium">
            Start Selling
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyMarketplace;