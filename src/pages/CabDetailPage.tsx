import { useParams, Link, Navigate } from 'react-router-dom';
import { Users, Briefcase, Check, ArrowRight, Phone, CreditCard } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { getCabBySlug, cabsData } from '../data/cabsData';

const CabDetailPage = () => {
  const { cabSlug } = useParams();
  const cab = getCabBySlug(cabSlug || '');

  if (!cab) {
    return <Navigate to="/cabs" replace />;
  }

  const otherCabs = cabsData.filter(c => c.slug !== cab.slug);

  return (
    <>
      <SEO
        title={`${cab.name} - ${cab.type}`}
        description={cab.description}
        keywords={`${cab.name.toLowerCase()} rental dehradun, ${cab.type.toLowerCase()} booking`}
        image={cab.image}
      />

      {/* Hero */}
      <section className="relative py-12 sm:py-16 lg:py-28 bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="floating-shape w-48 sm:w-72 h-48 sm:h-72 bg-[#ffc800] -top-24 sm:-top-36 -right-24 sm:-right-36" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/cabs" className="inline-flex items-center gap-2 text-[#111827] font-medium mb-4 sm:mb-6 hover:underline text-sm sm:text-base">
            ← Back to Fleet
          </Link>

          {/* Mobile: Images first. Desktop: Images left, content right */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Images - Shows first on mobile */}
            <div className="order-1 lg:order-1">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-3 sm:mb-4">
                <img
                  src={cab.image}
                  alt={cab.name}
                  className="w-full h-48 sm:h-64 lg:h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {cab.images.map((img: string, i: number) => (
                  <div key={i} className="rounded-lg sm:rounded-xl overflow-hidden">
                    <img src={img} alt={`${cab.name} ${i + 1}`} className="w-full h-16 sm:h-24 object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Details - Shows second on mobile */}
            <div className="order-2 lg:order-2">
              <span className="text-xs sm:text-sm text-[#ffc800] font-medium">{cab.type}</span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-3 sm:mb-4">
                {cab.name}
              </h1>
              <p className="text-sm sm:text-lg text-[#6B7280] mb-4 sm:mb-6">
                {cab.description}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                    <span className="font-medium text-[#111827] text-sm sm:text-base">Seating</span>
                  </div>
                  <span className="text-[#6B7280] text-sm sm:text-base">{cab.seating}</span>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                    <span className="font-medium text-[#111827] text-sm sm:text-base">Luggage</span>
                  </div>
                  <span className="text-[#6B7280] text-sm sm:text-base">{cab.luggage}</span>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="bg-gradient-to-r from-[#111827] to-[#ffc800] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white mb-6 sm:mb-8">
                <span className="text-white/90 text-xs sm:text-sm">Contact us for best rates</span>
                <div className="text-lg sm:text-2xl font-bold mt-1">Get a Free Quote Today!</div>
              </div>

              {/* AC Options */}
              <div className="mb-4 sm:mb-6">
                <h3 className="font-semibold text-[#111827] mb-2 sm:mb-3 text-sm sm:text-base">Available Options</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#ffc800]/10 text-[#111827] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    {cab.ac ? 'AC Available' : 'Non-AC'}
                  </span>
                  <span className="bg-[#ffc800]/10 text-[#111827] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    {cab.seating}
                  </span>
                </div>
              </div>

              {/* Comfort Features - 2 columns always */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-semibold text-[#111827] mb-2 sm:mb-3 text-sm sm:text-base">Comfort Features</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {cab.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#ffc800] flex-shrink-0" />
                      <span className="text-[#6B7280] text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="bg-[#ffc800] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold btn-hover hover:bg-[#e6b400] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Book Now
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

      {/* Ideal For */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4 sm:mb-6">
            Ideal For
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {cab.bestFor.map((item: string, i: number) => (
              <div key={i} className="bg-[#F8FAFC] rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                <span className="font-medium text-[#111827] text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Vehicles */}
      <section className="py-10 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4 sm:mb-6">
            Explore Other Vehicles
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {otherCabs.map((c) => (
              <Link
                key={c.slug}
                to={`/cabs/${c.slug}`}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden card-hover border border-gray-100"
              >
                <img src={c.image} alt={c.name} className="w-full h-28 sm:h-40 object-cover" />
                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-[#111827] text-sm sm:text-base">{c.name}</h3>
                  <p className="text-xs sm:text-sm text-[#6B7280]">{c.seating}</p>
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

export default CabDetailPage;
