import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="floating-shape w-48 md:w-64 h-48 md:h-64 bg-[#ffc800] -top-24 md:-top-32 -right-24 md:-right-32" />
      <div className="floating-shape w-32 md:w-48 h-32 md:h-48 bg-[#111827] -bottom-16 md:-bottom-24 -left-16 md:-left-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#ffc800]/10 text-[#111827] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-3 sm:mb-4">
            Our Taxi <span className="text-[#ffc800]">Services</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto px-4">
            Flexible travel options for every journey. Choose from our wide range of services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            // 🚨 Check if this is the wedding cars service
            const isWedding = service.slug === 'wedding-taxi-service';
            
            // 🚨 Override the title specifically for this card
            const displayTitle = isWedding ? 'Luxury Cars for Wedding' : service.title;

            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover border ${isWedding ? 'border-[#ffc800]/50 ring-2 ring-[#ffc800]/10' : 'border-gray-100'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={displayTitle}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Service Badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className={`flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 text-[#111827] text-[8px] sm:text-[10px] md:text-xs font-bold rounded-full ${isWedding ? 'bg-gradient-to-r from-[#ffc800] to-yellow-300 shadow-md' : 'bg-[#ffc800]'}`}>
                      {isWedding && <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                      {isWedding ? 'Premium Fleet' : service.features[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 lg:p-6">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-[#111827] mb-1 sm:mb-2 group-hover:text-[#ffc800] transition-colors line-clamp-1">
                    {displayTitle}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-[#6B7280] line-clamp-2 mb-2 sm:mb-3 lg:mb-4">
                    {isWedding ? 'Make your special day unforgettable with our premium luxury wedding cars.' : service.shortDescription}
                  </p>
                  
                  {/* Features - Hidden on small mobile */}
                  <div className="hidden sm:flex flex-wrap gap-1 sm:gap-1.5 mb-3 lg:mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 sm:px-2 py-0.5 bg-[#F8FAFC] text-[#6B7280] text-[8px] sm:text-[10px] md:text-xs rounded-full border border-gray-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className={`flex items-center gap-1 sm:gap-2 font-bold text-[10px] sm:text-xs md:text-sm ${isWedding ? 'text-[#d97706]' : 'text-[#111827]'}`}>
                      <span>{isWedding ? 'View Luxury Fleet' : 'Learn More'}</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;