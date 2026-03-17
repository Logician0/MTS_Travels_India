import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-white">
      {/* Floating Gradient Shapes */}
      <div className="floating-shape w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#ffc800] -top-10 sm:top-10 md:top-20 -right-10 sm:-right-16 md:-right-20" />
      <div className="floating-shape w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-[#111827] -bottom-10 sm:bottom-10 md:bottom-20 -left-10 sm:-left-16 md:-left-20" />
      <div className="floating-shape w-32 md:w-48 h-32 md:h-48 bg-[#ffc800] bottom-40 right-1/3 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          
          {/* Car Image - Shows FIRST on mobile (order-1), SECOND on desktop (lg:order-2) */}
          <div className="relative animate-fade-in-up order-1 lg:order-2 lg:-mt-8" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/heroposter.webp"
                  alt="Premium Taxi Service in Dehradun - MTS Travels India"
                  className="w-full h-40 sm:h-56 md:h-72 lg:h-[400px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              
            </div>

            {/* Premium Fleet Card - Below Image */}
            <div className="mt-3 sm:mt-4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffc800] rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-lg sm:text-xl">🚗</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-[#111827]">Premium Fleet</div>
                    <div className="text-[10px] sm:text-xs text-[#6B7280]">50+ Well-Maintained Vehicles</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="text-center">
                    <div className="text-sm sm:text-lg font-bold text-[#ffc800]">4.9★</div>
                    <div className="text-[8px] sm:text-[10px] text-[#6B7280]">Rating</div>
                  </div>
                  <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
                  <div className="text-center hidden sm:block">
                    <div className="text-sm sm:text-lg font-bold text-[#111827]">2000+</div>
                    <div className="text-[8px] sm:text-[10px] text-[#6B7280]">Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Shows SECOND on mobile (order-2), FIRST on desktop (lg:order-1) */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            {/* Government Approved Badge */}
            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#ffc800]/10 text-[#111827] text-[11px] sm:text-sm font-semibold rounded-full border border-[#ffc800]">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                Government Approved
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-[#111827] text-[11px] sm:text-sm font-semibold rounded-full">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                Trusted Taxi Service
              </span>
            </div>
            
            {/* Updated Heading Structure */}
            <h1 className="text-[#111827] leading-tight mb-3 sm:mb-4 md:mb-6">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Reliable & Comfortable
              </span>
              <span className="block mt-1 sm:mt-2">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6B7280]">
                  Taxi Service in{' '}
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffc800]">
                  Dehradun
                </span>
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-[#6B7280] leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-xl">
              Book affordable rides for local trips, airport transfers, and outstation travel 
              across India with professional drivers and well-maintained vehicles.
            </p>

            <div className="flex flex-row gap-2 sm:gap-4">
              <Link
                to="/contact"
                className="bg-[#ffc800] text-[#111827] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl text-xs sm:text-sm md:text-base font-semibold btn-hover hover:bg-[#e6b400] hover:shadow-xl hover:shadow-[#ffc800]/25 flex items-center justify-center gap-1.5 sm:gap-2 flex-1 sm:flex-none"
              >
                Book Your Taxi
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </Link>
              <a
                href="tel:+917217667160"
                className="border-2 border-[#111827] text-[#111827] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl text-xs sm:text-sm md:text-base font-semibold btn-hover hover:bg-[#111827] hover:text-white flex items-center justify-center gap-1.5 sm:gap-2 flex-1 sm:flex-none"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ffc800]">15K+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-[#6B7280]">Happy Customers</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ffc800]">50+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-[#6B7280]">Vehicles</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ffc800]">100+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-[#6B7280]">Routes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
