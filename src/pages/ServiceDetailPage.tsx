import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, ArrowRight, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { getServiceBySlug, servicesData } from '../data/servicesData';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug || '');

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = servicesData.filter(s => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={service.title}
        description={service.description}
        keywords={`${service.title.toLowerCase()}, taxi service dehradun, cab booking`}
        image={service.image}
      />

      {/* Hero */}
      <section className="relative py-12 sm:py-16 lg:py-28 bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="floating-shape w-48 sm:w-72 h-48 sm:h-72 bg-[#ffc800] -top-24 sm:-top-36 -right-24 sm:-right-36" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-[#111827] font-medium mb-4 sm:mb-6 hover:text-[#ffc800] text-sm sm:text-base">
            ← Back to Services
          </Link>
          
          {/* Mobile: Image first, then content. Desktop: Content first, then image */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Image - Shows first on mobile */}
            <div className="relative order-1 lg:order-2">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-48 sm:h-64 lg:h-auto object-cover"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 bg-[#ffc800] rounded-2xl sm:rounded-3xl -z-10 opacity-30" />
            </div>

            {/* Content - Shows second on mobile */}
            <div className="order-2 lg:order-1">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 sm:mb-6">
                {service.title}
              </h1>
              <p className="text-sm sm:text-lg text-[#6B7280] mb-6 sm:mb-8">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#ffc800]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#ffc800]" />
                    </div>
                    <span className="text-[#111827] font-medium text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
                <Link
                  to="/contact"
                  className="bg-[#ffc800] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold btn-hover hover:bg-[#e6b400] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <a
                  href="tel:+917217667160"
                  className="border-2 border-[#111827] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold btn-hover flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - 2 columns on mobile */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111827] mb-6 sm:mb-8 lg:mb-10 text-center">
            Benefits of Our <span className="text-[#ffc800]">{service.title}</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffc800] rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#111827]" />
                </div>
                <h3 className="font-semibold text-[#111827] text-xs sm:text-sm lg:text-base">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111827] mb-6 sm:mb-8 lg:mb-10">
            Other <span className="text-[#ffc800]">Services</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 card-hover border border-gray-100"
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#111827] mb-1 sm:mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[#6B7280] mb-2 sm:mb-3 lg:mb-4 line-clamp-2">{s.shortDescription}</p>
                <span className="text-[#111827] font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2 hover:text-[#ffc800]">
                  Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServiceDetailPage;