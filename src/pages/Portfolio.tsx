import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('SHOW ALL');

  const filters = ['SHOW ALL', 'WEB DESIGN', 'BRANDING', 'MARKETING'];

  const projects = [
    {
      title: 'EduLearn Mobile App',
      category: 'WEB DESIGN',
      description: 'A comprehensive e-learning platform with interactive courses, progress tracking, and offline capabilities.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React Native', 'Firebase', 'Payment Integration']
    },
    {
      title: 'FinanceFlow Dashboard',
      category: 'WEB DESIGN',
      description: 'Advanced financial management dashboard with real-time analytics and automated reporting.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'Chart.js', 'MongoDB']
    },
    {
      title: 'BrandVision Identity',
      category: 'BRANDING',
      description: 'Complete brand identity package including logo, color palette, and brand guidelines.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Illustrator', 'Brand Strategy', 'Logo Design']
    },
    {
      title: 'ShopSmart E-commerce',
      category: 'WEB DESIGN',
      description: 'Full-featured e-commerce platform with inventory management and multi-payment gateway integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Google Ads Campaign',
      category: 'MARKETING',
      description: 'Comprehensive Google Ads campaign management with advanced targeting and optimization.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Google Ads', 'PPC', 'Analytics']
    },
    {
      title: 'TechCorp Branding',
      category: 'BRANDING',
      description: 'Complete rebranding project including logo redesign, business cards, and marketing materials.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Brand Strategy', 'Print Design', 'Digital Assets']
    },
    {
      title: 'Social Media Marketing',
      category: 'MARKETING',
      description: 'Comprehensive social media marketing strategy with content creation and community management.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Facebook Ads', 'Instagram', 'Content Strategy']
    },
    {
      title: 'RestaurantPro Website',
      category: 'WEB DESIGN',
      description: 'Modern restaurant website with online ordering, table reservations, and menu management.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['WordPress', 'WooCommerce', 'Custom Theme']
    },
    {
      title: 'StartupHub Logo Suite',
      category: 'BRANDING',
      description: 'Modern logo design with variations for digital and print applications.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Vector Design', 'Brand Identity', 'Style Guide']
    }
  ];

  const filteredProjects = activeFilter === 'SHOW ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">
            Portfolio
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Our <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%]">Work</span> Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Explore our collection of successful projects across web development, mobile apps, branding, and marketing solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 animate-fade-in-up hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg'
                    : 'border-2 border-amber-300 text-amber-700 hover:bg-amber-50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-amber-100 animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium px-3 py-1 rounded-full animate-pulse-gentle bg-amber-100 text-amber-700">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-amber-100 hover:text-amber-700 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Highlights</h2>
            <p className="text-lg text-gray-600">The numbers speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-amber-500 mb-2 animate-count-up">30+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-4xl font-bold text-amber-500 mb-2 animate-count-up animation-delay-200">15+</div>
              <div className="text-gray-700">Industries Served</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="text-4xl font-bold text-amber-500 mb-2 animate-count-up animation-delay-500">98%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="text-4xl font-bold text-amber-500 mb-2 animate-count-up animation-delay-700">20+</div>
              <div className="text-gray-700">Repeat Clients</div>
            </div>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-amber-100 mb-8 animate-fade-in animation-delay-300">
            Let's create something amazing together
          </p>
          <button className="bg-white text-amber-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in animation-delay-500">
            Start Your Project Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;