import { Link } from 'react-router-dom';
import { Users, Briefcase, Snowflake, ArrowRight } from 'lucide-react';
import { cabsData } from '../data/cabsData';

const CabCategories = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="floating-shape w-48 md:w-72 h-48 md:h-72 bg-[#ffc800] -top-24 md:-top-36 -left-24 md:-left-36" />
      <div className="floating-shape w-32 md:w-56 h-32 md:h-56 bg-[#111827] -bottom-16 md:-bottom-28 -right-16 md:-right-28" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#ffc800]/10 text-[#111827] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Our Fleet
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-3 sm:mb-4">
            Choose Your <span className="text-[#ffc800]">Ride</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto px-4">
            Select from our well-maintained fleet of vehicles for a comfortable journey.
          </p>
        </div>

        {/* Cabs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {cabsData.map((cab, index) => (
            <Link
              key={cab.slug}
              to={`/cabs/${cab.slug}`}
              className="group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-28 sm:h-36 md:h-44 lg:h-48 overflow-hidden bg-gradient-to-br from-[#F8FAFC] to-gray-100">
                <img
                  src={cab.image}
                  alt={cab.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Type Badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-[#ffc800] text-[#111827] text-[9px] sm:text-xs font-semibold rounded-full">
                    {cab.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#111827] mb-2 sm:mb-3 group-hover:text-[#ffc800] transition-colors">
                  {cab.name}
                </h3>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 text-[#6B7280]">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-[10px] sm:text-xs">{cab.seating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#6B7280]">
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-[10px] sm:text-xs">{cab.luggage}</span>
                  </div>
                  {cab.ac && (
                    <div className="flex items-center gap-1 text-[#6B7280]">
                      <Snowflake className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-[10px] sm:text-xs">AC</span>
                    </div>
                  )}
                </div>

                {/* Book Button */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#111827] flex items-center gap-1 group-hover:text-[#ffc800]">
                    View Details
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CabCategories;
