import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { MapPin, Check, ArrowRight, Phone, Car, ArrowRightLeft, Users, Briefcase, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { getRouteBySlug, routesData } from '../data/routesData';
import { cabsData } from '../data/cabsData';

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

const RouteDetailPage = () => {
  const { routeSlug } = useParams();
  const navigate = useNavigate();
  const route = getRouteBySlug(routeSlug || '');

  // --- BOOKING ENGINE STATE ---
  const [tripType, setTripType] = useState<'one_way' | 'round_trip' | null>(null);
  const [direction, setDirection] = useState<string | null>(null);
  const [vehicleType, setVehicleType] = useState<'sedan' | 'muv' | 'suv' | 'tempo' | 'bus' | null>(null);
  const [specificVehicle, setSpecificVehicle] = useState<string | null>(null);
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);

  // Dynamic pricing calculation
  useEffect(() => {
    if (route && (vehicleType === 'sedan' || vehicleType === 'muv')) {
      const lookupCity = route.to === "Dehradun" ? route.from : route.to;
      let price = basePrices[lookupCity] || 0;
      
      if (vehicleType === 'muv') price += 1200; // MUV is +1200
      if (tripType === 'round_trip') price *= 2;
      
      setCalculatedPrice(price);
    }
  }, [tripType, vehicleType, route]);

  if (!route) return <Navigate to="/routes" replace />;

  const isReadyToBook = tripType && direction && vehicleType && (['suv', 'tempo', 'bus'].includes(vehicleType) || specificVehicle);

  const handleBookNow = () => {
    if (!isReadyToBook) return;
    navigate('/verify-booking', {
      state: { routeTitle: route.title, from: route.from, to: route.to, tripType, direction, vehicleType, specificVehicle, price: calculatedPrice }
    });
  };

  const getWhatsAppLink = () => {
    const text = `Hi MTS Travels! I want to book a ${tripType?.replace('_', ' ')} trip. Route: ${direction}. Vehicle: ${vehicleType?.toUpperCase()}. Please share pricing!`;
    return `https://wa.me/917217667160?text=${encodeURIComponent(text)}`;
  };

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
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">{route.title}</h1>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-[#0F8A7C]"><MapPin className="w-5 h-5" /></div>
                  <div><div className="text-[10px] text-gray-500 uppercase font-bold">Distance</div><div className="text-base font-black">{route.distance}</div></div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-[#0F8A7C]"><Check className="w-5 h-5" /></div>
                  <div><div className="text-[10px] text-gray-500 uppercase font-bold">Duration</div><div className="text-base font-black">{route.travelTime}</div></div>
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
                    <button onClick={() => { setTripType('one_way'); setDirection(null); setSpecificVehicle(null); }} className={`p-3 rounded-xl border-2 font-bold flex flex-col items-center gap-2 transition-all ${tripType === 'one_way' ? 'border-[#111827] bg-gray-50 shadow-md transform scale-[1.02]' : 'border-gray-100 hover:border-gray-200'}`}>
                      <ArrowRight className={`w-5 h-5 ${tripType === 'one_way' ? 'text-[#ffc800]' : 'text-gray-400'}`} /> One Way
                    </button>
                    <button onClick={() => { setTripType('round_trip'); setDirection(null); setSpecificVehicle(null); }} className={`p-3 rounded-xl border-2 font-bold flex flex-col items-center gap-2 transition-all ${tripType === 'round_trip' ? 'border-[#111827] bg-gray-50 shadow-md transform scale-[1.02]' : 'border-gray-100 hover:border-gray-200'}`}>
                      <ArrowRightLeft className={`w-5 h-5 ${tripType === 'round_trip' ? 'text-[#ffc800]' : 'text-gray-400'}`} /> Round Trip
                    </button>
                  </div>
                </div>

                {/* Step 2: Direction */}
                {tripType && (
                  <div className="mb-6">
                    <label className="block text-xs sm:text-sm font-bold text-gray-900 uppercase mb-3">2. Route Direction</label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button onClick={() => setDirection(`${route.from} to ${route.to}`)} className={`flex-1 py-3 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all ${direction === `${route.from} to ${route.to}` ? 'border-[#0F8A7C] bg-teal-50 text-[#0F8A7C]' : 'border-gray-200 text-gray-500'}`}>
                        {tripType === 'one_way' ? `${route.from} → ${route.to}` : `Start from ${route.from}`}
                      </button>
                      <button onClick={() => setDirection(`${route.to} to ${route.from}`)} className={`flex-1 py-3 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all ${direction === `${route.to} to ${route.from}` ? 'border-[#0F8A7C] bg-teal-50 text-[#0F8A7C]' : 'border-gray-200 text-gray-500'}`}>
                        {tripType === 'one_way' ? `${route.to} → ${route.from}` : `Start from ${route.to}`}
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Vehicle Category */}
                {direction && (
                  <div className="mb-6">
                    <label className="block text-xs sm:text-sm font-bold text-gray-900 uppercase mb-3">3. Select Category</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['sedan', 'muv', 'suv', 'tempo', 'bus'].map(type => (
                        <button key={type} onClick={() => { setVehicleType(type as any); setSpecificVehicle(null); }} className={`p-3 rounded-xl border-2 transition-all bg-white flex flex-col items-center ${vehicleType === type ? 'border-[#111827] ring-1 ring-[#111827] shadow-md transform scale-[1.02]' : 'border-gray-200 hover:border-gray-300'}`}>
                          <div className="h-10 w-full mb-1 flex items-center justify-center">
                            <img src={getCategoryImage(type)} alt={type} className="h-full object-contain mix-blend-multiply" />
                          </div>
                          <div className={`font-black text-[10px] uppercase ${vehicleType === type ? 'text-gray-900' : 'text-gray-600'}`}>{type === 'bus' ? 'Mini Bus' : type}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Specific Models (Sedan/MUV only) */}
                {(vehicleType === 'sedan' || vehicleType === 'muv') && (
                  <div className="mb-6 bg-gray-50 p-4 rounded-2xl border border-gray-200">
                    <label className="block text-xs sm:text-sm font-bold text-gray-900 uppercase mb-3">4. Choose {vehicleType.toUpperCase()} Model</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      <button onClick={() => setSpecificVehicle(`Any ${vehicleType}`)} className={`py-3 px-1 rounded-xl border-2 bg-white transition-all ${specificVehicle === `Any ${vehicleType}` ? 'border-[#ffc800] ring-1 ring-[#ffc800] shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}>
                        <span className="text-[10px] font-black text-gray-800">Any Available</span>
                      </button>
                      {(vehicleType === 'sedan' ? ['Swift Dzire', 'Toyota Etios', 'Honda Amaze', 'Hyundai Aura'] : ['Maruti Ertiga', 'Toyota Rumion', 'Kia Carens']).map(car => (
                        <button key={car} onClick={() => setSpecificVehicle(car)} className={`py-3 px-1 rounded-xl border-2 bg-white transition-all ${specificVehicle === car ? 'border-[#ffc800] ring-1 ring-[#ffc800] shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}>
                          <span className="text-[10px] font-black text-gray-800">{car}</span>
                        </button>
                      ))}
                    </div>

                    {specificVehicle && (
                      <div className="mt-4 flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200 shadow-inner">
                        <div className="flex flex-col"><span className="text-[10px] font-black text-green-800 uppercase">Estimated Fare</span><span className="text-xs text-green-700 font-bold flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> Tolls Extra</span></div>
                        <span className="text-2xl font-black text-green-700 tracking-tight">₹{calculatedPrice}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Final Buttons */}
                <div className="mt-4">
                  {['suv', 'tempo', 'bus'].includes(vehicleType || '') ? (
                    <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-sm shadow-md active:scale-95">
                      <Phone className="w-5 h-5 fill-current" /> Enquire on WhatsApp
                    </a>
                  ) : (
                    <button onClick={handleBookNow} disabled={!isReadyToBook} className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95 ${isReadyToBook ? 'bg-[#ffc800] text-[#111827] shadow-md' : 'bg-gray-100 text-gray-400 border'}`}>
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