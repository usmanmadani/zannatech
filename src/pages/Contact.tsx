import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  // Hook for tracking scroll position
  const [scrollY, setScrollY] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    // Initial checks
    handleResize();
    handleScroll();

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        
        // Format the WhatsApp message
        const message = `*New Contact Request*\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.subject}\n\nMessage: ${formData.message}`;
        
        // Redirect to WhatsApp with pre-filled message
        window.open(`https://wa.me/2347045494824?text=${encodeURIComponent(message)}`, '_blank');
      } else {
        setError('Failed to send message. Please try again or contact us via WhatsApp.');
      }
    } catch (error) {
      setError('An error occurred while sending the message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: 'ALONG MAITAMA GARUI ROAD, MPAPE, FCT, NIGERIA',
      color: 'text-amber-600'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: (
        <a
          href="https://wa.me/2347045494824"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 transition-colors"
        >
          +2347045494824
        </a>
      ),
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'zannatechinnovations@gmail.com',
      color: 'text-amber-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      color: 'text-purple-600'
    }
  ];

  const services = [
    'Mobile App Development',
    'Web Development',
    'UI/UX Design',
    'AI Integration',
    'Brand Identity',
    'Digital Marketing',
    'Other'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">
            Contact
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Get In <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Ready to start your project? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up group hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-amber-50 group-hover:bg-amber-100 transition-colors duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <info.icon className={`${info.color} transition-transform duration-300 group-hover:scale-110`} size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{info.title}</h3>
                <p className="text-gray-600">{info.details}</p>
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-8 mt-12">
            <a
              href="https://wa.me/2347045494824"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              <Phone size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/19nmxpgoDY/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/zanna_tech_/?utm_source=qr&r=nametag"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://twitter.com/zannatechi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-4 rounded-full hover:bg-gray-900 transition-colors duration-300"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Form */}
            <div 
              className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border border-amber-100 animate-fade-in-left relative overflow-hidden group"
              style={{
                transform: `perspective(1000px) rotateX(${scrollY * 0.02}deg)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              {/* Decorative Background Elements */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 bg-amber-100 rounded-full opacity-20 blur-2xl group-hover:bg-amber-200 transition-all duration-500"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              ></div>
              <div 
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-100 rounded-full opacity-20 blur-2xl group-hover:bg-amber-200 transition-all duration-500"
                style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
              ></div>
              
              {/* Header */}
              <div className="relative">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <span className="flex items-center space-x-2">
                    <span className="relative">
                      Send us a Message
                      <div className="absolute -top-1 -right-3 w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
                    </span>
                  </span>
                  <div 
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-50 to-green-100 px-3 py-1.5 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer group/status"
                    onClick={() => window.open('https://wa.me/2347045494824', '_blank')}
                  >
                    <span className="text-sm text-green-600 font-medium group-hover/status:text-green-700">Available 24/7</span>
                    <div className="relative">
                      <div className="w-2 h-2 bg-green-500 rounded-full group-hover/status:bg-green-600"></div>
                      <div className="absolute inset-0 w-2 h-2 bg-green-500 group-hover/status:bg-green-600 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </h2>
              </div>
              
              {/* Form Container with Enhanced Loading State */}
              <div className="w-full overflow-hidden rounded-xl bg-gradient-to-br from-amber-50/50 via-white to-amber-50/50 relative min-h-[600px] shadow-inner">
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm transition-all duration-700 z-10" 
                  id="loading-overlay"
                  style={{ transformOrigin: 'center' }}
                >
                  <div className="text-center scale-110 transform transition-transform">
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-amber-200 rounded-full animate-spin"></div>
                      <div className="w-20 h-20 border-4 border-amber-400 border-t-transparent rounded-full animate-spin absolute inset-0"></div>
                      <div className="w-20 h-20 border-4 border-amber-500 border-t-transparent border-b-transparent rounded-full animate-spin absolute inset-0" style={{ animationDirection: 'reverse' }}></div>
                    </div>
                    <p className="text-amber-600 font-medium mt-4 animate-pulse">Loading your form...</p>
                    <p className="text-amber-400 text-sm mt-1">This might take a few seconds</p>
                  </div>
                </div>
                
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfpe5386AAujc2ytZuIVLyvxatY7YAClplDibQo24NsgiGI2A/viewform?embedded=true"
                  className="w-full border-0 transition-all duration-500 ease-in-out"
                  style={{
                    height: 'calc(100vh - 600px)',
                    minHeight: '600px',
                    maxHeight: '1000px',
                  }}
                  title="Contact Form"
                  loading="lazy"
                  onLoad={() => {
                    const overlay = document.getElementById('loading-overlay');
                    if (overlay) {
                      overlay.style.opacity = '0';
                      overlay.style.transform = 'scale(1.1)';
                      setTimeout(() => {
                        overlay.style.display = 'none';
                      }, 700);
                    }
                  }}
                >
                  Loading...
                </iframe>
              </div>

              {/* Enhanced Form Info */}
              <div className="mt-8 space-y-6">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 rounded-xl">
                  <h3 className="font-semibold text-amber-800 mb-4 flex items-center">
                    <span className="text-2xl mr-2">📫</span>
                    <span>What happens next?</span>
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { text: 'Instant notification to our team', delay: '0' },
                      { text: 'Response within 24 hours', delay: '150' },
                      { text: 'Free consultation scheduling', delay: '300' }
                    ].map((item, index) => (
                      <li key={index} 
                          className="flex items-center bg-white/50 p-3 rounded-lg transform hover:scale-102 transition-all duration-300"
                          style={{ animationDelay: `${item.delay}ms` }}>
                        <div className="relative mr-3 flex-shrink-0">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-amber-500 rounded-full animate-ping opacity-40"></div>
                        </div>
                        <span className="text-sm text-amber-900">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse"></div>
                  <p>Messages are sent directly to zannatechinnovations@gmail.com</p>
                  <div className="w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            </div>

            {/* Company Info */}
            <div className="space-y-8 animate-fade-in-right animation-delay-300">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-amber-600 transition-colors duration-300">Why Choose ZannaTech?</h2>
                <div className="space-y-4">
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Fast Response Time</h3>
                      <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse animation-delay-200"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Free Consultation</h3>
                      <p className="text-gray-600 text-sm">Initial project consultation at no cost</p>
                    </div>
                  </div>
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse animation-delay-500"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Transparent Pricing</h3>
                      <p className="text-gray-600 text-sm">Clear, upfront pricing with no hidden fees</p>
                    </div>
                  </div>
                  <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse animation-delay-700"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                      <p className="text-gray-600 text-sm">Comprehensive post-launch support and maintenance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 group hover:scale-105 animate-fade-in-up animation-delay-800">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">Business Information</h3>
                <div className="space-y-3">
                  <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
                    <span className="text-sm font-medium text-gray-700">Company:</span>
                    <p className="text-gray-900">ZannaTech Innovation Limited</p>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '1000ms' }}>
                    <span className="text-sm font-medium text-gray-700">Registration:</span>
                    <p className="text-gray-900">RC: 8156012</p>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '1100ms' }}>
                    <span className="text-sm font-medium text-gray-700">Established:</span>
                    <p className="text-gray-900">2019</p>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '1200ms' }}>
                    <span className="text-sm font-medium text-gray-700">Email:</span>
                    <p className="text-gray-900">zannatechinnovations@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Email Setup Instructions */}
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 animate-fade-in-up animation-delay-1000">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">📧 Email Setup Required</h3>
                <p className="text-sm text-amber-700 mb-3">
                  To enable email functionality, please set up EmailJS with your credentials:
                </p>
                <ol className="text-xs text-amber-600 space-y-1 list-decimal list-inside">
                  <li>Create an account at <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" className="underline">emailjs.com</a></li>
                  <li>Create an email service and template</li>
                  <li>Update the credentials in <code className="bg-amber-100 px-1 rounded">src/services/emailService.ts</code></li>
                  <li>Configure the template to send to zannatechinnovations@gmail.com</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000 blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-4000 blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-600/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in relative">
              Stay Updated
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-white rounded-full animate-ping"></div>
            </h2>
          </div>
          <p className="text-xl text-amber-100 mb-8 animate-fade-in animation-delay-300 max-w-2xl mx-auto">
            Subscribe to our newsletter for tech insights and company updates
          </p>
          <div className="max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-1 rounded-xl animate-fade-in-up animation-delay-500">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg bg-white/90 border-0 focus:ring-2 focus:ring-amber-300 transition-all duration-300 placeholder-gray-400"
                />
                <button className="bg-white px-6 py-3 rounded-lg font-semibold text-amber-600 hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ml-1">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="text-amber-200/80 text-sm mt-4 animate-fade-in animation-delay-700">
              Join our growing community of tech enthusiasts! 🚀
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;