import React from 'react';
import { ArrowRight, Globe, BookOpen, HeartPulse, GraduationCap, Laptop, Briefcase, Activity } from 'lucide-react';

const ADRPSection: React.FC = () => {
  const platforms = [
    {
      name: 'Qalam360',
      description: 'Primary and secondary education platform.',
      icon: <BookOpen className="w-6 h-6 text-amber-500" />,
      color: 'bg-amber-50'
    },
    {
      name: 'LearnNest',
      description: 'Higher education and research support.',
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      color: 'bg-blue-50'
    },
    {
      name: 'HospNest',
      description: 'Digital healthcare management.',
      icon: <HeartPulse className="w-6 h-6 text-red-500" />,
      color: 'bg-red-50'
    },
    {
      name: 'Ejamb',
      description: 'Exam preparation platform.',
      icon: <Briefcase className="w-6 h-6 text-green-500" />, // Using Briefcase as a placeholder for exam/work prep
      color: 'bg-green-50'
    },
    {
      name: 'RedHope',
      description: 'Sickle cell awareness and support.',
      icon: <Activity className="w-6 h-6 text-rose-500" />,
      color: 'bg-rose-50'
    },
    {
      name: 'Aswaq IT Academy',
      description: 'Digital literacy and tech skills.',
      icon: <Laptop className="w-6 h-6 text-purple-500" />,
      color: 'bg-purple-50'
    },
    {
      name: 'Munozi',
      description: 'Business support for SMEs.',
      icon: <Globe className="w-6 h-6 text-teal-500" />,
      color: 'bg-teal-50'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-amber-50/30">
      {/* Background Visual Elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">
            New Initiative
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering Africa's Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Digital Resilience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive platform to strengthen education, healthcare, and business across Africa.
            We are building the digital infrastructure for a resilient continent.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={() => { window.history.pushState({}, '', '/adrp'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
              Discover ADRP
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button onClick={() => { window.history.pushState({}, '', '/contact'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="bg-white text-amber-600 border-2 border-amber-500 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 flex items-center">
              Request a Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 group hover:-translate-y-1 hover:border-amber-300"
            >
              <div className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {platform.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
              <p className="text-gray-600 text-sm">{platform.description}</p>
            </div>
          ))}

          {/* CTA Card for the Grid */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-6 shadow-md text-white flex flex-col justify-center items-center text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3">Explore the Ecosystem</h3>
            <p className="text-amber-50 text-sm mb-6">Discover how all these platforms work together.</p>
            <button onClick={() => { window.history.pushState({}, '', '/adrp'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ADRPSection;
