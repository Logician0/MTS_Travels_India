import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, MapPin, Check, ArrowRight, Phone, CreditCard } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { getPackageBySlug, packagesData } from '../data/packagesData';

const PackageDetailPage = () => {
  const { packageSlug } = useParams();
  const pkg = getPackageBySlug(packageSlug || '');

  if (!pkg) {
    return <Navigate to="/packages" replace />;
  }

  const otherPackages = packagesData.filter(p => p.slug !== pkg.slug).slice(0, 3);

  // --- DYNAMIC WHATSAPP LINK ---
  const whatsappText = `Hi MTS Travels! I am interested in booking the "${pkg.title}" package (${pkg.duration}). Please share more details and pricing.`;
  const whatsappLink = `https://wa.me/917217667160?text=${encodeURIComponent(whatsappText)}`;

  return (
    <>
      <SEO
        title={pkg.title}
        description={pkg.description}
        keywords={`${pkg.title.toLowerCase()}, tour package, travel from dehradun`}
        image={pkg.image}
      />

      {/* Hero */}
      <section className="relative py-12 sm:py-16 lg:py-28 bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="floating-shape w-48 sm:w-72 h-48 sm:h-72 bg-[#F5A623] -top-24 sm:-top-36 -right-24 sm:-right-36" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/packages" className="inline-flex items-center gap-2 text-[#0F8A7C] font-medium mb-4 sm:mb-6 hover:underline text-sm sm:text-base">
            ← Back to Packages
          </Link>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="relative order-1 lg:order-1">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-48 sm:h-64 lg:h-auto object-cover"
              />
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                <span className="bg-white text-[#0F8A7C] font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm">
                  {pkg.duration}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-2">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-3 sm:mb-4">
                {pkg.title}
              </h1>
              
              <div className="flex items-center gap-2 text-[#6B7280] mb-4 sm:mb-6 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F8A7C] flex-shrink-0" />
                <span className="line-clamp-1">{pkg.destinations.join(' → ')}</span>
              </div>

              <p className="text-sm sm:text-lg text-[#6B7280] mb-6 sm:mb-8">
                {pkg.description}
              </p>

              {/* Info Card */}
              <div className="bg-gradient-to-r from-[#0F8A7C] to-[#F5A623] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white mb-6 sm:mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/80 text-xs sm:text-sm">Tour Duration</span>
                    <div className="text-xl sm:text-3xl font-bold">{pkg.duration}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Contact for Dates</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-semibold text-[#111827] mb-2 sm:mb-3 text-sm sm:text-base">Package Highlights</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {pkg.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F8A7C] flex-shrink-0" />
                      <span className="text-[#6B7280] text-xs sm:text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-semibold text-[#111827] mb-2 sm:mb-3 text-sm sm:text-base">Package Includes</h3>
                <div className="flex flex-wrap gap-2">
                  {pkg.includes.map((item, i) => (
                    <span key={i} className="bg-[#0F8A7C]/10 text-[#0F8A7C] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#ffc800] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold btn-hover hover:bg-[#e6b400] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Book This Package
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
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

      {/* Itinerary */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111827] mb-6 sm:mb-10">
            Tour <span className="gradient-text">Itinerary</span>
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {pkg.itinerary.map((item, i) => (
              <div key={i} className="flex gap-3 sm:gap-6 items-start">
                <div className="w-16 sm:w-20 shrink-0">
                  <div className="bg-gradient-to-r from-[#0F8A7C] to-[#F5A623] text-white text-[10px] sm:text-sm font-semibold px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-center">
                    {item.day}
                  </div>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex-1 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-[#111827] text-sm sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-[#6B7280] text-xs sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Packages */}
      <section className="py-10 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-6 sm:mb-8">
            Explore Other Packages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {otherPackages.map((p) => (
              <Link
                key={p.slug}
                to={`/packages/${p.slug}`}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden card-hover border border-gray-100 shadow-sm"
              >
                <img src={p.image} alt={p.title} className="w-full h-28 sm:h-40 object-cover" />
                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-[#111827] mb-1 text-sm sm:text-base line-clamp-1">{p.title}</h3>
                  <span className="text-xs sm:text-sm text-[#6B7280]">{p.duration}</span>
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

export default PackageDetailPage;