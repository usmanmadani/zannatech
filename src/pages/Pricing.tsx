import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import useCurrency from '../hooks/useCurrency';

interface PricingProps {
  onNavigateToContact?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigateToContact }) => {
  const uiuxPricing = [
    {
      name: 'Basic UI/UX',
      priceNGN: 2000,
      description: 'Perfect for simple landing pages',
      features: [
        '1 page design',
        'Mobile responsive',
        '2 design revisions',
        'Basic wireframe',
        'Design file delivery',
        '48-hour delivery'
      ],
      popular: false
    },
    {
      name: 'Standard UI/UX',
      priceNGN: 2500,
      description: 'Great for small business websites',
      features: [
        'Up to 3 pages design',
        'Mobile responsive',
        '3 design revisions',
        'Detailed wireframes',
        'Design system basics',
        'User flow diagram',
        '72-hour delivery'
      ],
      popular: true
    },
    {
      name: 'Premium UI/UX',
      priceNGN: 3000,
      description: 'Ideal for complex applications',
      features: [
        'Up to 5 pages design',
        'Mobile responsive',
        'Unlimited revisions',
        'Interactive prototypes',
        'Complete design system',
        'User research insights',
        '5-day delivery'
      ],
      popular: false
    },
    {
      name: 'Flyer Design',
      priceNGN: 3000,
      description: 'Single-page flyer design for events or promotions',
      features: [
        'Custom design',
        'Print-ready files',
        '2 revisions',
        'Fast turnaround'
      ],
      popular: false
    }
  ];

  const developmentPricing = [
    {
      name: 'Starter Website',
      priceNGN: 200000,
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        'Social media integration',
        '30 days support',
        'Content management'
      ],
      popular: false
    },
    {
      name: 'Business Website',
      priceNGN: 500000,
      description: 'Great for growing businesses',
      features: [
        'Up to 15 pages',
        'Advanced features',
        'E-commerce ready',
        'Payment integration',
        'Analytics setup',
        '90 days support',
        'Admin dashboard',
        'Email integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise Solution',
      priceNGN: 2000000,
      description: 'Custom solutions for large organizations',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Advanced integrations',
        'Database design',
        'User management',
        '1 year support',
        'Training included',
        'Scalable architecture'
      ],
      popular: false
    }
    
  ];

  const brandingPricing = [
    {
      name: 'Logo Only',
      priceNGN: 5000,
      description: 'Simple logo design',
      features: [
        '3 logo concepts',
        '2 revisions',
        'High-res files',
        'Basic style guide',
        '48-hour delivery'
      ],
      popular: false
    },
    {
      name: 'Brand Identity',
      priceNGN: 25000,
      description: 'Complete brand package',
      features: [
        '5 logo concepts',
        'Unlimited revisions',
        'Full brand guidelines',
        'Business card design',
        'Letterhead design',
        'Social media kit',
        '7-day delivery'
      ],
      popular: true
    },
    {
      name: 'Complete Branding',
      priceNGN: 50000,
      description: 'Comprehensive brand solution',
      features: [
        'Logo design',
        'Brand strategy',
        'Marketing materials',
        'Website graphics',
        'Packaging design',
        'Brand consultation',
        '14-day delivery'
      ],
      popular: false
    }
    ,
    {
      name: 'Slide Presentation',
      priceNGN: 5000,
      description: 'Professional slide deck for pitches and presentations',
      features: [
        '10-15 slides',
        'Custom design and icons',
        'Editable PowerPoint / Google Slides',
        '2 revisions'
      ],
      popular: false
    }
  ];

  const socialMediaPricing = [
    {
      name: 'Starter Content',
      priceNGN: 25000,
      description: 'Essential social media posts',
      features: [
        '3 custom posts',
        '2 social platforms',
        'Basic graphics design',
        'Content calendar',
        'Hashtag research',
        '2 revisions per post'
      ],
      popular: false
    },
    {
      name: 'Professional Content',
      priceNGN: 45000,
      description: 'Comprehensive social media package',
      features: [
        '6 custom posts',
        '4 social platforms',
        'Advanced graphics & videos',
        'Content strategy',
        'Engagement optimization',
        'Analytics reporting',
        'Unlimited revisions'
      ],
      popular: true
    },
    {
      name: 'Premium Content',
      priceNGN: 75000,
      description: 'Full-service content creation',
      features: [
        '15 custom posts',
        'All major platforms',
        'Video content creation',
        'Story templates',
        'Influencer collaboration',
        'Advanced analytics',
        'Monthly strategy calls'
      ],
      popular: false
    }
  ];

  const cacRegistrationPricing = [
    {
      name: 'Business Name Registration',
      priceNGN: 45000,
      description: 'Starting from ₦45,000',
      features: [
        'Business Name Availability Check',
        'CAC Processing & Documentation',
        'Certificate of Registration',
        'Professional guidance',
        'Fast processing'
      ],
      popular: false,
      icon: '🧾'
    },
    {
      name: 'Limited Liability Company',
      priceNGN: 70000,
      description: 'Starting from ₦70,000',
      features: [
        'Name Reservation',
        'Incorporation Documents',
        'RC Number Certificate',
        'Legal compliance check',
        'Company seal'
      ],
      popular: true,
      icon: '🏢'
    },
    {
      name: 'NGO / Incorporated Trustees',
      priceNGN: 150000,
      description: 'Starting from ₦150,000',
      features: [
        'Trustees Registration',
        'CAC Documentation',
        'Certificate of Incorporation',
        'Tax exemption guidance',
        'Board resolution template'
      ],
      popular: false,
      icon: '🤝'
    }
  ];

  const handleGetStarted = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    }
  };

  const handleCACRegistration = () => {
    // Navigate to CAC registration page
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', '/cac-registration');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
      window.location.href = '/cac-registration';
    }
  };

  const PricingCard = ({ plan, category }: { plan: any; category: string }) => {
    const { isNigeria, rateNGNtoUSD } = useCurrency();

    const formatPrice = () => {
      // prefer numeric NGN price
      const ngn = plan.priceNGN ?? 0;
      if (isNigeria) {
        return `₦${ngn.toLocaleString()}`;
      }
      const rate = rateNGNtoUSD || 0.0013;
      const usd = +(ngn * rate).toFixed(2);
      return `$${usd.toLocaleString()}`;
    };

    return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative border group hover:scale-105 ${
      plan.popular ? 'border-2 border-amber-500' : 'border-amber-100'
    }`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center animate-pulse-gentle">
            <Star size={16} className="mr-1" />
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{plan.name}</h3>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        <div className="text-3xl font-bold text-amber-600 mb-2 animate-count-up">{formatPrice()}</div>
        {category === 'development' && plan.priceNGN >= 2000000 && (
          <p className="text-sm text-gray-500">Starting from this price</p>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <Check className="text-green-500 mr-3 flex-shrink-0 animate-pulse" size={18} style={{ animationDelay: `${index * 100}ms` }} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={handleGetStarted}
        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
          plan.popular
            ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white hover:from-amber-500 hover:to-amber-600 shadow-lg hover:shadow-xl transform hover:scale-105'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </button>
    </div>
  );
  };

  const CACPricingCard = ({ plan, category }: { plan: any; category: string }) => {
    const { isNigeria, rateNGNtoUSD } = useCurrency();

    const formatPrice = () => {
      const ngn = plan.priceNGN ?? 0;
      if (isNigeria) {
        return `₦${ngn.toLocaleString()}`;
      }
      const rate = rateNGNtoUSD || 0.0013;
      const usd = +(ngn * rate).toFixed(2);
      return `$${usd.toLocaleString()}`;
    };

    return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative border group hover:scale-105 ${
      plan.popular ? 'border-2 border-amber-500' : 'border-amber-100'
    }`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center animate-pulse-gentle">
            <Star size={16} className="mr-1" />
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <div className="text-4xl mb-4">{plan.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{plan.name}</h3>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        <div className="text-3xl font-bold text-amber-600 mb-2 animate-count-up">{formatPrice()}</div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <Check className="text-green-500 mr-3 flex-shrink-0 animate-pulse" size={18} style={{ animationDelay: `${index * 100}ms` }} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={handleCACRegistration}
        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
          plan.popular
            ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white hover:from-amber-500 hover:to-amber-600 shadow-lg hover:shadow-xl transform hover:scale-105'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Proceed to Register
      </button>
    </div>
  );
  };

  return (

    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-pulse-gentle">
            Pricing
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Transparent <span className="text-amber-500 animate-text-shimmer bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%]">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Clear, competitive pricing for all our services. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* CAC Registration Pricing */}
      <section id="cac-pricing" className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CAC Business Registration</h2>
            <p className="text-lg text-gray-600">Professional business registration services with CAC</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cacRegistrationPricing.map((plan, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CACPricingCard plan={plan} category="cac" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Pricing */}
      <section id="development-pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Pricing</h2>
            <p className="text-lg text-gray-600">Full-stack development solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developmentPricing.map((plan, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <PricingCard plan={plan} category="development" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI/UX Pricing */}
      <section id="uiux-pricing" className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">UI/UX Design Pricing</h2>
            <p className="text-lg text-gray-600">Professional design solutions for every budget</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uiuxPricing.map((plan, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <PricingCard plan={plan} category="uiux" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Content Pricing */}
      <section id="social-pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Social Media Content Pricing</h2>
            <p className="text-lg text-gray-600">Engaging content that drives results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialMediaPricing.map((plan, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <PricingCard plan={plan} category="social" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Pricing */}
      <section id="branding-pricing" className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Branding Pricing</h2>
            <p className="text-lg text-gray-600">Build a strong brand identity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandingPricing.map((plan, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <PricingCard plan={plan} category="branding" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">Comprehensive digital solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(() => {
              const { isNigeria, rateNGNtoUSD } = useCurrency();
              const format = (ngn: number, monthly = false) => {
                if (isNigeria) return `₦${ngn.toLocaleString()}${monthly ? '/mo' : ''}`;
                const rate = rateNGNtoUSD || 0.0013;
                const usd = +(ngn * rate).toFixed(2);
                return `$${usd.toLocaleString()}${monthly ? '/mo' : ''}`;
              };

              const cards = [
                { title: 'AI Integration', priceNGN: 150000, desc: 'Custom AI solutions and chatbot development' },
                { title: 'Digital Marketing', priceNGN: 50000, desc: 'Social media management and ad campaigns', monthly: true },
                { title: 'SEO Services', priceNGN: 30000, desc: 'Search engine optimization and content strategy', monthly: true },
                { title: 'Maintenance', priceNGN: 25000, desc: 'Website updates, security, and support', monthly: true },
              ];

              return cards.map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 animate-fade-in-up hover:shadow-xl transition-all duration-300 group hover:scale-105" style={{ animationDelay: `${200 + i * 200}ms` }}>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{c.title}</h3>
                  <p className="text-2xl font-bold text-amber-600 mb-2 animate-count-up">{format(c.priceNGN, !!c.monthly)}</p>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing FAQs</h2>
          </div>

          <div className="space-y-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer payment plans?</h3>
              <p className="text-gray-600">Yes, we offer flexible payment plans for projects over ₦500,000. Contact us to discuss options.</p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in ongoing support?</h3>
              <p className="text-gray-600">Our support includes bug fixes, security updates, content updates, and technical assistance based on your plan.</p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade my package later?</h3>
              <p className="text-gray-600">Absolutely! You can upgrade your package at any time, and we'll credit any previous payments toward the new package.</p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide custom quotes?</h3>
              <p className="text-gray-600">Yes, for unique requirements or enterprise solutions, we provide detailed custom quotes based on your specific needs.</p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What platforms do you create content for?</h3>
              <p className="text-gray-600">We create content for all major social media platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, and YouTube, tailored to each platform's specific requirements.</p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide content strategy?</h3>
              <p className="text-gray-600">Yes, our Professional and Premium social media packages include comprehensive content strategy, audience analysis, and performance optimization to maximize engagement.</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-amber-100 mb-8 animate-fade-in animation-delay-300">
            Contact us for a free consultation and custom quote
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-white text-amber-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in animation-delay-500 group"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;