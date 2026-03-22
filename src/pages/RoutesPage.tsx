import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { routesData } from '../data/routesData';

// --- EXACT PRICING DICTIONARY ---
const basePrices: Record<string, number> = {
  "Delhi": 3499, "Mussoorie": 1199, "Rishikesh": 1799, "Haridwar": 1799,
  "Nainital": 4499, "Shimla": 3999, "Chandigarh": 2999, "Manali": 7499,
  "Jammu": 8499, "Agra": 5499, "Ghaziabad": 3499, "Faridabad": 3499,
  "Gurugram": 3799, "Mathura": 4999, "Uttarkashi": 4499, "Roorkee": 1499,
  "Saharanpur": 1999, "Noida": 3499, "Greater Noida": 3699, "Jaipur": 6499
};

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {routesData.map((route) => {
              // Find the price for this specific route. 
              const startingPrice = basePrices[route.to] || 0;

              return (
                <Link
                  key={route.slug}
                  to={`/routes/${route.slug}`}
                  className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 card-hover border border-gray-100 flex flex-col h-full"
                >
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white text-lg sm:text-xl font-bold">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                        <span>{route.from}</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" />
                        <span>{route.to}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    
                    {/* INFO ROW: Time, Distance, and Price */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium mb-4">
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md text-[#6B7280]">
                        <Clock className="w-3.5 h-3.5 text-[#0F8A7C]" />
                        <span>{route.travelTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md text-[#6B7280]">
                        <MapPin className="w-3.5 h-3.5 text-[#0F8A7C]" />
                        <span>{route.distance}</span>
                      </div>
                      {/* Minimal Price Pill */}
                      {startingPrice > 0 && (
                        <div className="flex items-center bg-[#fffcf0] border border-[#ffc800]/30 px-2.5 py-1 rounded-md text-[#111827] font-bold shadow-sm">
                          ₹{startingPrice}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-[#6B7280] text-sm mb-6 line-clamp-2 flex-grow">
                      {route.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <span className="text-[#111827] font-bold text-sm group-hover:text-[#0F8A7C] transition-colors">
                        View Route Details
                      </span>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0F8A7C] rounded-full flex items-center justify-center group-hover:bg-[#ffc800] group-hover:-rotate-45 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-[#111827] transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default RoutesPage;