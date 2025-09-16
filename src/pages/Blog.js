import React from 'react';
import { Calendar, User, ArrowRight, Leaf, Recycle, TrendingUp } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: 'The Future of E-Waste Management: Trends and Innovations for 2024',
    excerpt: 'Explore the latest trends in electronic waste management, from AI-powered sorting to blockchain traceability, and how they\'re shaping a more sustainable future.',
    author: 'Dr. Sarah Chen',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Innovation',
    image: '🌍'
  };

  const blogPosts = [
    {
      title: 'Understanding E-Waste Regulations: A Global Perspective',
      excerpt: 'Navigate the complex landscape of e-waste regulations across different countries and regions.',
      author: 'Michael Rodriguez',
      date: 'March 12, 2024',
      readTime: '6 min read',
      category: 'Regulation',
      image: '📋'
    },
    {
      title: 'The Hidden Value in Your Old Electronics',
      excerpt: 'Discover the precious metals and materials that can be recovered from electronic devices.',
      author: 'Emma Thompson',
      date: 'March 10, 2024',
      readTime: '5 min read',
      category: 'Education',
      image: '💎'
    },
    {
      title: 'Corporate E-Waste Programs: Best Practices and Case Studies',
      excerpt: 'Learn from successful corporate e-waste management programs and their impact.',
      author: 'James Wilson',
      date: 'March 8, 2024',
      readTime: '7 min read',
      category: 'Business',
      image: '🏢'
    },
    {
      title: 'DIY Electronics Repair: Extending Device Lifespan',
      excerpt: 'Simple repair techniques that can help extend the life of your electronic devices.',
      author: 'Lisa Park',
      date: 'March 5, 2024',
      readTime: '4 min read',
      category: 'DIY',
      image: '🔧'
    },
    {
      title: 'The Environmental Impact of Smartphone Production',
      excerpt: 'Understanding the carbon footprint and resource consumption of smartphone manufacturing.',
      author: 'Dr. Robert Green',
      date: 'March 3, 2024',
      readTime: '6 min read',
      category: 'Environment',
      image: '📱'
    },
    {
      title: 'Blockchain Technology in E-Waste Tracking',
      excerpt: 'How blockchain is revolutionizing transparency in electronic waste management.',
      author: 'Alex Kumar',
      date: 'March 1, 2024',
      readTime: '5 min read',
      category: 'Technology',
      image: '⛓️'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 24, active: true },
    { name: 'Innovation', count: 8, active: false },
    { name: 'Regulation', count: 6, active: false },
    { name: 'Education', count: 5, active: false },
    { name: 'Business', count: 3, active: false },
    { name: 'Environment', count: 2, active: false },
  ];

  const stats = [
    { icon: Leaf, label: 'Articles Published', value: '150+' },
    { icon: Recycle, label: 'Topics Covered', value: '25+' },
    { icon: TrendingUp, label: 'Monthly Readers', value: '50K+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-eco-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learning Hub
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stay informed about the latest trends, regulations, and innovations 
            in electronic waste management and sustainability.
          </p>
        </div>
      </section>

      {/* Blog Stats */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center">
                <stat.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Post */}
          <div className="bg-gradient-to-r from-primary-600 to-eco-600 rounded-2xl text-white p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-4">{featuredPost.image}</div>
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-primary-100 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-primary-200 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                        category.active
                          ? 'bg-primary-100 text-primary-800 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="card hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-4">{post.image}</div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.category === 'Innovation' ? 'bg-blue-100 text-blue-800' :
                        post.category === 'Regulation' ? 'bg-red-100 text-red-800' :
                        post.category === 'Education' ? 'bg-green-100 text-green-800' :
                        post.category === 'Business' ? 'bg-purple-100 text-purple-800' :
                        post.category === 'Environment' ? 'bg-eco-100 text-eco-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="btn-primary">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter for the latest insights on e-waste management and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;