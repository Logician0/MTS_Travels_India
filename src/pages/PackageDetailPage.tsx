import React, { useState, useRef } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Check, ArrowRight, Phone, MessageCircle, Car } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { getPackageBySlug, packagesData } from '../data/packagesData';

const PackageDetailPage = () => {
  const { packageSlug } = useParams();
  const navigate = useNavigate();
  const pkg = getPackageBySlug(packageSlug || '');

  // --- INTERACTIVE WIDGET STATES ---
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCar, setSelectedCar] = useState<any | null>(null);

  // --- AUTO-SCROLL REFS ---
  const modelsRef = useRef<HTMLDivElement>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);

  if (!pkg) {
    return <Navigate to="/packages" replace />;
  }

  const otherPackages = packagesData.filter(p => p.slug !== pkg.slug).slice(0, 3);

  // --- VEHICLE DATABASE ---
  const vehicleCategories = [
    { id: 'Sedan', name: 'Sedan', icon: '🚗', desc: '4 Seats • 2 Bags' },
    { id: 'SUV', name: 'SUV / MUV', icon: '🚙', desc: '6 Seats • 3 Bags' },
    { id: 'Premium', name: 'Premium SUV', icon: '✨', desc: '6 Seats • 4 Bags' },
    { id: 'Tempo', name: 'Tempo Traveller', icon: '🚌', desc: '12-16 Seats' },
  ];

  // 🚨 Perfected Image Paths matching your exact public/images folder
  const carDatabase: Record<string, any[]> = {
    Sedan: [
      { id: 'dzire', name: 'Swift Dzire', image: '/images/swift-dzire-1.webp' },
      { id: 'etios', name: 'Toyota Etios', image: '/images/toyota-etios-1.webp' },
      { id: 'amaze', name: 'Honda Amaze', image: '/images/honda-amaze-1.webp' },
      { id: 'aura', name: 'Hyundai Aura', image: '/images/hyundai-aura-1.webp' },
    ],
    SUV: [
      { id: 'ertiga', name: 'Maruti Ertiga', image: '/images/maruti-ertiga-1.webp' },
      { id: 'carens', name: 'Kia Carens', image: '/images/kia-carens-1.webp' },
      { id: 'scorpio', name: 'Mahindra Scorpio', image: '/images/mahindra-scorpio-1.webp' },
    ],
    Premium: [
      { id: 'crysta', name: 'Innova Crysta', image: '/images/innova-crysta-1.webp' },
      { id: 'innova', name: 'Toyota Innova', image: '/images/toyota-innova-1.webp' },
      { id: 'fortuner', name: 'Toyota Fortuner', image: '/images/toyota-fortuner-1.webp' },
    ],
    Tempo: [
      { id: 'tempo', name: 'Tempo Traveller', image: '/images/tempo-traveller1.webp' },
    ]
  };

  // --- EVENT HANDLERS FOR SMOOTH SCROLLING ---
  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    setSelectedCar(null);
    setTimeout(() => {
      // 'center' ensures it looks perfect on mobile without the top nav blocking it
      modelsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  };

  const handleCarSelect = (car: any) => {
    setSelectedCar(car);
    setTimeout(() => {
      checkoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  };

  const handleProceedToVerify = () => {
    navigate('/verify-booking', {
      state: {
        direction: pkg.title,
        tripType: 'tour_package',
        specificVehicle: selectedCar.name,
        vehicleType: selectedCategory?.toLowerCase(),
        price: pkg.price || 0 
      }
    });
  };

  // --- DYNAMIC WHATSAPP LINK ---
  const dynamicWhatsappText = `Hi MTS Travels! I want to book the "${pkg.title}" package (${pkg.duration}). I have selected the ${selectedCar?.name || 'car'}. Please share details!`;
  const whatsappLink = `https://wa.me/917217667160?text=${encodeURIComponent(dynamicWhatsappText)}`;

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
                    <span className="text-sm sm:text-base">Flexible Dates</span>
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

              {/* 🚀 THE NEW INTERACTIVE VEHICLE WIDGET 🚀 */}
              <div className="mt-10 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                
                {/* Step 1: Category */}
                <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-5 flex items-center gap-2">
                  <span className="bg-[#111827] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs">1</span> 
                  Select Vehicle Category
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
                  {vehicleCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all ${selectedCategory === cat.id ? 'border-[#111827] bg-[#111827] text-white shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                    >
                      <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{cat.icon}</div>
                      <div className="font-bold text-sm sm:text-base">{cat.name}</div>
                      <div className={`text-[10px] sm:text-xs mt-1 ${selectedCategory === cat.id ? 'text-gray-300' : 'text-gray-500'}`}>{cat.desc}</div>
                    </button>
                  ))}
                </div>

                {/* Step 2: Car Models */}
                {selectedCategory && (
                  <div ref={modelsRef} className="animate-fade-in pt-8 mt-6 border-t border-gray-100 scroll-mt-24">
                    <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-5 flex items-center gap-2">
                      <span className="bg-[#111827] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs">2</span> 
                      Choose Your Model
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {carDatabase[selectedCategory].map((car) => (
                        <button
                          key={car.id}
                          onClick={() => handleCarSelect(car)}
                          className={`relative overflow-hidden rounded-2xl border-2 text-left transition-all group bg-white ${selectedCar?.id === car.id ? 'border-[#ffc800] ring-4 ring-[#ffc800]/20 shadow-md' : 'border-gray-100 hover:border-[#ffc800]/50 hover:shadow-sm'}`}
                        >
                          {/* 🚨 BIG IMAGES LOGIC: Taller box, object-contain, and scale-125 to fill the card */}
                          <div className="w-full h-48 sm:h-56 bg-gradient-to-b from-white to-gray-50 relative flex items-center justify-center overflow-hidden p-2">
                            <img 
                              src={car.image} 
                              alt={car.name} 
                              className="w-full h-full object-cover sm:object-contain transform scale-125 group-hover:scale-[1.35] transition-transform duration-500 origin-center" 
                            />
                          </div>
                          <div className={`p-4 transition-colors ${selectedCar?.id === car.id ? 'bg-[#ffc800] text-[#111827]' : 'bg-white text-gray-900 border-t border-gray-100'}`}>
                            <h4 className="font-black text-lg text-center">{car.name}</h4>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Checkout Action */}
                {selectedCategory && selectedCar && (
                  <div ref={checkoutRef} className="animate-fade-in pt-8 mt-8 border-t border-gray-100 scroll-mt-24">
                    <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
                      
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc800] opacity-10 rounded-full blur-2xl" />

                      <div className="w-full lg:w-auto text-center lg:text-left relative z-10">
                        <p className="text-[#ffc800] text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">Selected Vehicle</p>
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">{selectedCar.name}</h3>
                        
                        {/* 🚨 UPDATED: Removed "Tolls Extra", Added "Tolls and GST Included" */}
                        <div className="inline-flex items-center gap-2 bg-[#25D366]/20 px-3 py-1.5 rounded-lg border border-[#25D366]/30">
                          <Check className="w-4 h-4 text-[#25D366]" />
                          <span className="text-[#25D366] text-xs sm:text-sm font-bold tracking-wide">Tolls and GST Included</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto relative z-10">
                        <button 
                          onClick={handleProceedToVerify} 
                          className="w-full sm:w-auto bg-[#ffc800] text-[#111827] px-6 py-4 rounded-xl font-black hover:bg-white transition-all shadow-[0_0_15px_rgba(255,200,0,0.3)] flex items-center justify-center gap-2"
                        >
                          <Car className="w-5 h-5" /> Proceed to Book
                        </button>
                        <a 
                          href={whatsappLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full sm:w-auto bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#1ebd5a] transition-all flex items-center justify-center gap-2 shadow-md"
                        >
                          <MessageCircle className="w-5 h-5" /> Enquire
                        </a>
                      </div>
                    </div>
                  </div>
                )}

              </div>
              {/* End of Interactive Widget */}

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