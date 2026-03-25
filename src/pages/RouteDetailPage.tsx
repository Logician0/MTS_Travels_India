import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { MapPin, Check, ArrowRight, Phone, Car, ArrowRightLeft, ShieldCheck, Map } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { getRouteBySlug, routesData } from '../data/routesData';

// --- EXACT PRICING DICTIONARY ---
const basePrices: Record<string, number> = {
  "Delhi": 3499, "Mussoorie": 1199, "Rishikesh": 1799, "Haridwar": 1799,
  "Nainital": 4499, "Shimla": 3999, "Chandigarh": 2999, "Manali": 7499,
  "Jammu": 8499, "Agra": 5499, "Ghaziabad": 3499, "Faridabad": 3499,
  "Gurugram": 3799, "Mathura": 4999, "Uttarkashi": 4499, "Roorkee": 1499,
  "Saharanpur": 1999, "Noida": 3499, "Greater Noida": 3699, "Jaipur": 6499
};

const getCategoryImage = (type: string) => {
  switch(type) {
    case 'sedan': return '/images/sedan-card.webp';
    case 'muv': return '/images/muv-card.webp';
    case 'suv': return '/images/suv-card.webp';
    case 'tempo': return '/images/tempo-traveller-card.webp';
    case 'bus': return '/images/bus-card.webp';
    default: return '/images/sedan-card.webp';
  }
};

// --- CAR MODELS DATABASE ---
const carModels = {
  sedan: [
    { name: 'Swift Dzire', image: '/images/swift-dzire-1.webp' },
    { name: 'Toyota Etios', image: '/images/toyota-etios-1.webp' },
    { name: 'Honda Amaze', image: '/images/honda-amaze-1.webp' },
    { name: 'Hyundai Aura', image: '/images/hyundai-aura-1.webp' }
  ],
  muv: [
    { name: 'Maruti Ertiga', image: '/images/maruti-ertiga-1.webp' },
    { name: 'Toyota Rumion', image: '/images/toyota-rumion-1.webp' },
    { name: 'Kia Carens', image: '/images/kia-carens-1.webp' }
  ]
};

