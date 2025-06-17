import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: 'General Services',
      questions: [
        {
          question: 'What services does ZannaTech offer?',
          answer: 'ZannaTech offers comprehensive technology solutions including mobile app development, web development, UI/UX design, AI integration, brand identity design, and digital marketing services. We specialize in creating custom solutions tailored to your business needs.'
        },
        {
          question: 'How long does it take to complete a project?',
          answer: 'Project timelines vary based on complexity and scope. Simple UI/UX designs take 2-7 days, basic websites take 2-4 weeks, mobile apps take 6-12 weeks, and enterprise solutions can take 3-6 months. We provide detailed timelines during project planning.'
        },
        {
          question: 'Do you work with businesses outside Nigeria?',
          answer: 'Yes, we work with clients globally. While we\'re based in Nigeria, we serve clients across Africa, Europe, North America, and other regions through remote collaboration and digital communication tools.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve various industries including education, healthcare, finance, e-commerce, real estate, hospitality, agriculture, logistics, and non-profit organizations. Our solutions are customized for each industry\'s specific requirements.'
        }
      ]
    },
    {
      category: 'Development Process',
      questions: [
        {
          question: 'What is your development process?',
          answer: 'Our process includes 6 stages: Discovery (understanding requirements), Planning (project roadmap), Design (wireframes and mockups), Development (coding and testing), Testing (quality assurance), and Launch (deployment and support). We maintain regular communication throughout.'
        },
        {
          question: 'Do you provide ongoing support after launch?',
          answer: 'Yes, we provide comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. Support packages range from basic maintenance to full-service ongoing development.'
        },
        {
          question: 'Can you work with our existing team?',
          answer: 'Absolutely! We can integrate with your existing team, provide technical consulting, or work as an extension of your development team. We\'re flexible in our collaboration approach to meet your specific needs.'
        },
        {
          question: 'What technologies do you use?',
          answer: 'We use modern, industry-standard technologies including React, React Native, Node.js, Python, Flutter, AWS, Firebase, MongoDB, PostgreSQL, and various AI/ML frameworks. We choose technologies based on project requirements and long-term scalability.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          question: 'How do you determine pricing?',
          answer: 'Pricing is based on project complexity, timeline, required features, and ongoing support needs. We provide transparent, fixed-price quotes for most projects, with milestone-based payments for larger projects.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for projects over ₦500,000. Typically, we structure payments as: 50% upfront, 30% at milestone completion, and 20% upon final delivery. Custom payment schedules can be arranged.'
        },
        {
          question: 'What happens if the project scope changes?',
          answer: 'We document all requirements upfront and provide change request procedures. Scope changes are assessed for impact on timeline and budget, with formal approval required before implementation. We aim to be flexible while maintaining project integrity.'
        },
        {
          question: 'Do you provide free consultations?',
          answer: 'Yes, we offer free initial consultations to discuss your project requirements, provide technical advice, and create a detailed proposal. This helps ensure we\'re the right fit for your project before any commitment.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'What if we encounter issues after launch?',
          answer: 'We provide warranty coverage for bugs and issues related to our development work. Our support team is available to quickly address any problems. We also offer 24/7 emergency support for critical business applications.'
        },
        {
          question: 'Can you help migrate from our current system?',
          answer: 'Yes, we specialize in system migrations including data migration, platform transitions, and legacy system modernization. We ensure minimal downtime and data integrity throughout the migration process.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes, we provide comprehensive training for your team including system administration, content management, and user training. Training can be conducted remotely or on-site based on your preferences.'
        },
        {
          question: 'What security measures do you implement?',
          answer: 'We implement industry-standard security practices including data encryption, secure authentication, regular security audits, GDPR compliance, and secure hosting. Security is built into every layer of our solutions.'
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-gentle">
            <HelpCircle className="text-amber-600 animate-pulse" size={32} />
          </div>
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">
            FAQ
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Frequently Asked <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%]">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Find answers to common questions about our services, processes, and pricing.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center animate-fade-in">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex;
                  const isOpen = openFAQ === globalIndex;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white border border-amber-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up group hover:scale-[1.02]"
                      style={{ animationDelay: `${400 + questionIndex * 100}ms` }}
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-amber-50 transition-colors rounded-2xl group-hover:bg-amber-50"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-amber-600 transition-colors duration-300">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="text-amber-600 flex-shrink-0 animate-bounce" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" size={24} />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 animate-fade-in">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 animate-fade-in animation-delay-300">
            Our team is here to help. Get in touch for personalized answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in-up animation-delay-500 group">
              Contact Our Team
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button className="border-2 border-amber-500 text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 animate-fade-in-up animation-delay-700 hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-amber-100">zannatechinnovations@gmail.com</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-amber-100">+234 811 4910 4085</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-amber-100">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;