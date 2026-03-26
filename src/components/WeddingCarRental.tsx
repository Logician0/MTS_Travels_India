import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { weddingCars } from '../data/weddingCarsData';

interface EnquiryForm {
  name: string;
  phone: string;
  email: string;
  dateFrom: string;
  dateTo: string;
  requirements: string;
  termsAccepted: boolean;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
} as const;

const slideUpItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
} as const;

const WeddingCarRental = () => {
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>({});
  const [form, setForm] = useState<EnquiryForm>({
    name: '', phone: '', email: '', dateFrom: '', dateTo: '', requirements: '', termsAccepted: false
  });
  const [submitted, setSubmitted] = useState(false);

  const thumbnailScrollRef = useRef<HTMLDivElement>(null);

  const selectedCar = selectedCarId ? weddingCars.find(car => car.id === selectedCarId) : null;
  const currentImageIndex = selectedCar ? (currentImageIndices[selectedCarId!] || 0) : 0;

  const nextImage = () => {
    if (!selectedCar) return;
    setCurrentImageIndices(prev => ({
      ...prev, [selectedCarId!]: ((prev[selectedCarId!] || 0) + 1) % selectedCar.images.length
    }));
  };

  const prevImage = () => {
    if (!selectedCar) return;
    setCurrentImageIndices(prev => ({
      ...prev, [selectedCarId!]: prev[selectedCarId!] === 0 ? selectedCar.images.length - 1 : (prev[selectedCarId!] || 0) - 1
    }));
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailScrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 240 : 350;
      thumbnailScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const isFormValid = 
    form.name.trim() && form.phone.trim() && form.email.trim() && 
    form.dateFrom && form.dateTo && selectedCarId && form.termsAccepted;

  const handleCarSelect = (carId: number) => {
    setSelectedCarId(carId);
    setCurrentImageIndices(prev => ({...prev, [carId]: 0}));
  };

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || !selectedCar) return;

    const message = `🚨 *New Wedding Car Enquiry*\n\n*Car Selected:* ${selectedCar.name}\n*From Date:* ${form.dateFrom}\n*To Date:* ${form.dateTo}\n\n*Customer Details:*\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n*Special Requirements:*\n${form.requirements || 'None provided'}`;
    const whatsappUrl = `https://wa.me/917217667160?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', dateFrom: '', dateTo: '', requirements: '', termsAccepted: false });
    }, 3000);
  };

  return (
    // 🚨 Drastically reduced overall padding to remove empty space
    <section className="py-6 sm:py-10 lg:py-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#ffc800]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200/50 text-yellow-800 font-bold text-xs sm:text-sm tracking-wide mb-3 sm:mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc800]" /> Premium Wedding Collection
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight mb-3">
            Luxury Cars for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc800] to-yellow-500">Wedding</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed px-2">
            Make your grand entrance unforgettable. Select from our pristine fleet of luxury vehicles.
          </p>
        </motion.div>

        {/* Main Interface Box */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-[2.5rem] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] border border-gray-100/80 overflow-hidden relative">
          
          {/* Top Gold Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-yellow-300 via-[#ffc800] to-yellow-500" />

          {/* 🚨 Tighter internal padding */}
          <div className="p-4 sm:p-8">
            
            {/* Controls (Hidden arrows on mobile for a cleaner UI) */}
            <div className="flex items-center justify-between mb-2 px-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                1. Select Vehicle
              </h3>
              <div className="hidden sm:flex gap-2">
                <button onClick={() => scrollThumbnails('left')} className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 transition-all active:scale-95 border border-gray-200">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => scrollThumbnails('right')} className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 transition-all active:scale-95 border border-gray-200">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile swipe hint */}
            <p className="sm:hidden text-[10px] text-gray-400 font-medium px-1 mb-2">Swipe left to view more cars ➔</p>

            {/* 🚨 Flawless Horizontal Scroll (Padding added to absolutely prevent stroke clipping) */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              ref={thumbnailScrollRef}
              className="flex overflow-x-auto py-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-8 sm:px-8"
            >
              {weddingCars.map(car => (
                <motion.button
                  variants={slideUpItem}
                  whileTap={{ scale: 0.98 }}
                  key={car.id}
                  onClick={() => handleCarSelect(car.id)}
                  // 🚨 Adding margin 'm-1' ensures the ring effect has space to render without hitting overflow bounds
                  className="flex-shrink-0 snap-start focus:outline-none group relative m-1 sm:m-2"
                >
                  <div className={`w-[200px] sm:w-[260px] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
                    selectedCarId === car.id 
                      ? 'ring-[3px] sm:ring-4 ring-[#ffc800] shadow-[0_10px_20px_-5px_rgba(255,200,0,0.3)]' 
                      : 'ring-1 ring-gray-200 shadow-sm hover:shadow-md hover:ring-gray-300'
                  }`}>
                    {/* Car Image Thumbnail */}
                    <div className="h-28 sm:h-36 bg-gradient-to-b from-gray-50 to-gray-100/50 flex items-center justify-center p-3 sm:p-4 relative">
                      <img
                        src={car.images[0]}
                        alt={car.name}
                        className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-500 ease-out mix-blend-multiply"
                      />
                    </div>
                    {/* Car Name */}
                    <div className={`p-3 sm:p-4 transition-colors duration-300 ${selectedCarId === car.id ? 'bg-[#ffc800]' : 'bg-white border-t border-gray-100'}`}>
                      <p className={`text-xs sm:text-sm font-bold truncate ${selectedCarId === car.id ? 'text-gray-900' : 'text-gray-700'}`}>
                        {car.name}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Selected Car Showcase & Form */}
            <AnimatePresence>
              {selectedCar && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {/* Tighter Grid layout */}
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 border-t border-gray-100 pt-6 sm:pt-8 mt-4">
                    
                    {/* Left: Image Viewer (Scaled down for mobile) */}
                    <div className="relative rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-gray-50 to-gray-100/50 p-4 sm:p-8 border border-gray-100 shadow-inner flex flex-col justify-center min-h-[220px] sm:min-h-[380px]">
                      
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-white/90 backdrop-blur-md shadow-sm border border-gray-100 text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-wider z-20">
                        <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-green-500" /> Selected
                      </div>

                      <div className="relative w-full aspect-[4/3] flex items-center justify-center z-10">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex}
                            src={selectedCar.images[currentImageIndex]}
                            alt={selectedCar.name}
                            initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl"
                          />
                        </AnimatePresence>
                      </div>

                      {/* Image Controls */}
                      {selectedCar.images.length > 1 && (
                        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex items-center justify-center gap-3 z-20">
                          <button onClick={prevImage} className="p-2 sm:p-2.5 rounded-full bg-white/90 backdrop-blur shadow-md text-gray-800 active:scale-90 transition-all">
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <div className="flex gap-1.5 sm:gap-2 bg-white/90 backdrop-blur px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-md">
                            {selectedCar.images.map((_, idx) => (
                              <div key={idx} className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-[#ffc800] w-4 sm:w-6' : 'bg-gray-300 w-1.5 sm:w-2'}`} />
                            ))}
                          </div>
                          <button onClick={nextImage} className="p-2 sm:p-2.5 rounded-full bg-white/90 backdrop-blur shadow-md text-gray-800 active:scale-90 transition-all">
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Right: Booking Form (Mobile optimized padding & spacing) */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-1.5 sm:mb-2">2. Secure Your Dates</h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6 font-medium">Fill in your details to check availability for the <span className="text-gray-900 font-bold">{selectedCar.name}</span>.</p>

                      <form onSubmit={handleEnquiry} className="space-y-4 sm:space-y-5">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div className="space-y-1 sm:col-span-2">
                            <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                            <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 transition-all" placeholder="e.g., Rahul Sharma" />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone Number</label>
                            <input type="tel" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 transition-all" placeholder="+91 98765 43210" />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                            <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 transition-all" placeholder="rahul@example.com" />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Date (From)</label>
                            <input type="date" required value={form.dateFrom} onChange={(e) => setForm({...form, dateFrom: e.target.value})} className="w-full px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 font-medium focus:outline-none focus:bg-white focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 transition-all" />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Date (To)</label>
                            <input type="date" required value={form.dateTo} min={form.dateFrom} onChange={(e) => setForm({...form, dateTo: e.target.value})} className="w-full px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 font-medium focus:outline-none focus:bg-white focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 transition-all" />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Requirements (Optional)</label>
                          <textarea value={form.requirements} onChange={(e) => setForm({...form, requirements: e.target.value})} rows={2} className="w-full px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 transition-all resize-none" placeholder="Decorations, pick-up location..." />
                        </div>

                        <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                          <div className="relative flex items-center justify-center mt-0.5">
                            <input type="checkbox" checked={form.termsAccepted} onChange={(e) => setForm({...form, termsAccepted: e.target.checked})} className="peer appearance-none w-4 h-4 border-2 border-gray-300 rounded-sm checked:border-[#ffc800] checked:bg-[#ffc800] transition-colors cursor-pointer" />
                            <Check className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600 leading-snug">
                            I accept the <span className="text-black font-semibold underline decoration-gray-300">terms & conditions</span>.
                          </span>
                        </label>

                        <AnimatePresence>
                          {submitted && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2">
                              <ShieldCheck className="w-4 h-4 text-green-600" />
                              <p className="text-xs sm:text-sm font-bold text-green-800">Redirecting to WhatsApp...</p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <motion.button
                          whileHover={isFormValid ? { scale: 1.01 } : {}}
                          whileTap={isFormValid ? { scale: 0.98 } : {}}
                          type="submit"
                          disabled={!isFormValid}
                          className={`w-full py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 ${
                            isFormValid ? 'bg-[#111827] text-white shadow-lg hover:bg-gray-800' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {isFormValid ? 'Confirm via WhatsApp' : 'Complete Form to Proceed'}
                          {isFormValid && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default WeddingCarRental;