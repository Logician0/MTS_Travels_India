import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, Calendar, Search, ChevronLeft, ChevronRight,
  Star, Car, Check, ShieldCheck, Users, Plus
} from 'lucide-react';
import { routesData } from '../data/routesData'; // 👈 Import routes to get cities

const heroImages = [
  { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80', location: 'Scenic Routes', country: 'Uttarakhand' },
  { url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80', location: 'Highway Drives', country: 'Delhi to Dehradun' },
  { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80', location: 'Mountain Passes', country: 'Mussoorie' }
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 👈 Dynamically extract all unique cities from your existing routes
  const allCities = useMemo(() => {
    const cities = new Set<string>();
    routesData.forEach(route => {
      cities.add(route.from);
      cities.add(route.to);
    });
    return Array.from(cities).sort();
  }, []);
  
  // Search state
  const [pickup, setPickup] = useState<string | null>(null);
  const [dropoff, setDropoff] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  // Dropdown states
  const [showPickup, setShowPickup] = useState(false);
  const [showDropoff, setShowDropoff] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Calendar state
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const filteredCities = useMemo(() => {
    if (!searchQuery) return allCities;
    return allCities.filter(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, allCities]);

  // Check if user's search is completely custom (not in your database)
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

  // 🚀 SMART SEARCH HANDLER
  const handleSearch = () => {
    if (!pickup || !dropoff) {
      alert("Please select both a pickup and drop-off location.");
      return;
    }

    // See if this exact route exists in your routesData
    const existingRoute = routesData.find(
      r => (r.from === pickup && r.to === dropoff) || (r.from === dropoff && r.to === pickup)
    );

    if (existingRoute) {
      // Send them to the normal route page
      navigate(`/routes/${existingRoute.slug}`);
    } else {
      // Send them to the custom booking engine on the Route Details page
      navigate(`/routes/custom-booking?from=${encodeURIComponent(pickup)}&to=${encodeURIComponent(dropoff)}`);
    }
  };

  const closeAllDropdowns = () => {
    setShowPickup(false);
    setShowDropoff(false);
    setShowCalendar(false);
    setSearchQuery('');
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-[#111827]">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-[2]" />
      </div>

      <div className="absolute top-16 sm:top-20 left-0 right-0 z-[3] flex justify-center gap-1.5 sm:gap-2 px-4">
        {heroImages.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className="relative h-1 sm:h-1.5 flex-1 max-w-12 sm:max-w-16 bg-white/20 rounded-full overflow-hidden">
            {currentSlide === index && <motion.div className="absolute inset-0 bg-[#ffc800] rounded-full" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 8, ease: 'linear' }} style={{ transformOrigin: 'left' }} />}
            {currentSlide > index && <div className="absolute inset-0 bg-[#ffc800] rounded-full" />}
          </button>
        ))}
      </div>

      <div className="relative z-[10] h-full flex flex-col justify-center items-center px-3 sm:px-4 pt-16 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-sm text-white text-xs sm:text-sm font-medium rounded-full border border-white/20">
            <ShieldCheck className="w-4 h-4 text-[#ffc800]" /> Government Approved
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Premium Taxi Service in <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffc800] to-yellow-300 mt-1">Dehradun</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xl md:max-w-2xl mx-auto px-2 font-medium">
            Book reliable, safe, and comfortable outstation cabs, airport transfers, and local rides instantly.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl px-2 sm:px-4">
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl md:rounded-full p-2 border border-white/20 shadow-2xl relative">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
              
              {/* Pickup Selector */}
              <div className="relative flex-1">
                <button onClick={() => { closeAllDropdowns(); setShowPickup(!showPickup); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl md:rounded-full bg-white/10 hover:bg-white/20 transition-all text-left border border-transparent focus:border-[#ffc800]/50">
                  <MapPin className="w-5 h-5 text-[#ffc800] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">Pickup Location</p>
                    <p className="text-sm text-white font-semibold truncate">{pickup || 'Enter Pickup'}</p>
                  </div>
                </button>

                <AnimatePresence>
                  {showPickup && (
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute bottom-full mb-3 left-0 right-0 sm:right-auto sm:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden z-[200] border border-gray-100">
                      <div className="p-3 border-b border-gray-100 bg-gray-50">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="text" placeholder="Type custom location..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffc800] focus:ring-1 focus:ring-[#ffc800] text-gray-800" />
                        </div>
                      </div>
                      <div className="max-h-60 overflow-y-auto p-2">
                        {/* 🚀 CUSTOM LOCATION ADDER */}
                        {isCustomSearch && (
                          <button onClick={() => { setPickup(searchQuery); setShowPickup(false); setSearchQuery(''); }} className="w-full flex items-center gap-2 px-4 py-2.5 mb-1 text-left bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors border border-emerald-100">
                            <Plus className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-bold text-emerald-800">Use "{searchQuery}"</span>
                          </button>
                        )}
                        {filteredCities.map((city) => (
                          <button key={city} onClick={() => { setPickup(city); setShowPickup(false); setSearchQuery(''); }} className="w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-amber-50 rounded-xl transition-colors">
                            <span className="text-sm font-medium text-gray-800">{city}</span>
                            {pickup === city && <Check className="w-4 h-4 text-[#d97706]" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="hidden md:block w-px h-10 bg-white/20" />

              {/* Drop-off Selector */}
              <div className="relative flex-1">
                <button onClick={() => { closeAllDropdowns(); setShowDropoff(!showDropoff); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl md:rounded-full bg-white/10 hover:bg-white/20 transition-all text-left border border-transparent focus:border-[#ffc800]/50">
                  <MapPin className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">Drop-off Location</p>
                    <p className="text-sm text-white font-semibold truncate">{dropoff || 'Enter Drop'}</p>
                  </div>
                </button>

                <AnimatePresence>
                  {showDropoff && (
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute bottom-full mb-3 left-0 right-0 sm:right-auto sm:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden z-[200] border border-gray-100">
                      <div className="p-3 border-b border-gray-100 bg-gray-50">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="text" placeholder="Type custom location..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffc800] focus:ring-1 focus:ring-[#ffc800] text-gray-800" />
                        </div>
                      </div>
                      <div className="max-h-60 overflow-y-auto p-2">
                        {/* 🚀 CUSTOM LOCATION ADDER */}
                        {isCustomSearch && (
                          <button onClick={() => { setDropoff(searchQuery); setShowDropoff(false); setSearchQuery(''); }} className="w-full flex items-center gap-2 px-4 py-2.5 mb-1 text-left bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors border border-emerald-100">
                            <Plus className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-bold text-emerald-800">Use "{searchQuery}"</span>
                          </button>
                        )}
                        {filteredCities.map((city) => (
                          <button key={city} onClick={() => { setDropoff(city); setShowDropoff(false); setSearchQuery(''); }} className="w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-amber-50 rounded-xl transition-colors">
                            <span className="text-sm font-medium text-gray-800">{city}</span>
                            {dropoff === city && <Check className="w-4 h-4 text-[#d97706]" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="hidden md:block w-px h-10 bg-white/20" />

              {/* Date Selector */}
              <div className="relative flex-1">
                <button onClick={() => { closeAllDropdowns(); setShowCalendar(!showCalendar); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl md:rounded-full bg-white/10 hover:bg-white/20 transition-all text-left border border-transparent focus:border-[#ffc800]/50">
                  <Calendar className="w-5 h-5 text-[#ffc800] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">Pickup Date</p>
                    <p className="text-sm text-white font-semibold truncate">{selectedDate ? formatDate(selectedDate) : 'Select Date'}</p>
                  </div>
                </button>

                <AnimatePresence>
                  {showCalendar && (
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute bottom-full mb-3 left-0 right-0 md:left-auto md:right-0 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden z-[200] border border-gray-100">
                      <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
                        <button onClick={() => { const newDate = new Date(calendarMonth); newDate.setMonth(newDate.getMonth() - 1); const today = new Date(); if (newDate.getMonth() >= today.getMonth() || newDate.getFullYear() > today.getFullYear()) setCalendarMonth(newDate); }} className="p-1 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-colors">
                          <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <span className="text-sm font-bold text-gray-900">{calendarMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                        <button onClick={() => { const newDate = new Date(calendarMonth); newDate.setMonth(newDate.getMonth() + 1); setCalendarMonth(newDate); }} className="p-1 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-colors">
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-1 px-4 pt-3 pb-1">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => <div key={day} className="text-[10px] font-bold text-gray-400 text-center uppercase">{day}</div>)}
                      </div>
                      <div className="grid grid-cols-7 gap-1 p-3">
                        {getCalendarDays().map((date, index) => (
                          <div key={index} className="aspect-square">
                            {date ? (
                              <button onClick={() => { if (!isDateDisabled(date)) { setSelectedDate(date); setShowCalendar(false); } }} disabled={isDateDisabled(date)} className={`w-full h-full flex items-center justify-center rounded-lg text-sm font-medium transition-all ${isDateDisabled(date) ? 'text-gray-300 cursor-not-allowed' : selectedDate && date.toDateString() === selectedDate.toDateString() ? 'bg-[#111827] text-[#ffc800] shadow-md' : date.toDateString() === new Date().toDateString() ? 'bg-amber-50 text-[#d97706] hover:bg-amber-100 border border-amber-200' : 'hover:bg-gray-100 text-gray-700'}`}>
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

              {/* Search Button */}
              <button onClick={handleSearch} className="w-full md:w-auto px-8 py-3.5 md:py-0 md:h-14 bg-[#ffc800] text-[#111827] font-black rounded-xl md:rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(255,200,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 text-base flex-shrink-0">
                <Search className="w-5 h-5" /><span>Search Cabs</span>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 px-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
            <Star className="w-4 h-4 text-[#ffc800] fill-current" /> <span className="text-xs sm:text-sm font-semibold text-white">4.9 Rating</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
            <Users className="w-4 h-4 text-[#ffc800]" /> <span className="text-xs sm:text-sm font-semibold text-white">15K+ Customers</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
            <MapPin className="w-4 h-4 text-[#ffc800]" /> <span className="text-xs sm:text-sm font-semibold text-white">100+ Routes</span>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom transition line to match the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8FAFC] to-transparent z-[3]" />
    </section>
  );
};

export default HeroSection;