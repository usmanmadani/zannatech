import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { sendContactEmail, type ContactFormData } from '../services/emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      setError('Please select a service');
      return false;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setError('Please provide project details (minimum 10 characters)');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      const success = await sendContactEmail(formData);
      
      if (success) {
        setIsSubmitted(true);
        // Reset form after successful submission
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 5000);
      } else {
        setError('Failed to send message. Please try again or contact us directly.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
      console.error('Contact form error:', err);
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
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 animate-fade-in-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <CheckCircle className="text-green-500 mx-auto mb-4 animate-bounce" size={64} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for contacting us. We've received your message and will get back to you within 24 hours.
                  </p>
                  <p className="text-sm text-gray-500">
                    A copy has been sent to: zannatechinnovations@gmail.com
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center animate-fade-in">
                      <AlertCircle className="text-red-500 mr-3 flex-shrink-0" size={20} />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">
                      Minimum 10 characters ({formData.message.length}/10)
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in-up animation-delay-600 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader className="animate-spin mr-2" size={20} />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Your message will be sent directly to zannatechinnovations@gmail.com
                  </p>
                </form>
              )}
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
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">Stay Updated</h2>
          <p className="text-xl text-amber-100 mb-8 animate-fade-in animation-delay-300">
            Subscribe to our newsletter for tech insights and company updates
          </p>
          <div className="max-w-md mx-auto flex animate-fade-in-up animation-delay-500">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-xl border-0 focus:ring-2 focus:ring-white transition-all duration-300"
            />
            <button className="bg-white text-amber-600 px-6 py-3 rounded-r-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;