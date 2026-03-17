import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { packagesData } from '../data/packagesData';

const TourPackages = () => {
  const displayPackages = packagesData.slice(0, 6);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="floating-shape w-48 md:w-72 h-48 md:h-72 bg-[#ffc800] -top-24 md:-top-36 -left-24 md:-left-36" />
      <div className="floating-shape w-32 md:w-56 h-32 md:h-56 bg-[#111827] -bottom-16 md:-bottom-28 -right-16 md:-right-28" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#ffc800]/10 text-[#111827] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Tour Packages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-3 sm:mb-4">
            Explore Our <span className="text-[#ffc800]">Tour Packages</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto px-4">
            Discover the best of Uttarakhand and North India with our curated travel packages.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {displayPackages.map((pkg, index) => (
            <Link
              key={pkg.slug}
              to={`/packages/${pkg.slug}`}
              className="group bg-white rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Duration Badge */}
                <div className="absolute top-1.5 sm:top-2 md:top-3 right-1.5 sm:right-2 md:right-3">
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#ffc800] text-[#111827] text-[8px] sm:text-[10px] md:text-xs font-semibold rounded-full">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-[11px] sm:text-sm md:text-base lg:text-lg font-bold text-[#111827] mb-1 sm:mb-2 group-hover:text-[#ffc800] transition-colors line-clamp-2">
                  {pkg.title}
                </h3>
                
                {/* Package Info */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3">
                  <div className="flex items-center gap-0.5 sm:gap-1 text-[#6B7280]">
                    <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#ffc800]" />
                    <span className="text-[8px] sm:text-[10px] md:text-xs">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1 text-[#6B7280]">
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#ffc800]" />
                    <span className="text-[8px] sm:text-[10px] md:text-xs">{pkg.destinations.length} Places</span>
                  </div>
                </div>

                {/* View Details */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#111827] group-hover:text-[#ffc800] transition-colors flex items-center gap-1">
                    View Details
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 bg-[#ffc800] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold btn-hover hover:bg-[#e6b400] hover:shadow-xl hover:shadow-[#ffc800]/25"
          >
            View All Packages
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
