import React from 'react';
import Hero from '../components/Hero';
import { Users, Award, Clock, Star, ArrowRight } from 'lucide-react';

const Home: React.FC<{ setCurrentPage?: (page: string) => void }> = ({ setCurrentPage }) => {
  const handleGetQuote = () => {
    // Navigate to contact page when requesting a quote
    if (setCurrentPage) setCurrentPage('contact');
    else window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const stats = [
    { number: '30+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  const testimonials = [
    {
      name: 'David Okafor',
      company: 'TechStart Lagos',
      content: 'ZannaTech delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
    },
    {
      name: 'Sarah Ahmed',
      company: 'Green Earth NGO',
      content: 'The website they built for us is beautiful and functional. We\'ve seen a 300% increase in online donations since launch.',
      rating: 5,
    },
    {
      name: 'Michael Johnson',
      company: 'RetailPro Nigeria',
      content: 'Their AI integration helped automate our customer service. Response time improved by 80% and customer satisfaction is at an all-time high.',
      rating: 5,
    },
  ];

  const portfolioPreviews = [
    {
      title: 'EduLearn Mobile App',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'FinanceFlow Dashboard',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'BrandVision Identity',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
  <Hero onGetQuote={() => {
        if (setCurrentPage) setCurrentPage('services');
        else {
          window.history.pushState({}, '', '/services');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      }} />

      {/* Animated Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up hover:animate-bounce-gentle transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2 animate-count-up">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About ZannaTech Section with Parallax Effect */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">
                About Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in animation-delay-300">
                About <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%]">ZannaTech</span> Innovation Limited
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed animate-fade-in animation-delay-500">
                We are a leading technology company in Nigeria, specializing in creating innovative digital solutions 
                that transform businesses. Our team of expert developers, designers, and digital strategists work 
                together to deliver cutting-edge technology solutions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed animate-fade-in animation-delay-700">
                Since our inception, we've helped over 25 businesses across Africa achieve their digital goals 
                through custom app development, web solutions, AI integration, and comprehensive digital marketing strategies.
              </p>
              <div className="flex flex-wrap gap-6 animate-fade-in animation-delay-1000">
                <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                  <Users className="text-amber-500 mr-3 group-hover:animate-bounce" size={24} />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                  <Award className="text-amber-500 mr-3 group-hover:animate-bounce animation-delay-200" size={24} />
                  <span className="text-gray-700 font-medium">Award Winning</span>
                </div>
                <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                  <Clock className="text-amber-500 mr-3 group-hover:animate-bounce animation-delay-400" size={24} />
                  <span className="text-gray-700 font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right animation-delay-500">
              <div className="animate-float">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="ZannaTech Team"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-400/20 rounded-2xl hover:from-amber-500/30 hover:to-amber-400/30 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Portfolio Preview Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">
              Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%]">Work</span> Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Explore some of our recent projects and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioPreviews.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-amber-100 animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
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
                  <span className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full animate-pulse-gentle">{project.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 group-hover:text-amber-600 transition-colors duration-300">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in animation-delay-1000">
            <button onClick={() => { window.history.pushState({}, '', '/portfolio'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 group">
              View All Projects
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section (moved after Portfolio) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">Testimonials</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%]">Clients</span> Say</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:scale-105 group" style={{ animationDelay: `${i * 200}ms` }}>
                <div className="flex mb-4">{[...Array(t.rating)].map((_, si) => (<Star key={si} className="text-amber-400 fill-current" size={20} style={{ animationDelay: `${si * 100}ms` }} />))}</div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.content}"</p>
                <div><div className="font-semibold text-gray-900">{t.name}</div><div className="text-sm text-amber-600">{t.company}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAC Registration promo */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">CAC Registration for Companies and Businesses</h3>
            <p className="text-gray-600 mb-6">Register your business with the Corporate Affairs Commission quickly and professionally. We handle name search, documentation, and certificate delivery.</p>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => { window.history.pushState({}, '', '/cac-registration'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="bg-amber-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-amber-600 transition">Register Now</button>
              <button onClick={() => { window.history.pushState({}, '', '/pricing#cac-pricing'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="border-2 border-amber-500 text-amber-600 px-5 py-3 rounded-xl font-semibold hover:bg-amber-50 transition">View CAC Pricing</button>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=700" alt="CAC Registration" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* Pricing quick-links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Access to Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button onClick={() => { window.history.pushState({}, '', '/pricing#development-pricing'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 text-left hover:shadow-xl transition">
              <div className="text-lg font-semibold mb-2">Development</div>
              <p className="text-sm text-gray-600">Web and app development packages</p>
              <span className="inline-block mt-3 text-amber-600 font-semibold">See pricing →</span>
            </button>
            <button onClick={() => { window.history.pushState({}, '', '/pricing#uiux-pricing'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 text-left hover:shadow-xl transition">
              <div className="text-lg font-semibold mb-2">UI/UX Design</div>
              <p className="text-sm text-gray-600">Design packages for apps and websites</p>
              <span className="inline-block mt-3 text-amber-600 font-semibold">See pricing →</span>
            </button>
            <button onClick={() => { window.history.pushState({}, '', '/pricing#social-pricing'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 text-left hover:shadow-xl transition">
              <div className="text-lg font-semibold mb-2">Digital Marketing</div>
              <p className="text-sm text-gray-600">Content and social media packages</p>
              <span className="inline-block mt-3 text-amber-600 font-semibold">See pricing →</span>
            </button>
          </div>
        </div>
      </section>

      {/* Animated Contact Preview Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-amber-100 mb-8 animate-fade-in animation-delay-300">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-500">
            <button
              onClick={handleGetQuote}
              className="bg-white text-amber-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
            >
              Get Your Free Quote
              <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </button>
            <a href="https://wa.me/2347045494824" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 hover:scale-105">
              Schedule a Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;