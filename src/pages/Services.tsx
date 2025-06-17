import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Smartphone, Globe, Palette, Brain, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Custom mobile applications for Android, iOS, and cross-platform solutions that engage users and drive business growth.',
      features: [
        'Native iOS and Android development',
        'Cross-platform React Native solutions',
        'Progressive Web Apps (PWA)',
        'App Store optimization and deployment',
        'Ongoing maintenance and updates',
        'Integration with third-party APIs'
      ]
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'SEO-friendly, responsive websites for businesses, schools, e-commerce, real estate, and more that convert visitors into customers.',
      features: [
        'Custom website design and development',
        'E-commerce solutions with payment integration',
        'Content Management Systems (CMS)',
        'Search Engine Optimization (SEO)',
        'Website maintenance and hosting',
        'Performance optimization and security'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions including wireframing, prototyping, and minimalist modern designs that enhance user experience.',
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Interactive design mockups',
        'Usability testing and optimization',
        'Responsive design for all devices',
        'Design system creation'
      ]
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Intelligent automation solutions including chatbots, virtual assistants, and predictive analytics to streamline operations.',
      features: [
        'Custom chatbot development',
        'Machine learning model integration',
        'Predictive analytics solutions',
        'Natural language processing',
        'AI-powered recommendation systems',
        'Process automation with AI'
      ]
    },
    {
      icon: Zap,
      title: 'Brand Identity',
      description: 'Complete branding solutions including logo design, business cards, and comprehensive branding guidelines that build trust.',
      features: [
        'Logo design and brand mark creation',
        'Brand guidelines and style guides',
        'Business card and stationery design',
        'Marketing collateral design',
        'Brand strategy consulting',
        'Digital brand asset creation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including social media ads, SEO, Google ads, and PPC campaigns that drive results.',
      features: [
        'Social media marketing and management',
        'Search Engine Optimization (SEO)',
        'Google Ads and PPC campaigns',
        'Content marketing strategy',
        'Email marketing campaigns',
        'Analytics and performance tracking'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultation.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a comprehensive project plan with timelines, milestones, and resource allocation to ensure smooth execution.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our design team creates wireframes, mockups, and prototypes that align with your brand and user expectations.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'We build your solution using the latest technologies and best practices, ensuring quality and performance.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing across devices and platforms to ensure your solution works flawlessly for all users.'
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We deploy your solution and provide ongoing support to ensure continued success and optimal performance.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">
            Services
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Our <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-300">
            Comprehensive technology solutions designed to transform your business and drive growth in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 animate-fade-in-up group hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <service.icon className="text-amber-600 transition-transform duration-300 group-hover:scale-110" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0 animate-pulse" style={{ animationDelay: `${featureIndex * 100}ms` }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">
              Process
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-300">
              Our <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%]">Process</span>
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-up animation-delay-500">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 animate-fade-in-up group hover:scale-105"
                style={{ animationDelay: `${700 + index * 200}ms` }}
              >
                <div className="text-4xl font-bold text-amber-500 mb-4 animate-count-up group-hover:animate-bounce" style={{ animationDelay: `${index * 100}ms` }}>{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-amber-100 mb-8 animate-fade-in animation-delay-300">
            Let's discuss your project and create a custom solution for your business
          </p>
          <button className="bg-white text-amber-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in animation-delay-500 group">
            Request a Free Consultation
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;