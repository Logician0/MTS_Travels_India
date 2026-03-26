import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CreditCard } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#111827]" />
      
      {/* Decorative Elements */}
      <div className="floating-shape w-64 sm:w-96 h-64 sm:h-96 bg-[#ffc800]/20 -top-32 sm:-top-48 -left-32 sm:-left-48" />
      <div className="floating-shape w-48 sm:w-72 h-48 sm:h-72 bg-[#ffc800]/20 -bottom-24 sm:-bottom-36 -right-24 sm:-right-36" />
      <div className="floating-shape w-32 sm:w-48 h-32 sm:h-48 bg-[#ffc800]/20 top-20 right-1/4 hidden sm:block" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#ffc800]/20 text-[#ffc800] text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
          Start Your Journey Today
        </span>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Ready to Book Your Ride?
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-10 max-w-2xl mx-auto px-4">
          Experience premium taxi service with professional drivers, comfortable vehicles, 
          and transparent pricing. Book now and travel with confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
          <Link
            to="/contact"
            className="bg-[#ffc800] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold btn-hover hover:bg-[#e6b400] hover:shadow-xl flex items-center justify-center gap-2"
          >
            Book Taxi Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          
          <a
            href="tel:+917217667160"
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold btn-hover hover:bg-white hover:text-[#111827] flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Contact Us
          </a>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffc800]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/>
            </svg>
            <span className="text-xs sm:text-sm">Instant Confirmation</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffc800]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span className="text-xs sm:text-sm">Free Cancellation</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffc800]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            <span className="text-xs sm:text-sm">Secure Booking</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
