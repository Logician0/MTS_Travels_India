import { Link } from 'react-router-dom';
import { Users, Briefcase, ArrowRight, Snowflake } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { cabsData } from '../data/cabsData';

const CabsPage = () => {
  return (
    <>
      <SEO
        title="Our Cab Fleet - Premium Vehicles"
        description="Explore our premium fleet of vehicles - Sedans, SUVs, Tempo Travellers, and Buses. Well-maintained vehicles with professional drivers for your comfortable journey."
        keywords="taxi fleet dehradun, cab types, suv rental, tempo traveller booking"
      />

      {/* Hero */}
      <section className="relative py-12 sm:py-16 lg:py-28 bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="floating-shape w-48 sm:w-72 h-48 sm:h-72 bg-[#ffc800] -top-24 sm:-top-36 -left-24 sm:-left-36" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#ffc800]/10 text-[#111827] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              Our Fleet
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111827] mb-4 sm:mb-6">
              Choose Your <span className="text-[#ffc800]">Perfect Ride</span>
            </h1>
            <p className="text-sm sm:text-lg text-[#6B7280] max-w-2xl mx-auto px-4">
              From compact sedans to spacious buses, we have the right vehicle for every occasion and group size.
            </p>
          </div>

          {/* Cabs Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {cabsData.map((cab) => (
              <Link
                key={cab.slug}
                to={`/cabs/${cab.slug}`}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
              >
                <div className="grid sm:grid-cols-2">
                  <div className="relative h-48 sm:h-full overflow-hidden">
                    <img
                      src={cab.image}
                      alt={cab.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#ffc800] text-[#111827] text-xs font-semibold px-3 py-1 rounded-full">
                        {cab.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#ffc800] transition-colors">
                      {cab.name}
                    </h2>
                    <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">
                      {cab.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <Users className="w-4 h-4 text-[#ffc800]" />
                        <span>{cab.seating}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <Briefcase className="w-4 h-4 text-[#ffc800]" />
                        <span>{cab.luggage}</span>
                      </div>
                      {cab.ac && (
                        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                          <Snowflake className="w-4 h-4 text-[#ffc800]" />
                          <span>AC Available</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-[#111827] font-semibold group-hover:text-[#ffc800]">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default CabsPage;
