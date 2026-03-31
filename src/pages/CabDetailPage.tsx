import { useParams, Link, Navigate } from 'react-router-dom';
import { Users, Briefcase, Check, ArrowRight, Phone, ShieldCheck, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { getCabBySlug, cabsData } from '../data/cabsData';

// --- SPECIFIC MODELS DICTIONARY (TEMPO & BUS REMOVED) ---
const categoryModels: Record<string, { name: string; images: string[]; description: string }[]> = {
  'sedan': [
    { name: 'Maruti Swift Dzire', images: ['/images/swift-dzire-1.webp', '/images/swift-dzire-2.webp', '/images/swift-dzire-3.webp', '/images/swift-dzire-4.webp'], description: 'India’s most loved sedan. Perfect for small families with great comfort.' },
    { name: 'Toyota Etios', images: ['/images/toyota-etios-1.webp', '/images/toyota-etios-2.webp', '/images/toyota-etios-3.webp', '/images/toyota-etios-4.webp'], description: 'Highly reliable with massive boot space for your heavy luggage.' },
    { name: 'Honda Amaze', images: ['/images/honda-amaze-1.webp', '/images/honda-amaze-2.webp', '/images/honda-amaze-3.webp', '/images/honda-amaze-4.webp'], description: 'Premium interiors, smooth ride, and excellent legroom for outstation trips.' },
    { name: 'Hyundai Aura', images: ['/images/hyundai-aura-1.webp', '/images/hyundai-aura-2.webp', '/images/hyundai-aura-3.webp', '/images/hyundai-aura-4.webp'], description: 'Modern styling with refined performance and excellent cabin comfort.' }
  ],
  'suv': [
    { name: 'Toyota Innova', images: ['/images/toyota-innova-1.webp', '/images/toyota-innova-2.webp', '/images/toyota-innova-3.webp', '/images/toyota-innova-4.webp'], description: 'The absolute gold standard for premium, reliable outstation travel.' },
    { name: 'Innova Crysta', images: ['/images/innova-crysta-1.webp', '/images/innova-crysta-2.webp', '/images/innova-crysta-3.webp', '/images/innova-crysta-4.webp'], description: 'Luxury and power combined. The ultimate VIP experience for long routes.' },
    { name: 'Mahindra Scorpio', images: ['/images/mahindra-scorpio-1.webp', '/images/mahindra-scorpio-2.webp', '/images/mahindra-scorpio-3.webp', '/images/mahindra-scorpio-4.webp'], description: 'Rugged and powerful, perfect for hilly terrains and adventurous trips.' },
    { name: 'Mahindra TUV', images: ['/images/mahindra-tuv-1.webp', '/images/mahindra-tuv-2.webp', '/images/mahindra-tuv-3.webp', '/images/mahindra-tuv-4.webp'], description: 'Tough, spacious, and built to handle all types of Indian roads with ease.' },
    { name: 'Toyota Fortuner', images: ['/images/toyota-fortuner-1.webp', '/images/toyota-fortuner-2.webp', '/images/toyota-fortuner-3.webp', '/images/toyota-fortuner-4.webp'], description: 'Top-tier luxury SUV providing unmatched road presence and maximum comfort.' }
  ],
  'muv': [
    { name: 'Maruti Ertiga', images: ['/images/maruti-ertiga-1.webp', '/images/maruti-ertiga-2.webp', '/images/maruti-ertiga-3.webp', '/images/maruti-ertiga-4.webp'], description: 'The perfect balance of 6-seater space and affordability for family tours.' },
    { name: 'Toyota Rumion', images: ['/images/toyota-rumion-1.webp', '/images/toyota-rumion-2.webp', '/images/toyota-rumion-3.webp', '/images/toyota-rumion-4.webp'], description: 'A spacious and reliable multi-utility vehicle with premium Toyota engineering.' },
    { name: 'Kia Carens', images: ['/images/kia-carens-1.webp', '/images/kia-carens-2.webp', '/images/kia-carens-3.webp', '/images/kia-carens-4.webp'], description: 'Futuristic design, plush interiors, and top-notch safety for your family.' }
  ]
};

const CabDetailPage = () => {
  const { cabSlug } = useParams();
  const cab = getCabBySlug(cabSlug || '');

  // --- LIGHTBOX STATE ---
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxOpen]);

  useEffect(() => {
    const handlePopState = () => {
      if (lightboxOpen) {
        setLightboxOpen(false);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [lightboxOpen]);

  const openLightbox = (images: string[], index: number) => {
    window.history.pushState({ lightbox: true }, ''); 
    setLightboxImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    if (window.history.state?.lightbox) {
      window.history.back(); 
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  if (!cab) {
    return <Navigate to="/cabs" replace />;
  }

  const otherCabs = cabsData.filter(c => c.slug !== cab.slug);
  const specificModels = categoryModels[cab.slug] || [];

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

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left: Interactive Image Gallery */}
            <div className="order-1 lg:order-1">
              <div 
                onClick={() => openLightbox([cab.image, ...cab.images], 0)}
                className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mb-3 sm:mb-4 bg-white p-4 cursor-pointer group relative border border-gray-100"
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 flex items-center justify-center">
                  <div className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0">
                    <Maximize2 className="w-4 h-4" /> View Full Screen
                  </div>
                </div>
                <img src={cab.image} alt={cab.name} className="w-full h-48 sm:h-64 lg:h-80 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
              </div>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {cab.images.map((img: string, i: number) => (
                  <div 
                    key={i} 
                    onClick={() => openLightbox([cab.image, ...cab.images], i + 1)}
                    className="rounded-lg sm:rounded-xl overflow-hidden bg-white p-2 border border-gray-100 cursor-pointer group relative"
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                    <img src={img} alt={`${cab.name} ${i + 1}`} className="w-full h-16 sm:h-24 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="order-2 lg:order-2">
              <span className="text-xs sm:text-sm text-[#ffc800] font-medium">{cab.type}</span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-3 sm:mb-4">{cab.name}</h1>
              <p className="text-sm sm:text-lg text-[#6B7280] mb-4 sm:mb-6">{cab.description}</p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-100">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                    <span className="font-medium text-[#111827] text-sm sm:text-base">Seating</span>
                  </div>
                  <span className="text-[#6B7280] text-sm sm:text-base">{cab.seating}</span>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-100">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                    <span className="font-medium text-[#111827] text-sm sm:text-base">Luggage</span>
                  </div>
                  <span className="text-[#6B7280] text-sm sm:text-base">{cab.luggage}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#111827] to-[#ffc800] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white mb-6 sm:mb-8 shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white/90 text-xs sm:text-sm">Contact us for best rates</span>
                <div className="text-lg sm:text-2xl font-bold mt-1">Get a Free Quote Today!</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
                <Link to="/routes" className="bg-[#ffc800] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-[#e6b400] flex items-center justify-center gap-2 text-sm sm:text-base transition-colors shadow-sm">
                  Book Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <a href="tel:+917217667160" className="border-2 border-[#111827] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-sm sm:text-base hover:bg-gray-50 transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Models Available - 2 COLUMNS ON MOBILE */}
      {specificModels.length > 0 && (
        <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-3xl font-black text-[#111827] mb-2 sm:mb-4">
                Specific Models in our {cab.name} Fleet
              </h2>
              <p className="text-xs sm:text-base text-gray-500">
                Click any vehicle below to view its full gallery.
              </p>
            </div>

            {/* Changed from grid-cols-1 to grid-cols-2 for mobile */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {specificModels.map((model, index) => (
                <div key={index} className="bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                  
                  {/* Clickable Main Image - Shorter height and less padding on mobile */}
                  <div 
                    onClick={() => openLightbox(model.images, 0)}
                    className="h-24 sm:h-48 w-full mb-3 sm:mb-6 flex items-center justify-center bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-sm border border-gray-50 cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 flex items-center justify-center">
                      <div className="bg-white/90 text-gray-900 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-bold text-[10px] sm:text-xs shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 sm:gap-1.5 transform translate-y-4 group-hover:translate-y-0">
                        <Maximize2 className="w-3 h-3" /> <span className="hidden sm:inline">View Gallery ({model.images.length})</span>
                      </div>
                    </div>
                    <img 
                      src={model.images[0]} 
                      alt={model.name} 
                      className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-sm sm:text-xl font-black text-[#111827] mb-1 sm:mb-3 truncate">{model.name}</h3>
                  <p className="text-[10px] sm:text-sm text-gray-500 mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-3 flex-grow">
                    {model.description}
                  </p>
                  <div className="flex items-center gap-1 sm:gap-2 text-[#0F8A7C] font-bold text-[9px] sm:text-sm bg-teal-50 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg w-fit mt-auto">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Highly Maintained</span><span className="sm:hidden">Maintained</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FULL SCREEN LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center animate-fade-in">
          <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-center z-50">
            <div className="text-white font-medium text-sm sm:text-base bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md">
              Image {currentIndex + 1} of {lightboxImages.length}
            </div>
            <button 
              onClick={closeLightbox}
              className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          <button onClick={prevImage} className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-50">
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="w-full max-w-5xl max-h-[80vh] px-12 sm:px-20 flex items-center justify-center relative outline-none" onClick={closeLightbox}>
            <img src={lightboxImages[currentIndex]} alt="Vehicle Preview" className="max-w-full max-h-[75vh] object-contain drop-shadow-2xl" onClick={(e) => e.stopPropagation()} />
          </div>

          <button onClick={nextImage} className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-50">
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="absolute bottom-4 sm:bottom-8 w-full px-4 flex justify-center gap-2 sm:gap-3 overflow-x-auto pb-2">
            {lightboxImages.map((img, idx) => (
              <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }} className={`h-12 w-16 sm:h-16 sm:w-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${currentIndex === idx ? 'border-[#ffc800] opacity-100 scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover bg-white" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Ideal For */}
      <section className="py-10 sm:py-16 bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4 sm:mb-6">Ideal For</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {cab.bestFor.map((item: string, i: number) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                <span className="font-medium text-[#111827] text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Vehicles - 2 COLUMNS ON MOBILE */}
      <section className="py-10 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4 sm:mb-6">
            Explore Other Vehicles
          </h2>
          {/* Changed from grid-cols-1 to grid-cols-2 for mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {otherCabs.map((c) => (
              <Link
                key={c.slug}
                to={`/cabs/${c.slug}`}
                className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl overflow-hidden card-hover border border-gray-100 p-3 sm:p-4 flex flex-col items-center"
              >
                {/* Shorter height on mobile */}
                <div className="h-20 sm:h-32 w-full mb-2 sm:mb-3 flex items-center justify-center bg-white rounded-lg sm:rounded-xl p-2">
                  <img src={c.image} alt={c.name} className="h-full object-contain mix-blend-multiply" />
                </div>
                <div className="text-center w-full">
                  <h3 className="font-bold text-[#111827] text-xs sm:text-base mb-0.5 sm:mb-1 truncate">{c.name}</h3>
                  <p className="text-[10px] sm:text-sm text-[#6B7280]">{c.seating}</p>
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