'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  Crown, 
  ArrowRight, 
  Linkedin,
  CheckCircle,
  Users,
  TrendingUp,
  Smartphone,
  Monitor,
  BarChart3,
  DollarSign,
  Star,
  Globe,
  Shield,
  Rocket,
  Sparkles,
  ChevronRight,
  Play,
  Eye,
  ShoppingCart,
  Menu,
  X,
  User
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-slate-900">StoresA2Z</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#ecosystem" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Ecosystem
              </a>
              <a href="#benefits" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Benefits
              </a>
              <a href="#scarcity" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Limited Spots
              </a>
              <a 
                href="https://forms.gle/vpAtxGh6nWL6MCx48" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
              >
                Apply Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-slate-600" />
              ) : (
                <Menu className="w-6 h-6 text-slate-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-slate-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                <a 
                  href="#ecosystem" 
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ecosystem
                </a>
                <a 
                  href="#benefits" 
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Benefits
                </a>
                <a 
                  href="#scarcity" 
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Limited Spots
                </a>
                <a 
                  href="https://forms.gle/vpAtxGh6nWL6MCx48" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Early Partner Access - Only 66 Spots Available
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Be First. Build Faster.
              <br />
              <span className="text-blue-600">Scale Smarter.</span>
            </motion.h1>
            
            <motion.p 
              className="mt-8 text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join the elite group of agencies who will dominate mobile commerce. Earn ₹50,000-₹5,00,000 per client while we handle all the technical complexity.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">₹50K-5L</div>
                <div className="text-sm text-slate-600">Per Client Revenue</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">7 Days</div>
                <div className="text-sm text-slate-600">App Delivery Time</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-emerald-600 mb-2">0%</div>
                <div className="text-sm text-slate-600">Technical Overhead</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <a 
                href="https://forms.gle/vpAtxGh6nWL6MCx48" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply for Early Partner Access
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section id="ecosystem" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Complete Mobile Commerce Business
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to sell, build, and deliver mobile apps to your clients. No coding required.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Partner Portal Screenshot */}
            <motion.div 
              className="relative group"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-3xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">StoresA2Z</h3>
                      <p className="text-blue-600 text-sm">Partner Portal</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Total Clients: 2</p>
                        <p className="text-slate-600 text-sm">+0 this month</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Monthly Revenue: ₹3,998</p>
                        <p className="text-slate-600 text-sm">+0% from last month</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Active Apps: 0</p>
                        <p className="text-slate-600 text-sm">0 in development</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-slate-600">Partner Dashboard</p>
                </div>
              </div>
            </motion.div>

            {/* Client Admin Panel Screenshot */}
            <motion.div 
              className="relative group"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-3xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">Client Admin</h3>
                      <p className="text-purple-600 text-sm">Store Management</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Products: 150+</p>
                        <p className="text-slate-600 text-sm">Active inventory</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Orders: 25</p>
                        <p className="text-slate-600 text-sm">This week</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Revenue: ₹12,450</p>
                        <p className="text-slate-600 text-sm">This month</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Eye className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-slate-600">Client Admin Panel</p>
                </div>
              </div>
            </motion.div>

            {/* Mobile App Screenshot */}
            <motion.div 
              className="relative group"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-3xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">StoresA2Z</h3>
                      <p className="text-emerald-600 text-sm">Mobile App</p>
                    </div>
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Star className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Explore</p>
                        <p className="text-slate-600 text-sm">Discover products</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Cart: 3 items</p>
                        <p className="text-slate-600 text-sm">₹3,897.00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Categories</p>
                        <p className="text-slate-600 text-sm">Browse & shop</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Eye className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="text-sm text-slate-600">Mobile Commerce App</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              What You Can Do With Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your agency into a mobile commerce powerhouse. Here's exactly what you'll be able to offer your clients:
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Partner Portal */}
            <motion.div 
              className="relative group"
              variants={fadeInUp}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Sell Mobile Apps
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Offer premium mobile commerce apps to your clients at ₹50,000-₹5,00,000 per project. We handle all the technical work.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700">Premium Pricing: ₹50K-5L per app</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700">7-Day Delivery Guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700">No Technical Knowledge Required</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Client Admin Panel */}
            <motion.div 
              className="relative group"
              variants={fadeInUp}
            >
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Manage Client Stores
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Give your clients instant access to manage their mobile commerce store with our powerful admin panel.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700">Real-time Order Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700">Product & Inventory Control</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700">Sales Analytics & Reports</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Apps */}
            <motion.div 
              className="relative group"
              variants={fadeInUp}
            >
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 border border-emerald-200 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Scale Your Revenue
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Build a recurring revenue stream with mobile app maintenance, updates, and ongoing support services.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700">Monthly Maintenance: ₹10K-25K</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700">App Updates & Features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700">24/7 Support Services</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Earnings Potential Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Your Earnings Potential
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See exactly how much you can earn with our mobile commerce platform
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center p-8 rounded-2xl bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Per Project Revenue
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">₹50K - ₹5L</div>
              <p className="text-slate-600 leading-relaxed">
                Charge premium rates for mobile commerce apps. Our platform handles all technical complexity while you focus on sales.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-2xl bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Monthly Recurring Revenue
              </h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">₹10K - ₹25K</div>
              <p className="text-slate-600 leading-relaxed">
                Build sustainable income with app maintenance, updates, and support services for each client.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-2xl bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Annual Revenue Potential
              </h3>
              <div className="text-4xl font-bold text-emerald-600 mb-4">₹50L - ₹2Cr</div>
              <p className="text-slate-600 leading-relaxed">
                Scale to 50+ clients and build a ₹50L-2Cr annual revenue business with our platform.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Simple 3-step process to start earning with mobile commerce apps
            </p>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Sell to Your Clients</span>
                  <p className="text-sm text-slate-600">Offer mobile commerce apps at ₹50K-5L per project</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">We Build & Deliver</span>
                  <p className="text-sm text-slate-600">We handle all technical work and deliver in 7 days</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Earn & Scale</span>
                  <p className="text-sm text-slate-600">Collect payment and offer ongoing services</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Who's This For?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Perfect for agencies and professionals who want to dominate mobile commerce
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center p-8 rounded-2xl bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Digital Agencies
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Scale your mobile commerce offerings and increase your average project value by 5-10x.
              </p>
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-700">10+ active clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-700">Web development experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-700">Ready to expand services</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-2xl bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Freelancers
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Add premium mobile app services to your portfolio and increase your earning potential.
              </p>
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-700">Strong portfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-700">5+ satisfied clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-700">Growth mindset</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-2xl bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                E-commerce Consultants
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Expand beyond website solutions and offer complete mobile commerce ecosystems.
              </p>
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-700">E-commerce expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-700">D2C brand clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-700">Mobile-first vision</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section id="scarcity" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Limited Spots
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Only 66 Early Partner Access seats are available. Once filled, the doors close.
            </p>

            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-slate-300">Early Partner Access</span>
                  <span className="text-sm font-semibold text-slate-300">66 spots</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-4 mb-4">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "45%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <p className="text-sm text-slate-400">
                  30 spots already reserved • 36 remaining
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
              Ready to lead, not follow?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join the elite group of agencies shaping the future of mobile commerce
            </p>
            <a 
              href="https://forms.gle/vpAtxGh6nWL6MCx48" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">StoresA2Z</h3>
              <p className="text-sm text-slate-500">
                © 2024 StoresA2Z. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://linkedin.com/company/storesa2z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 text-center">
              Early Partner Access is selective. Applications will be reviewed before confirmation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
