import { Link } from 'react-router-dom';
import { Car, Plane, ArrowRight, RotateCcw, Heart, Mountain } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { servicesData } from '../data/servicesData';

const iconMap: { [key: string]: React.ElementType } = {
  car: Car,
  plane: Plane,
  arrowRight: ArrowRight,
  repeat: RotateCcw,
  heart: Heart,
  mountain: Mountain,
};

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Our Taxi Services"
        description="Explore our comprehensive taxi services - Local taxi, airport transfers, one-way trips, round trips, wedding car rental, and adventure tours in Dehradun."
        keywords="taxi services dehradun, airport transfer, wedding car, adventure tours"
      />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="floating-shape w-72 h-72 bg-[#ffc800] -top-36 -right-36" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#ffc800]/10 text-[#111827] text-sm font-semibold rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
              Taxi <span className="text-[#ffc800]">Services</span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              From local trips to long-distance travel, we offer comprehensive taxi services for all your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.icon] || Car;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-[#ffc800] rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#111827]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#ffc800] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#6B7280] mb-4 line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-[#111827] font-medium group-hover:text-[#ffc800]">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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

export default ServicesPage;
