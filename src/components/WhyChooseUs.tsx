import { UserCheck, Car, Wallet, Clock, Headphones, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: UserCheck,
      title: 'Experienced Drivers',
      description: 'Professional drivers with years of experience.',
    },
    {
      icon: Car,
      title: 'Well-Maintained Vehicles',
      description: 'Regularly serviced and sanitized vehicles.',
    },
    {
      icon: Wallet,
      title: 'Affordable Pricing',
      description: 'Transparent pricing with no hidden charges.',
    },
    {
      icon: Clock,
      title: 'On-Time Pickup',
      description: 'Punctual service with real-time tracking.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support.',
    },
    {
      icon: Shield,
      title: 'Safe Travel',
      description: 'GPS tracking and emergency support.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="floating-shape w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-[#ffc800] -top-16 sm:-top-24 md:-top-36 -left-16 sm:-left-24 md:-left-36" />
      <div className="floating-shape w-24 sm:w-36 md:w-56 h-24 sm:h-36 md:h-56 bg-[#111827] -bottom-12 sm:-bottom-18 md:-bottom-28 -right-12 sm:-right-18 md:-right-28" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Mobile Layout - Features First, Image Second */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 xl:gap-20 items-center">
          
          {/* Features Section - Shows First on Mobile */}
          <div className="order-1 lg:order-2 w-full">
            <span className="inline-block px-3 py-1 sm:py-1.5 bg-[#ffc800]/10 text-[#111827] text-[10px] sm:text-xs font-semibold rounded-full mb-2 sm:mb-3">
              Why Choose Us
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#111827] mb-3 sm:mb-4 md:mb-6">
              Why Choose <span className="text-[#ffc800]">MTS Travels</span>?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#6B7280] mb-4 sm:mb-6 md:mb-8">
              We are committed to providing the best taxi service experience in Dehradun and beyond.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#ffc800]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#ffc800]" />
                  </div>
                  <h3 className="text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold text-[#111827] mb-0.5 sm:mb-1 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-[#6B7280] leading-tight line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section - Shows Second on Mobile */}
          <div className="relative order-2 lg:order-1 w-full">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <img
                src="/images/vehicles/suv1.webp"
                alt="Why Choose MTS Travels - Premium Taxi Service"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/30 to-transparent" />
            </div>
            
            {/* Stats Card - Desktop Only */}
            <div className="hidden sm:block absolute -bottom-4 md:-bottom-6 left-4 right-4 sm:left-auto sm:-right-4 md:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 md:p-6">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#ffc800]">10+</div>
                  <div className="text-[10px] sm:text-xs text-[#6B7280]">Years</div>
                </div>
                <div className="w-px h-8 sm:h-10 md:h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#ffc800]">15K+</div>
                  <div className="text-[10px] sm:text-xs text-[#6B7280]">Trips</div>
                </div>
                <div className="w-px h-8 sm:h-10 md:h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#ffc800]">4.9</div>
                  <div className="text-[10px] sm:text-xs text-[#6B7280]">Rating</div>
                </div>
              </div>
            </div>

            {/* Mobile Stats Strip */}
            <div className="sm:hidden mt-3 bg-white rounded-lg shadow-md p-3">
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <div className="text-base font-bold text-[#ffc800]">10+</div>
                  <div className="text-[9px] text-[#6B7280]">Years</div>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div className="text-center">
                  <div className="text-base font-bold text-[#ffc800]">15K+</div>
                  <div className="text-[9px] text-[#6B7280]">Trips</div>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div className="text-center">
                  <div className="text-base font-bold text-[#ffc800]">4.9</div>
                  <div className="text-[9px] text-[#6B7280]">Rating</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden md:block absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-[#ffc800] rounded-xl sm:rounded-2xl -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
