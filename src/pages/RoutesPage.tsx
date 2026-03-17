import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { routesData } from '../data/routesData';

const RoutesPage = () => {
  return (
    <>
      <SEO
        title="Taxi Routes from Dehradun"
        description="Explore all taxi routes from Dehradun - Delhi, Mussoorie, Rishikesh, Haridwar, Nainital, Shimla, and more. Book reliable taxi service with professional drivers."
        keywords="dehradun taxi routes, outstation taxi, cab from dehradun"
      />

      {/* Hero */}
      <section className="relative py-12 sm:py-16 lg:py-28 bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="floating-shape w-48 sm:w-72 h-48 sm:h-72 bg-[#0F8A7C] -top-24 sm:-top-36 -right-24 sm:-right-36" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0F8A7C]/10 text-[#0F8A7C] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              Our Routes
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111827] mb-4 sm:mb-6">
              Taxi Routes from <span className="gradient-text">Dehradun</span>
            </h1>
            <p className="text-sm sm:text-lg text-[#6B7280] max-w-2xl mx-auto px-4">
              Book reliable taxi services for all popular routes from Dehradun with professional drivers.
            </p>
          </div>

          {/* Routes Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {routesData.map((route) => (
              <Link
                key={route.slug}
                to={`/routes/${route.slug}`}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
              >
                <div className="relative h-36 sm:h-48 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <div className="flex items-center gap-1 sm:gap-2 text-white text-base sm:text-lg font-bold">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>{route.from}</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mx-0.5 sm:mx-1" />
                      <span>{route.to}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#6B7280]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{route.travelTime}</span>
                      </div>
                      <span>•</span>
                      <span>{route.distance}</span>
                    </div>
                  </div>
                  <p className="text-[#6B7280] text-xs sm:text-sm mb-4 line-clamp-2">
                    {route.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                    <span className="text-[#0F8A7C] font-semibold text-sm">Book Now</span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0F8A7C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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

export default RoutesPage;
