import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Check, ArrowRight, Phone, Car, CreditCard } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { getRouteBySlug, routesData } from '../data/routesData';
import { cabsData } from '../data/cabsData';

const RouteDetailPage = () => {
  const { routeSlug } = useParams();
  const route = getRouteBySlug(routeSlug || '');

  if (!route) {
    return <Navigate to="/routes" replace />;
  }

  const otherRoutes = routesData.filter(r => r.slug !== route.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={route.title}
        description={`Book ${route.title}. Distance: ${route.distance}, Time: ${route.travelTime}. Professional drivers, comfortable vehicles.`}
        keywords={`${route.from.toLowerCase()} to ${route.to.toLowerCase()} taxi, cab booking, outstation taxi`}
        image={route.image}
      />

      {/* Hero */}
      <section className="relative py-12 sm:py-16 lg:py-28 bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="floating-shape w-48 sm:w-72 h-48 sm:h-72 bg-[#0F8A7C] -top-24 sm:-top-36 -right-24 sm:-right-36" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/routes" className="inline-flex items-center gap-2 text-[#0F8A7C] font-medium mb-4 sm:mb-6 hover:underline text-sm sm:text-base">
            ← Back to Routes
          </Link>

          {/* Mobile: Image first, then content. Desktop: Content first, then image */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Image - Shows first on mobile */}
            <div className="relative order-1 lg:order-2">
              <img
                src={route.image}
                alt={route.title}
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-48 sm:h-64 lg:h-auto object-cover"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 gradient-bg rounded-2xl sm:rounded-3xl -z-10 opacity-30" />
            </div>

            {/* Content - Shows second on mobile */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F8A7C]" />
                <span className="text-sm sm:text-lg text-[#6B7280]">{route.from}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#6B7280]" />
                <span className="text-sm sm:text-lg text-[#6B7280]">{route.to}</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 sm:mb-6">
                {route.title}
              </h1>
              
              <p className="text-sm sm:text-lg text-[#6B7280] mb-6 sm:mb-8">
                {route.description}
              </p>

              {/* Route Info */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#0F8A7C]">{route.distance}</div>
                  <div className="text-xs sm:text-sm text-[#6B7280]">Distance</div>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#0F8A7C]">{route.travelTime}</div>
                  <div className="text-xs sm:text-sm text-[#6B7280]">Travel Time</div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-semibold text-[#111827] mb-2 sm:mb-3 text-sm sm:text-base">Route Highlights</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {route.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F8A7C] flex-shrink-0" />
                      <span className="text-[#6B7280] text-xs sm:text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
                <Link
                  to="/contact"
                  className="bg-[#ffc800] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold btn-hover hover:bg-[#e6b400] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Book This Route
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  to="/payment"
                  className="bg-[#111827] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold btn-hover hover:bg-black flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                  Pay Now
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

      {/* Available Vehicles */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-6 sm:mb-8">
            Available Vehicles for This Route
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {cabsData.map((cab) => (
              <Link
                key={cab.slug}
                to={`/cabs/${cab.slug}`}
                className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-4 sm:p-6 card-hover text-center"
              >
                <Car className="w-8 h-8 sm:w-10 sm:h-10 text-[#ffc800] mx-auto mb-2 sm:mb-3" />
                <h3 className="font-bold text-[#111827] mb-1 text-sm sm:text-base">{cab.name}</h3>
                <p className="text-xs sm:text-sm text-[#6B7280]">{cab.seating}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Routes */}
      <section className="py-10 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-6 sm:mb-8">
            Other Popular Routes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {otherRoutes.map((r) => (
              <Link
                key={r.slug}
                to={`/routes/${r.slug}`}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden card-hover border border-gray-100"
              >
                <img src={r.image} alt={r.title} className="w-full h-28 sm:h-40 object-cover" />
                <div className="p-3 sm:p-4">
                  <div className="flex items-center gap-1 sm:gap-2 text-[#111827] font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                    <span>{r.from}</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{r.to}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#6B7280]">{r.distance}</span>
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

export default RouteDetailPage;