const RouteDetailPage = () => {
  const { routeSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // 🚀 SMART CHECK: Determine if this is a custom routing request
  const isCustomRoute = routeSlug === 'custom-booking';
  const customFrom = searchParams.get('from') || 'Custom Pickup';
  const customTo = searchParams.get('to') || 'Custom Drop';

  // Build the route data dynamically based on if it's custom or predefined
  const route = isCustomRoute 
    ? {
        title: `Cab from ${customFrom} to ${customTo}`,
        from: customFrom,
        to: customTo,
        distance: 'Distance calculated on request',
        travelTime: 'Travel time varies',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80',
        slug: 'custom-booking'
      }
    : getRouteBySlug(routeSlug || '');

  // --- BOOKING ENGINE STATE ---
  const [tripType, setTripType] = useState<'one_way' | 'round_trip' | null>(null);
  const [direction, setDirection] = useState<string | null>(null);
  const [vehicleType, setVehicleType] = useState<'sedan' | 'muv' | 'suv' | 'tempo' | 'bus' | null>(null);
  const [specificVehicle, setSpecificVehicle] = useState<string | null>(null);
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);

  // --- AUTO-SCROLL REFS ---
  const directionRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const modelsRef = useRef<HTMLDivElement>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);

  // Dynamic pricing calculation
  useEffect(() => {
    if (!isCustomRoute && route && (vehicleType === 'sedan' || vehicleType === 'muv')) {
      const lookupCity = route.to === "Dehradun" ? route.from : route.to;
      let price = basePrices[lookupCity] || 0;
      
      if (vehicleType === 'muv') price += 1200; // MUV is +1200
      if (tripType === 'round_trip') price *= 2;
      
      setCalculatedPrice(price);
    } else {
      setCalculatedPrice(0); // Force 0 for custom routes
    }
  }, [tripType, vehicleType, route, isCustomRoute]);

  if (!route) return <Navigate to="/routes" replace />;

  const isReadyToBook = tripType && direction && vehicleType && (['suv', 'tempo', 'bus'].includes(vehicleType) || specificVehicle);

  // --- INTERACTIVE HANDLERS WITH AUTO-SCROLL ---
  const handleTripTypeSelect = (type: 'one_way' | 'round_trip') => {
    setTripType(type);
    setDirection(null);
    setVehicleType(null);
    setSpecificVehicle(null);
    setTimeout(() => directionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
  };

  const handleDirectionSelect = (dir: string) => {
    setDirection(dir);
    setVehicleType(null);
    setSpecificVehicle(null);
    setTimeout(() => categoryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
  };

  const handleCategorySelect = (type: any) => {
    setVehicleType(type);
    setSpecificVehicle(null);
    if (type === 'sedan' || type === 'muv') {
      setTimeout(() => modelsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
    } else {
      setTimeout(() => checkoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
    }
  };

  const handleModelSelect = (car: string) => {
    setSpecificVehicle(car);
    setTimeout(() => checkoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
  };

  const handleBookNow = () => {
    if (!isReadyToBook) return;
    navigate('/verify-booking', {
      state: { routeTitle: route.title, from: route.from, to: route.to, tripType, direction, vehicleType, specificVehicle, price: calculatedPrice }
    });
  };

  const getWhatsAppLink = () => {
    const text = `Hi MTS Travels! I want to book a ${tripType?.replace('_', ' ')} trip.\n\nRoute: ${direction}\nVehicle: ${specificVehicle || vehicleType?.toUpperCase()}.\n\nPlease share the pricing and availability!`;
    return `https://wa.me/917217667160?text=${encodeURIComponent(text)}`;
  };

  // 🚀 Logic to decide if we MUST use WhatsApp (Custom route or large vehicles)
  const forceWhatsappBooking = isCustomRoute || ['suv', 'tempo', 'bus'].includes(vehicleType || '');

  return (
    <>
      <SEO title={route.title} description={`Book ${route.title}. Distance: ${route.distance}.`} image={route.image} />

      <section className="relative py-8 sm:py-12 lg:py-20 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/routes" className="inline-flex items-center gap-2 text-[#0F8A7C] font-semibold mb-6 hover:underline text-sm transition-all">← Back to All Routes</Link>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Left Column: Route Info */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="relative h-48 sm:h-72 lg:h-80 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img src={route.image} alt={route.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-1.5 text-white/90 text-sm">
                    <MapPin className="w-4 h-4" /> {route.from} <ArrowRight className="w-3 h-3" /> {route.to}
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    {isCustomRoute ? 'Custom Booking' : route.title}
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-[#0F8A7C]">
                    {isCustomRoute ? <Map className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
                  </div>
                  <div><div className="text-[10px] text-gray-500 uppercase font-bold">Distance</div><div className="text-sm font-black">{route.distance}</div></div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-[#0F8A7C]"><Check className="w-5 h-5" /></div>
                  <div><div className="text-[10px] text-gray-500 uppercase font-bold">Duration</div><div className="text-sm font-black">{route.travelTime}</div></div>
                </div>
              </div>
            </div>

            {/* Right Column: Booking Widget */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ffc800] to-yellow-300" />
                <h3 className="text-xl sm:text-2xl font-black text-[#111827] mb-5 flex items-center gap-2">Customize Your Ride <Car className="w-5 h-5 text-[#ffc800]" /></h3>
                
                {/* Step 1: Trip Type */}
                <div className="mb-6">
                  <label className="block text-xs sm:text-sm font-bold text-gray-900 uppercase mb-3">1. Trip Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => handleTripTypeSelect('one_way')} className={`p-3 rounded-xl border-2 font-bold flex flex-col items-center gap-2 transition-all ${tripType === 'one_way' ? 'border-[#111827] bg-gray-50 shadow-md transform scale-[1.02]' : 'border-gray-100 hover:border-gray-200'}`}>
                      <ArrowRight className={`w-5 h-5 ${tripType === 'one_way' ? 'text-[#ffc800]' : 'text-gray-400'}`} /> One Way
                    </button>
                    <button onClick={() => handleTripTypeSelect('round_trip')} className={`p-3 rounded-xl border-2 font-bold flex flex-col items-center gap-2 transition-all ${tripType === 'round_trip' ? 'border-[#111827] bg-gray-50 shadow-md transform scale-[1.02]' : 'border-gray-100 hover:border-gray-200'}`}>
                      <ArrowRightLeft className={`w-5 h-5 ${tripType === 'round_trip' ? 'text-[#ffc800]' : 'text-gray-400'}`} /> Round Trip
                    </button>
                  </div>
                </div>

                {/* Step 2: Direction */}
                {tripType && (
                  <div ref={directionRef} className="mb-6 animate-fade-in">
                    <label className="block text-xs sm:text-sm font-bold text-gray-900 uppercase mb-3">2. Route Direction</label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button onClick={() => handleDirectionSelect(`${route.from} to ${route.to}`)} className={`flex-1 py-3 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all ${direction === `${route.from} to ${route.to}` ? 'border-[#0F8A7C] bg-teal-50 text-[#0F8A7C]' : 'border-gray-200 text-gray-500'}`}>
                        {tripType === 'one_way' ? `${route.from} → ${route.to}` : `Start from ${route.from}`}
                      </button>
                      <button onClick={() => handleDirectionSelect(`${route.to} to ${route.from}`)} className={`flex-1 py-3 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all ${direction === `${route.to} to ${route.from}` ? 'border-[#0F8A7C] bg-teal-50 text-[#0F8A7C]' : 'border-gray-200 text-gray-500'}`}>
                        {tripType === 'one_way' ? `${route.to} → ${route.from}` : `Start from ${route.to}`}
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Vehicle Category */}
                {direction && (
                  <div ref={categoryRef} className="mb-6 animate-fade-in">
                    <label className="block text-xs sm:text-sm font-bold text-gray-900 uppercase mb-3">3. Select Category</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['sedan', 'muv', 'suv', 'tempo', 'bus'].map(type => (
                        <button key={type} onClick={() => handleCategorySelect(type)} className={`p-3 rounded-xl border-2 transition-all bg-white flex flex-col items-center justify-center ${vehicleType === type ? 'border-[#111827] ring-1 ring-[#111827] shadow-md transform scale-[1.02]' : 'border-gray-200 hover:border-gray-300'}`}>
                          {/* 🚨 Zoomed IN Category Images */}
                          <div className="h-12 sm:h-14 w-full mb-2 flex items-center justify-center overflow-hidden">
                            <img src={getCategoryImage(type)} alt={type} className="h-full w-full object-contain mix-blend-multiply transform scale-150 sm:scale-[1.75] transition-transform" />
                          </div>
                          <div className={`font-black text-[10px] uppercase mt-1 ${vehicleType === type ? 'text-gray-900' : 'text-gray-600'}`}>{type === 'bus' ? 'Mini Bus' : type}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Specific Models (Sedan/MUV only) */}
                {(vehicleType === 'sedan' || vehicleType === 'muv') && (
                  <div ref={modelsRef} className="mb-6 pt-4 border-t border-gray-100 animate-fade-in">
                    <label className="block text-xs sm:text-sm font-bold text-gray-900 uppercase mb-3">4. Choose {vehicleType.toUpperCase()} Model</label>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      {/* Any Available Option */}
                      <button 
                        onClick={() => handleModelSelect(`Any ${vehicleType}`)} 
                        className={`relative overflow-hidden rounded-xl sm:rounded-2xl border-2 transition-all bg-white flex flex-col justify-center items-center h-28 sm:h-36 ${specificVehicle === `Any ${vehicleType}` ? 'border-[#ffc800] ring-4 ring-[#ffc800]/20 shadow-md' : 'border-gray-200 hover:border-[#ffc800]/50'}`}
                      >
                        <Car className="w-8 h-8 text-gray-300 mb-2" />
                        <span className="text-xs sm:text-sm font-black text-gray-700 uppercase tracking-tight">Any Available</span>
                      </button>

                      {/* Specific Car Options - 🚨 Zoomed OUT Model Images */}
                      {carModels[vehicleType as 'sedan' | 'muv'].map(car => (
                        <button 
                          key={car.name} 
                          onClick={() => handleModelSelect(car.name)} 
                          className={`relative overflow-hidden rounded-xl sm:rounded-2xl border-2 text-left transition-all group bg-white flex flex-col h-28 sm:h-36 ${specificVehicle === car.name ? 'border-[#ffc800] ring-4 ring-[#ffc800]/20 shadow-md' : 'border-gray-200 hover:border-[#ffc800]/50 hover:shadow-sm'}`}
                        >
                          <div className="w-full h-20 sm:h-28 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0 p-3">
                            <img 
                              src={car.image} 
                              alt={car.name} 
                              className="w-full h-full object-contain transform scale-90 group-hover:scale-100 transition-transform duration-500 origin-center mix-blend-multiply" 
                            />
                          </div>
                          <div className={`p-2 w-full text-center transition-colors h-full flex items-center justify-center border-t border-gray-100 ${specificVehicle === car.name ? 'bg-[#ffc800] text-[#111827]' : 'text-gray-900 bg-white'}`}>
                            <span className="text-[10px] sm:text-xs font-black">{car.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Final Pricing Badge */}
                    {specificVehicle && (
                      <div ref={checkoutRef} className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-2xl border border-emerald-100 shadow-inner animate-fade-in gap-4">
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-black text-emerald-900 uppercase tracking-wider mb-1">Estimated Fare</span>
                          <span className="text-[10px] sm:text-xs text-emerald-700 font-bold flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4"/> 
                            {isCustomRoute ? 'Calculated on Request' : 'Tolls and GST included'}
                          </span>
                        </div>
                        <span className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight">
                          {isCustomRoute ? 'Custom Pricing' : `₹${calculatedPrice}`}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Final Buttons */}
                <div className="mt-4" ref={vehicleType && !['sedan', 'muv'].includes(vehicleType) ? checkoutRef : null}>
                  {forceWhatsappBooking ? (
                    <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg shadow-md active:scale-95 animate-fade-in hover:bg-[#1ebd5a] transition-colors">
                      <Phone className="w-5 h-5 fill-current" /> Get Quote on WhatsApp
                    </a>
                  ) : (
                    <button onClick={handleBookNow} disabled={!isReadyToBook} className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 active:scale-95 ${isReadyToBook ? 'bg-[#111827] text-white shadow-lg hover:bg-gray-800 transform hover:-translate-y-0.5' : 'bg-gray-100 text-gray-400 border border-gray-200'}`}>
                      {isReadyToBook ? 'Review & Book Now' : 'Complete Selection to Book'} {isReadyToBook && <ArrowRight className="w-5 h-5" />}
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default RouteDetailPage;