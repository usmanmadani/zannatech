import React, { useState } from 'react';
import { CheckCircle, CreditCard, AlertTriangle, MessageCircle, ArrowRight, Building2, Phone, HelpCircle, ChevronDown, ChevronUp, Copy } from 'lucide-react';

const CACRegistration: React.FC = () => {
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleContinueToForm = () => {
    window.open('https://forms.gle/Yr437rbTPcLhAQTQ7', '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppSupport = () => {
    window.open('https://wa.me/2348149104085?text=Hi%2C%20I%20need%20help%20with%20CAC%20registration', '_blank', 'noopener,noreferrer');
  };

  const toggleAccountDetails = () => {
    setShowAccountDetails(!showAccountDetails);
  };

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText('7045494824');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy account number:', err);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-4">🧾</div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            CAC Registration Payment & Confirmation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Thank you for choosing ZannaTech to handle your CAC registration.
            <br />
            Please make payment to the account below to begin your registration process.
          </p>
        </div>
      </section>

      {/* Payment Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-xl border-2 border-amber-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <CreditCard className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">💳 Payment Details</h2>
              <p className="text-gray-600 mb-4">Click below to view our secure payment account details</p>
            </div>

            {/* Toggle Button */}
            <div className="text-center mb-6">
              <button
                onClick={toggleAccountDetails}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold rounded-xl hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {showAccountDetails ? (
                  <>
                    <ChevronUp className="w-5 h-5 mr-2" />
                    Hide Account Details
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5 mr-2" />
                    View Account Details
                  </>
                )}
              </button>
            </div>

            {/* Account Details - Collapsible */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showAccountDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 border-2 border-amber-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="animate-fade-in-up">
                      <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Account Name</label>
                      <p className="text-xl font-bold text-gray-900">ZANNATECH INNOVATIONS LTD</p>
                    </div>
                    <div className="animate-fade-in-up" style={{animationDelay: '100ms'}}>
                      <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Account Number</label>
                      <div className="flex items-center gap-3">
                        <p className="text-xl font-bold text-gray-900">7045494824</p>
                        <button
                          onClick={copyAccountNumber}
                          className={`inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                            copySuccess 
                              ? 'bg-green-100 text-green-700 border border-green-300' 
                              : 'bg-amber-100 text-amber-700 border border-amber-300 hover:bg-amber-200'
                          }`}
                          title="Copy account number"
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          {copySuccess ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
                      <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Bank</label>
                      <p className="text-xl font-bold text-gray-900">Moniepoint MFB</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center p-6 bg-amber-50 rounded-xl animate-fade-in-up" style={{animationDelay: '300ms'}}>
                      <Building2 className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                      <p className="text-sm text-gray-600 font-medium">Secure Business Account</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Important Payment Notes
                  </h3>
                  <div className="mt-2 text-sm text-blue-700 space-y-2">
                    <p className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                      After making payment, click the button below to fill out your CAC registration details.
                    </p>
                    <p className="flex items-start">
                      <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-amber-600" />
                      Ensure the name on your payment matches the name you use on the form for easy verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleContinueToForm}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Continue to Registration Form
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">💬 Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions about CAC registration</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-amber-600" />
                How long does CAC registration take?
              </h3>
              <p className="text-gray-600">
                Business Name registration typically takes 3-7 business days, while Limited Liability Company registration takes 7-14 business days after payment and form submission.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-amber-600" />
                What documents do I need to provide?
              </h3>
              <p className="text-gray-600">
                You'll need valid ID, proposed business names (3 options), business address, and details of directors/proprietors. Specific requirements will be outlined in the registration form.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-amber-600" />
                What happens after I make payment?
              </h3>
              <p className="text-gray-600">
                After payment, fill out the registration form. Our team will verify your payment and begin processing your CAC registration immediately. You'll receive updates throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Help? 🤝</h2>
          <p className="text-xl text-amber-100 mb-8">
            Our support team is ready to assist you with any questions about CAC registration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppSupport}
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-xl hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Support
            </button>
            <a
              href="tel:+2348149104085"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-amber-600 text-lg font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us: +234 814 910 4085
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CACRegistration;