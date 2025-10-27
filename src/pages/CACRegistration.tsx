import React from 'react';
import { CheckCircle, Mail, MessageCircle } from 'lucide-react';

const CACRegistration: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Register Your Business with CAC
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            “Easily register your business name or company with the Corporate Affairs Commission through ZannaTech’s trusted portal.”
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-base md:text-lg">
            Fill out the form below to begin your CAC registration. Our team will guide you through the next steps once your submission is received.
          </p>
        </div>
      </section>

      {/* Embedded Form */}
      <section className="pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden">
            <iframe
              src="https://forms.gle/Yr437rbTPcLhAQTQ7"
              title="CAC Registration Form"
              className="w-full"
              style={{ minHeight: '900px', height: '75vh', border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
              Loading form...
            </iframe>
          </div>
        </div>
      </section>

      {/* Confirmation / Follow-up */}
      <section className="pb-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-green-600 font-semibold mb-4">
            <CheckCircle size={22} />
            <span>Once submitted, our representative will contact you via email or WhatsApp within 24 hours.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/2347045494824"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-green-600 text-green-700 hover:bg-green-50 transition-colors"
            >
              <MessageCircle size={18} /> Contact via WhatsApp
            </a>
            <a
              href="mailto:zannatechinnovations@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-white hover:from-amber-500 hover:to-amber-600 transition-colors"
            >
              <Mail size={18} /> Email ZannaTech
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CACRegistration;