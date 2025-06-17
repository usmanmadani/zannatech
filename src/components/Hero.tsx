import React from 'react';
import { ArrowRight, Smartphone, Globe, Palette, Brain, TrendingUp, Zap } from 'lucide-react';

interface HeroProps {
  onGetQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetQuote }) => {
  const services = [
    { icon: Smartphone, name: 'App Development' },
    { icon: Globe, name: 'Web Development' },
    { icon: Palette, name: 'UI/UX Design' },
    { icon: Brain, name: 'AI Integration' },
    { icon: Zap, name: 'Branding' },
    { icon: TrendingUp, name: 'Digital Marketing' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%]">
                Innovative Tech
              </span>
              <br />
              <span className="text-gray-900 animate-fade-in animation-delay-500">Solutions for a</span>
              <br />
              <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%] animation-delay-1000">
                Digital Future
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed animate-fade-in animation-delay-1000">
              We make every experience people have with your business meaningful. We build brands with purpose, brands that impact the lives of millions, and brands that last.
            </p>
            <button
              onClick={onGetQuote}
              className="bg-amber-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in animation-delay-1500 group"
            >
              Our Services
              <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </button>
          </div>

          {/* Right Content - Animated Logo Display */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right animation-delay-500">
            <div className="relative">
              {/* Floating Animation Container */}
              <div className="animate-float">
                <div className="w-96 h-96 bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl transform rotate-12 shadow-2xl animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-8 rounded-2xl shadow-xl transform -rotate-12 animate-bounce-gentle">
                    <div className="text-center">
                      <img
                        src="/Zannatech-removebg-preview.png"
                        alt="ZannaTech Innovation Limited"
                        className="w-48 h-auto mb-4"
                      />
                      <div className="text-2xl font-bold text-gray-800">ZANNATECH</div>
                      <div className="text-sm text-gray-600 font-medium">INNOVATIONS LIMITED</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-1000"></div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse animation-delay-2000"></div>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4">
                  <div className="w-3 h-3 bg-amber-300 rounded-full animate-pulse animation-delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Services Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-amber-100 animate-fade-in-up hover:animate-bounce-gentle`}
              style={{ animationDelay: `${2000 + index * 200}ms` }}
            >
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-amber-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <service.icon className="text-amber-600 transition-transform duration-300 group-hover:scale-110" size={24} />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center transition-colors duration-300 group-hover:text-amber-600">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;