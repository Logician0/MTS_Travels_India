import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { packagesData } from '../data/packagesData';

const PackagesPage = () => {
  return (
    <>
      <SEO
        title="Tour Packages from Dehradun | Char Dham, Nainital, Shimla, Manali | MTS Travels"
        description="Explore 7 tour packages from Dehradun - Char Dham Yatra pilgrimage, Nainital adventure, Shimla Manali, Mussoorie nature tours. All-inclusive with comfortable transportation."
        keywords="tour packages from dehradun, char dham yatra package, nainital tour, shimla manali tour, uttarakhand pilgrimage tour, dehradun tour packages"
      />

      {/* Hero */}
      <section className="relative py-12 sm:py-16 lg:py-28 bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="floating-shape w-48 sm:w-72 h-48 sm:h-72 bg-[#F5A623] -top-24 sm:-top-36 -left-24 sm:-left-36" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F5A623]/10 text-[#F5A623] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              Tour Packages
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111827] mb-4 sm:mb-6">
              7 Tour Packages from <span className="gradient-text">Dehradun</span>
            </h1>
            <p className="text-sm sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4 mb-6">
              Experience unforgettable journeys with our all-inclusive tour packages from Dehradun. From sacred Char Dham pilgrimage yatra to adventure-filled Himalayan tours - explore Nainital, Shimla, Manali, Mussoorie, Jammu-Dalhousie, and Goa beach packages.
            </p>
            <p className="text-xs sm:text-base text-[#6B7280] max-w-3xl mx-auto px-4">
              Professional drivers, comfortable vehicles, and carefully curated itineraries for religious, adventure, and relaxation destinations. Book flexible tour packages with transparent pricing.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {packagesData.map((pkg) => (
              <Link
                key={pkg.slug}
                to={`/packages/${pkg.slug}`}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
              >
                <div className="relative h-40 sm:h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-white text-[#0F8A7C] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">{pkg.title}</h3>
                    <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="line-clamp-1">{pkg.destinations.join(', ')}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-[#6B7280] text-xs sm:text-sm mb-4 line-clamp-2">
                    {pkg.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {pkg.includes.slice(0, 3).map((item, i) => (
                      <span key={i} className="bg-[#F8FAFC] text-[#6B7280] text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-[#6B7280]">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#0F8A7C] font-medium text-sm">
                      <span className="hidden sm:inline">View Details</span>
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

export default PackagesPage;
