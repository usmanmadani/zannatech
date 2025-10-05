import React from 'react';
import { Target, Eye, Heart, Award, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive business growth.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships through exceptional service.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing requirements and deliver solutions with speed and precision.',
    },
  ];

  const team = [
    {
      name: 'Usman Madani Zanna',
      role: 'CEO & Lead Developer',
      image: '/image.png',
      description: 'Visionary leader with 3+ years in software development and business strategy.',
    },
    {
      name: 'Fayza Madani Zanna',
      role: 'Brand Designer & Marketing Expert',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Creative brand designer and marketing strategist with 7+ years of experience in brand identity and digital marketing.',
    },
    {
      name: 'Abba madani zanna',
      role: 'social media manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'digital marketing strategies including social media ads, SEO, Google ads,',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">
              About Us
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-300">
              About <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%]">ZannaTech</span> Innovation Limited
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
              We help businesses thrive through innovative technology solutions, combining creativity with technical expertise to deliver exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fade-in animation-delay-700">Our Story</h2>
              <p className="text-gray-600 mb-6 animate-fade-in animation-delay-1000">
                Founded in 2023, ZannaTech Innovation Limited emerged from a vision to bridge the gap between 
                traditional businesses and modern digital solutions. We recognized that many businesses in Nigeria 
                and across Africa were struggling to adapt to the digital age.
              </p>
              <p className="text-gray-600 mb-6 animate-fade-in animation-delay-1500">
                What started as a small team of passionate developers has grown into a full-service technology 
                agency, serving clients across various industries. We've completed over 30 projects, helping 
                businesses transform their operations and reach new heights.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 animate-fade-in-up animation-delay-2000 hover:shadow-lg transition-all duration-300">
                <p className="text-sm text-gray-600 mb-2">Company Registration</p>
                <p className="text-lg font-semibold text-amber-600">RC: 8156012</p>
              </div>
            </div>
            <div className="relative animate-fade-in-right animation-delay-500">
              <div className="animate-float">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Our Story"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-400/20 rounded-lg hover:from-amber-500/30 hover:to-amber-400/30 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
                <Target className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that drive growth, efficiency, 
                and digital transformation across Africa.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle animation-delay-500">
                <Eye className="text-orange-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading technology partner for businesses seeking digital excellence, 
                recognized for innovation, quality, and transformative solutions.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle animation-delay-1000">
                <Heart className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Purpose</h3>
              <p className="text-gray-600">
                Creating lasting impact by building technology solutions that solve real-world problems 
                and contribute to economic growth and development.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in-up group hover:scale-105"
                style={{ animationDelay: `${800 + index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300 group-hover:animate-bounce">
                  <value.icon className="text-amber-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The talented individuals behind our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up group hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6 animate-float" style={{ animationDelay: `${index * 500}ms` }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{member.name}</h3>
                <p className="text-amber-500 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-white mb-2 animate-count-up">30+</div>
              <div className="text-amber-100">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-4xl font-bold text-white mb-2 animate-count-up animation-delay-200">25+</div>
              <div className="text-amber-100">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="text-4xl font-bold text-white mb-2 animate-count-up animation-delay-500">5+</div>
              <div className="text-amber-100">Years Experience</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="text-4xl font-bold text-white mb-2 animate-count-up animation-delay-700">24/7</div>
              <div className="text-amber-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;