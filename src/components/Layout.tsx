import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Business Registration (CAC)', id: 'cac' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <img
                  src="/Zannatech-removebg-preview.png"
                  alt="ZannaTech Innovation Limited"
                  className="h-12 w-auto"
                />
                <div className="text-left">
                  <div className="text-lg font-bold text-gray-800">ZannaTech</div>
                  <div className="text-xs text-amber-600 font-medium -mt-1">INNOVATIONS LIMITED</div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.slice(0, 6).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      currentPage === item.id
                        ? 'text-amber-600 border-b-2 border-amber-600'
                        : 'text-gray-700 hover:text-amber-600'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('cac')}
                className="border-2 border-amber-500 text-amber-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-amber-50 transition-all duration-300"
              >
                Business Registration (CAC)
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-6 py-3 rounded-xl text-sm font-medium hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
            {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navigation.filter(item => item.id !== 'cac').map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${
                      currentPage === item.id
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleNavClick('cac')}
                    className="flex-1 border-2 border-amber-500 text-amber-600 px-3 py-2 rounded-xl text-base font-medium hover:bg-amber-50 transition-all duration-300"
                  >
                    CAC Registration
                  </button>
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="flex-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-2 rounded-xl text-base font-medium hover:from-amber-500 hover:to-amber-600 transition-all duration-300"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/Zannatech-removebg-preview.png"
                  alt="ZannaTech Innovation Limited"
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold text-amber-400">ZannaTech</h3>
                  <p className="text-sm text-gray-400">INNOVATIONS LIMITED</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Transforming businesses with powerful digital solutions. We specialize in custom app development, 
                web design, AI integration, and digital marketing services.
              </p>
              <p className="text-sm text-gray-400">RC: 8156012</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="text-gray-300 hover:text-amber-400 transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    ALONG MAITAMA GARUI ROAD, MPAPE, FCT, NIGERIA
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-amber-400 flex-shrink-0" />
                  <a href="https://wa.me/23481149104085" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-600 transition-colors">+234 811 4910 4085</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-amber-400 flex-shrink-0" />
                  <span className="text-gray-300">zannatechinnovations@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} ZannaTech Innovation Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
