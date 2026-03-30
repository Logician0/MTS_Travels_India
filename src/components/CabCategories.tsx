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

        {/* Cabs Grid - 3 COLS MOBILE, 5 COLS DESKTOP */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
          {cabsData.map((cab, index) => (
            <Link
              key={cab.slug}
              to={`/cabs/${cab.slug}`}
              className="group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 card-hover border border-gray-100 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container - PURE WHITE BG so edges disappear, NO padding so it fills the card */}
              <div className="relative h-20 sm:h-36 md:h-44 lg:h-40 overflow-hidden bg-white flex items-center justify-center shrink-0 border-b border-gray-50">
                <img
                  src={cab.image}
                  alt={`${cab.name} - ${cab.seating} seater taxi for Dehradun cab booking with ${cab.luggage} luggage space`}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-2 sm:p-4 md:p-5 flex flex-col items-center sm:items-start flex-grow bg-white">
                
                {/* Title */}
                <h3 className="text-[11px] sm:text-base md:text-lg lg:text-xl font-black text-[#111827] mb-1.5 sm:mb-3 text-center sm:text-left leading-tight group-hover:text-[#ffc800] transition-colors w-full truncate">
                  {cab.name}
                </h3>

                {/* Specs */}
                <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-1 sm:gap-3 mb-2 sm:mb-4 w-full">
                  <div className="flex items-center gap-0.5 sm:gap-1.5 text-[#6B7280] bg-gray-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[9px] sm:text-xs font-bold">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F8A7C]" />
                    {cab.seating.split(' ')[0]}
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1.5 text-[#6B7280] bg-gray-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[9px] sm:text-xs font-bold">
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F8A7C]" />
                    {cab.luggage.split(' ')[0]}
                  </div>
                  {cab.ac && (
                    <div className="hidden sm:flex items-center gap-1.5 text-[#6B7280] bg-gray-50 px-2 py-1 rounded-md">
                      <Snowflake className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F8A7C]" />
                      <span className="text-[9px] sm:text-xs font-bold text-gray-700">AC</span>
                    </div>
                  )}
                </div>

                {/* Bottom CTA Row */}
                <div className="flex w-full items-center justify-center sm:justify-between pt-1.5 sm:pt-3 border-t border-gray-50 sm:border-gray-100 mt-auto">
                  <span className="hidden sm:block text-[10px] sm:text-xs md:text-sm font-bold text-[#111827] group-hover:text-[#0F8A7C] transition-colors line-clamp-1">
                    Details
                  </span>
                  <div className="w-5 h-5 sm:w-8 sm:h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#ffc800] group-hover:-rotate-45 transition-all duration-300 shrink-0">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#111827]" />
                  </div>
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