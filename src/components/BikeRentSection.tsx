import { Link } from 'react-router-dom';
import { Bike, Shield, Clock, Fuel, Wrench, MapPin, Phone, ChevronRight, Sparkles, IndianRupee } from 'lucide-react';

const BikeRentSection = () => {
  const features = [
    { icon: Sparkles, text: 'Brand New Bikes' },
    { icon: Shield, text: 'Fully Insured' },
    { icon: Clock, text: 'Hourly Rental' },
    { icon: IndianRupee, text: 'Affordable Rates' },
    { icon: Fuel, text: 'Fuel Efficient' },
    { icon: Wrench, text: 'Well Maintained' },
  ];

  const benefits = [
    'New condition bikes',
    'Cheap hourly prices',
    'Daily & weekly rental',
    'Easy booking process',
    'Free helmet included',
    '24/7 roadside support',
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffc800] text-black px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
            <Bike className="w-4 h-4" />
            <span>New Service</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Bike Rental Service
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Rent bikes in new condition at cheap hourly prices. Perfect for local travel, sightseeing, and short trips around Dehradun.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
          {/* Left - Image */}
          <div className="relative order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/bike/bike-hero.webp"
                alt="Rent Bikes in Dehradun"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              
              
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 sm:top-4 sm:right-4 bg-[#ffc800] text-black px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              <Sparkles className="w-3 h-3 inline mr-1" />
              New Bikes
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              Explore Dehradun on <span className="text-[#ffc800]">Two Wheels</span>
            </h3>
            
            <p className="text-gray-400 text-sm sm:text-base mb-6">
              Our bike rental service offers well-maintained bikes in excellent condition at the most affordable hourly rates. Whether you need a bike for a few hours or a few days, we have flexible rental options to suit your needs.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#ffc800]/20 flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-3 h-3 text-[#ffc800]" />
                  </div>
                  <span className="text-gray-300 text-xs sm:text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/bike-rental"
                className="inline-flex items-center justify-center gap-2 bg-[#ffc800] text-black px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-[#e6b400] transition-all group"
              >
                <Bike className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Rent a Bike</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+917217667160"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features Strip */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ffc800] flex items-center justify-center">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <span className="text-white text-[10px] sm:text-xs font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
            <MapPin className="w-4 h-4" />
            <span>Available in Dehradun & nearby areas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeRentSection;
