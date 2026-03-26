import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, Calendar, Search, ChevronLeft, ChevronRight,
  Star, Check, ShieldCheck, Users, Plus
} from 'lucide-react';
import { routesData } from '../data/routesData'; 

const heroImages = [
  { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80', location: 'Scenic Routes', country: 'Uttarakhand' },
  { url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80', location: 'Highway Drives', country: 'Delhi to Dehradun' },
  { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80', location: 'Mountain Passes', country: 'Mussoorie' }
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const allCities = useMemo(() => {
    const cities = new Set<string>();
    routesData.forEach(route => {
      cities.add(route.from);
      cities.add(route.to);
    });
    return Array.from(cities).sort();
  }, []);
  
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const [showPickup, setShowPickup] = useState(false);
  const [showDropoff, setShowDropoff] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const filteredPickupCities = useMemo(() => {
    if (!pickup) return allCities;
    return allCities.filter(c => c.toLowerCase().includes(pickup.toLowerCase()));
  }, [pickup, allCities]);

  const filteredDropoffCities = useMemo(() => {
    if (!dropoff) return allCities;
    return allCities.filter(c => c.toLowerCase().includes(dropoff.toLowerCase()));
  }, [dropoff, allCities]);

  const isCustomSearch = searchQuery && !allCities.some(c => c.toLowerCase() === searchQuery.toLowerCase());

  const getCalendarDays = () => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days: (Date | null)[] = [];
    for (let i = 0; i < startingDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    return days;
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleSearch = () => {
    if (!pickup.trim() || !dropoff.trim()) {
      alert("Please enter both a pickup and drop-off location.");
      return;
    }

    const existingRoute = routesData.find(
      r => (r.from.toLowerCase() === pickup.trim().toLowerCase() && r.to.toLowerCase() === dropoff.trim().toLowerCase()) || 
           (r.from.toLowerCase() === dropoff.trim().toLowerCase() && r.to.toLowerCase() === pickup.trim().toLowerCase())
    );

    if (existingRoute) {
      navigate(`/routes/${existingRoute.slug}`);
    } else {
      navigate(`/routes/custom-booking?from=${encodeURIComponent(pickup.trim())}&to=${encodeURIComponent(dropoff.trim())}`);
    }
  };

  const closeAllDropdowns = () => {
    setShowPickup(false);
    setShowDropoff(false);
    setShowCalendar(false);
    setSearchQuery('');
  };

  return (
    <section className="relative h-[100svh] min-h-[600px] lg:min-h-[700px] w-full overflow-hidden bg-[#111827] flex flex-col justify-start">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0, scale: currentSlide === index ? 1.05 : 1 }}
            transition={{ opacity: { duration: 2, ease: [0.4, 0, 0.2, 1] }, scale: { duration: 8, ease: 'linear' } }}
            style={{ zIndex: currentSlide === index ? 1 : 0 }}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image.url})` }} />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-[2]" />
      </div>

      <div className="absolute top-4 lg:top-20 left-0 right-0 z-[3] flex justify-center gap-1.5 sm:gap-2 px-4">
        {heroImages.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className="relative h-1 sm:h-1.5 flex-1 max-w-10 sm:max-w-16 lg:max-w-14 bg-white/20 rounded-full overflow-hidden">
            {currentSlide === index && <motion.div className="absolute inset-0 bg-[#ffc800] rounded-full" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 8, ease: 'linear' }} style={{ transformOrigin: 'left' }} />}
            {currentSlide > index && <div className="absolute inset-0 bg-[#ffc800] rounded-full" />}
          </button>
        ))}
      </div>

      <div className="relative z-[10] w-full flex flex-col items-center px-2 sm:px-4 pt-16 sm:pt-24 lg:pt-20 pb-6 sm:pb-12 h-full">
        
        {(showPickup || showDropoff || showCalendar) && (
          <div className="fixed inset-0 z-[40]" onClick={closeAllDropdowns} />
        )}

        <div className="order-2 sm:order-1 flex flex-col items-center justify-center w-full relative z-10 mb-6 lg:mb-8 mt-4 sm:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            className="order-2 sm:order-1 flex flex-wrap justify-center gap-2 mt-6 sm:mt-0 mb-0 sm:mb-6 lg:mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 bg-white/10 backdrop-blur-xl text-white text-[10px] sm:text-sm font-bold rounded-full border border-white/20 tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc800]" /> Government Approved
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="order-1 sm:order-2 text-center w-full"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 sm:mb-6 leading-tight tracking-tight">
              <span className="block">Premium Taxi Service</span>
              <span className="block">in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc800] to-yellow-300">Dehradun</span></span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-[320px] sm:max-w-xl md:max-w-2xl mx-auto font-medium leading-relaxed">
              Book reliable, safe, and comfortable outstation cabs, airport transfers, and local rides instantly.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="order-1 sm:order-2 w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-3xl px-2 sm:px-4 mb-8 sm:mb-12 lg:mb-8 mt-0 relative z-[50]"
        >
          <div className="bg-white/5 backdrop-blur-2xl rounded-full p-1.5 sm:p-2 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-full">
            <div className="flex flex-row items-center gap-0.5 sm:gap-2 w-full">
              
              <div className="relative flex-1 min-w-0">
                <div className="w-full flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-full hover:bg-white/10 transition-all text-left border border-transparent focus-within:border-[#ffc800]/50 relative z-50">
                  <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#ffc800] flex-shrink-0" />
                  <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start">
                    <label className="text-[8px] sm:text-[10px] uppercase tracking-wider text-gray-300 font-bold mb-0.5 cursor-pointer">Pickup</label>
                    <input 
                      type="text" 
                      value={pickup}
                      onChange={(e) => { setPickup(e.target.value); setShowPickup(true); }}
                      onFocus={() => { closeAllDropdowns(); setShowPickup(true); }}
                      placeholder="City or Custom"
                      className="w-full bg-transparent text-[10px] sm:text-sm text-white font-semibold placeholder-gray-400 focus:outline-none text-center sm:text-left truncate"
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {showPickup && (
                    <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="absolute top-full mt-2 left-0 w-[280px] sm:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-[200]">
                      <div className="p-2 sm:p-3 border-b border-gray-100 bg-gray-50">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                          <input type="text" placeholder="Search locations..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-8 sm:pl-9 pr-3 sm:pr-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-[#ffc800] focus:ring-1 focus:ring-[#ffc800] text-gray-800" />
                        </div>
                      </div>
                      <div className="max-h-48 sm:max-h-60 overflow-y-auto p-1.5 sm:p-2">
                        {isCustomSearch && (
                          <button onClick={() => { setPickup(searchQuery); setShowPickup(false); setSearchQuery(''); }} className="w-full flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 mb-1 text-left bg-emerald-50 hover:bg-emerald-100 rounded-lg sm:rounded-xl transition-colors border border-emerald-100">
                            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                            <span className="text-xs sm:text-sm font-bold text-emerald-800">Use "{searchQuery}"</span>
                          </button>
                        )}
                        {filteredPickupCities.map((city) => (
                          <button key={city} onClick={() => { setPickup(city); setShowPickup(false); }} className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 text-left hover:bg-amber-50 rounded-lg sm:rounded-xl transition-colors">
                            <span className="text-xs sm:text-sm font-medium text-gray-800">{city}</span>
                            {pickup.toLowerCase() === city.toLowerCase() && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d97706]" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-px h-6 sm:h-10 bg-white/20" />

              <div className="relative flex-1 min-w-0">
                <div className="w-full flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-full hover:bg-white/10 transition-all text-left border border-transparent focus-within:border-[#ffc800]/50 relative z-50">
                  <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-gray-300 flex-shrink-0" />
                  <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start">
                    <label className="text-[8px] sm:text-[10px] uppercase tracking-wider text-gray-300 font-bold mb-0.5 cursor-pointer">Drop-off</label>
                    <input 
                      type="text" 
                      value={dropoff}
                      onChange={(e) => { setDropoff(e.target.value); setShowDropoff(true); }}
                      onFocus={() => { closeAllDropdowns(); setShowDropoff(true); }}
                      placeholder="City or Custom"
                      className="w-full bg-transparent text-[10px] sm:text-sm text-white font-semibold placeholder-gray-400 focus:outline-none text-center sm:text-left truncate"
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {showDropoff && (
                    <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="absolute top-full mt-2 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-0 w-[280px] sm:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-[200]">
                      <div className="p-2 sm:p-3 border-b border-gray-100 bg-gray-50">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                          <input type="text" placeholder="Search locations..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-8 sm:pl-9 pr-3 sm:pr-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-[#ffc800] focus:ring-1 focus:ring-[#ffc800] text-gray-800" />
                        </div>
                      </div>
                      <div className="max-h-48 sm:max-h-60 overflow-y-auto p-1.5 sm:p-2">
                        {isCustomSearch && (
                          <button onClick={() => { setDropoff(searchQuery); setShowDropoff(false); setSearchQuery(''); }} className="w-full flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 mb-1 text-left bg-emerald-50 hover:bg-emerald-100 rounded-lg sm:rounded-xl transition-colors border border-emerald-100">
                            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                            <span className="text-xs sm:text-sm font-bold text-emerald-800">Use "{searchQuery}"</span>
                          </button>
                        )}
                        {filteredDropoffCities.map((city) => (
                          <button key={city} onClick={() => { setDropoff(city); setShowDropoff(false); }} className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 text-left hover:bg-amber-50 rounded-lg sm:rounded-xl transition-colors">
                            <span className="text-xs sm:text-sm font-medium text-gray-800">{city}</span>
                            {dropoff.toLowerCase() === city.toLowerCase() && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d97706]" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-px h-6 sm:h-10 bg-white/20" />

              <div className="relative flex-1 min-w-0">
                <button onClick={() => { closeAllDropdowns(); setShowCalendar(!showCalendar); }} className="w-full flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3 px-1 sm:px-3 py-2 sm:py-2.5 rounded-full hover:bg-white/10 transition-all text-left border border-transparent focus:border-[#ffc800]/50 relative z-50">
                  <Calendar className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#ffc800] flex-shrink-0" />
                  <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start">
                    <p className="text-[8px] sm:text-[10px] uppercase tracking-wider text-gray-300 font-bold mb-0.5 cursor-pointer">Date</p>
                    <p className="text-[10px] sm:text-sm text-white font-semibold truncate w-full text-center sm:text-left">{selectedDate ? formatDate(selectedDate) : 'Any'}</p>
                  </div>
                </button>

                <AnimatePresence>
                  {showCalendar && (
                    <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="absolute top-full mt-2 right-0 sm:right-auto sm:left-0 md:left-auto md:right-0 w-[280px] sm:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-[200]">
                      <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-100 bg-gray-50">
                        <button onClick={() => { const newDate = new Date(calendarMonth); newDate.setMonth(newDate.getMonth() - 1); const today = new Date(); if (newDate.getMonth() >= today.getMonth() || newDate.getFullYear() > today.getFullYear()) setCalendarMonth(newDate); }} className="p-1 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-colors">
                          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                        </button>
                        <span className="text-xs sm:text-sm font-bold text-gray-900">{calendarMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                        <button onClick={() => { const newDate = new Date(calendarMonth); newDate.setMonth(newDate.getMonth() + 1); setCalendarMonth(newDate); }} className="p-1 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-colors">
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-1 px-3 sm:px-4 pt-2 sm:pt-3 pb-1">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => <div key={day} className="text-[8px] sm:text-[10px] font-bold text-gray-400 text-center uppercase">{day}</div>)}
                      </div>
                      <div className="grid grid-cols-7 gap-1 p-2 sm:p-3">
                        {getCalendarDays().map((date, index) => (
                          <div key={index} className="aspect-square">
                            {date ? (
                              <button onClick={() => { if (!isDateDisabled(date)) { setSelectedDate(date); setShowCalendar(false); } }} disabled={isDateDisabled(date)} className={`w-full h-full flex items-center justify-center rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all ${isDateDisabled(date) ? 'text-gray-300 cursor-not-allowed' : selectedDate && date.toDateString() === selectedDate.toDateString() ? 'bg-[#111827] text-[#ffc800] shadow-md' : date.toDateString() === new Date().toDateString() ? 'bg-amber-50 text-[#d97706] hover:bg-amber-100 border border-amber-200' : 'hover:bg-gray-100 text-gray-700'}`}>
                                {date.getDate()}
                              </button>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={handleSearch} className="relative z-50 w-10 h-10 sm:w-auto sm:h-auto sm:px-8 sm:py-3.5 bg-[#ffc800] text-[#111827] font-black rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(255,200,0,0.3)] flex items-center justify-center gap-2 flex-shrink-0 mr-0.5 sm:mr-0">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline text-sm sm:text-base">Search Cabs</span>
              </button>

            </div>
          </div>
        </motion.div>

        {/* 3. STATS - Order 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }} 
          className="order-3 relative z-10 flex flex-wrap justify-center gap-2 sm:gap-4 px-2 mt-auto sm:mt-0"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc800] fill-current" /> <span className="text-[10px] sm:text-sm font-semibold text-white">4.9 Rating</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc800]" /> <span className="text-[10px] sm:text-sm font-semibold text-white">15K+ Happy Users</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;