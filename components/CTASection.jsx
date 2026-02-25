'use client';

import Link from 'next/link';

/**
 * CTA Section Component
 * - Strong call-to-action for admissions
 * - Trust elements and urgency
 * - Multiple CTA options
 * - Can be used throughout the site
 * @param {string} variant - 'primary' or 'secondary' for different styles
 */
export default function CTASection({ variant = 'primary' }) {
  const isPrimary = variant === 'primary';

  return (
    <section
      className={`section-padding ${
        isPrimary ? 'gradient-bg' : 'bg-gradient-to-r from-amber-500 to-orange-500'
      }`}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon/Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-full text-white mb-6 animate-fade-in">
            <span className="text-2xl">🎓</span>
            <span className="font-semibold">Limited Seats Available</span>
            <span className="text-2xl">🎓</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {isPrimary
              ? 'Ready to Start Your Educational Journey?'
              : 'Don\'t Miss Out on This Opportunity!'}
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {isPrimary
              ? 'Join thousands of successful students who achieved their dreams with Scholar Bucket. Get expert counselling and guaranteed admission support.'
              : 'Admissions are closing soon! Book your FREE counselling session today and secure your seat in top universities.'}
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl mb-2">✅</div>
              <p className="text-white font-semibold">100% Admission Guarantee</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl mb-2">💰</div>
              <p className="text-white font-semibold">Scholarship Assistance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-white font-semibold">Personalized Counselling</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/apply-now"
              className="btn-secondary px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Apply Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <a
              href="tel:+917027977081"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now: +91-70279-77081</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Quick Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Complete Documentation Support</span>
            </div>
          </div>

          {/* Urgency Message */}
          <p className="mt-6 text-white/70 text-sm">
            ⏰ Hurry! Only a few seats remaining for this admission cycle.
          </p>
        </div>
      </div>
    </section>
  );
}