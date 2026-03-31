import React, { useState } from 'react';
import { Bike, Shield, Clock, Fuel, Wrench, Phone, MessageCircle, CheckCircle, MapPin, Sparkles, IndianRupee, FileText, Headphones, ChevronRight, ArrowRight, Plus, Minus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const BikeRentalPage = () => {
  const navigate = useNavigate();

  // Interactive Form States
  const [duration, setDuration] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // 👈 New state for Hours/Days
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const rentalDurations = [
    { id: 'hourly', title: 'Hourly', price: '₹99 / hr', type: 'book' },
    { id: 'daily', title: 'Daily', price: '₹499 / day', type: 'book' },
    { id: 'weekly', title: 'Weekly', price: 'Enquire Price', type: 'enquire' },
    { id: 'monthly', title: 'Monthly', price: 'Enquire Price', type: 'enquire' },
  ];

  const vehicleTypes = [
    { id: 'scooty', title: 'Scooty', desc: 'Automatic (Activa/Jupiter or similar)' },
    { id: 'bike', title: 'Motorcycle', desc: 'Geared (Splendor/Pulsar or similar)' },
  ];

  const selectedDurationData = rentalDurations.find(d => d.id === duration);
  
  // Dynamic Pricing Calculation
  const basePrice = duration === 'hourly' ? 99 : 499;
  const totalPrice = basePrice * quantity;

  const handleProceedToBooking = () => {
    const timeLabel = duration === 'hourly' 
      ? (quantity === 1 ? 'Hour' : 'Hours') 
      : (quantity === 1 ? 'Day' : 'Days');

    const bookingData = {
      direction: `${quantity} ${timeLabel} Rental`,
      tripType: 'bike_rental',
      specificVehicle: vehicle === 'scooty' ? 'Scooty (Automatic)' : 'Motorcycle (Geared)',
      vehicleType: 'bike',
      price: totalPrice
    };
    
    navigate('/verify-booking', { state: bookingData });
  };

  const handleEnquireNow = () => {
    if (!name || !phone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    if (!acceptedTerms) {
      alert("Please accept the terms of service.");
      return;
    }

    const text = `Hi MTS Travels! I would like to enquire about a ${duration} rental for a ${vehicle}.\n\nName: ${name}\nPhone: ${phone}`;
    const whatsappUrl = `https://wa.me/917217667160?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const rentalTerms = [
    { icon: Clock, title: 'Flexible Duration', description: 'Hourly, daily, or weekly rental options available' },
    { icon: IndianRupee, title: 'Affordable Rates', description: 'Cheap hourly prices with no hidden charges' },
    { icon: Shield, title: 'Fully Insured', description: 'All bikes are insured for your safety' },
    { icon: Fuel, title: 'Fuel Policy', description: 'Return with same fuel level as received' },
    { icon: FileText, title: 'ID Required', description: 'Valid ID proof and driving license needed' },
    { icon: Wrench, title: 'Well Maintained', description: 'All bikes are in new and excellent condition' },
  ];

  // 🚨 CORRECTED SCHEMA: Changed to LocalBusiness and added required fields 🚨
  const bikeRentalSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Bike Rental Service - MTS Travels India',
    'image': 'https://www.mtstravelsindia.com/images/bike-rental-hero.webp',
    'description': 'Affordable bike rental in Dehradun with new condition bikes at cheap hourly prices. Flexible rental options - hourly, daily, weekly, monthly. Fully insured with free helmet.',
    'priceRange': '₹99 - ₹499',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Dehradun',
      'addressRegion': 'Uttarakhand',
      'addressCountry': 'India'
    },
    'telephone': '+91-721-766-7160',
    'email': 'info@mtstravelsindia.com',
    'areaServed': {
      '@type': 'City',
      'name': 'Dehradun'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.7',
      'ratingCount': '150'
    },
    'offers': [
      {
        '@type': 'Offer',
        'name': 'Hourly Bike Rental',
        'price': '99',
        'priceCurrency': 'INR',
        'description': 'Rent bikes by the hour'
      },
      {
        '@type': 'Offer',
        'name': 'Daily Bike Rental',
        'price': '499',
        'priceCurrency': 'INR',
        'description': 'Rent bikes for a full day'
      }
    ]
  };

  return (
    <>
      <SEO
        title="Bike Rental Service in Dehradun - New Bikes at Cheap Hourly Prices | MTS Travels India"
        description="Rent bikes in new condition at affordable hourly prices in Dehradun. Flexible rental options - hourly, daily, weekly. Fully insured bikes with free helmet."
        keywords="bike rental dehradun, rent bike dehradun, bike on rent, hourly bike rental, cheap bike rental, two wheeler rental dehradun"
        schema={bikeRentalSchema}
      />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 lg:pb-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#ffc800] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#ffc800] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/bike-rental-hero.webp"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80' }}
                  alt="Bike Rental Service in Dehradun"
                  className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              </div>
              <div className="absolute top-4 left-4 bg-[#ffc800] text-black px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                New Condition
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-xl text-xs sm:text-sm">
                <span className="text-[#ffc800] font-bold">Cheap</span> Hourly Prices
              </div>
            </div>

            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[#ffc800] text-black px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <Bike className="w-4 h-4" />
                <span>Bike Rental Service</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
                Rent Bikes in <span className="text-[#ffc800]">New Condition</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                Explore Dehradun and nearby areas on two wheels with our affordable bike rental service. We offer well-maintained bikes at cheap hourly prices with flexible rental options.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                  <span className="text-gray-300 text-xs sm:text-sm">New Condition Bikes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                  <span className="text-gray-300 text-xs sm:text-sm">Cheap Hourly Prices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                  <span className="text-gray-300 text-xs sm:text-sm">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                  <span className="text-gray-300 text-xs sm:text-sm">Free Helmet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 INTERACTIVE BOOKING WIDGET */}
      <section className="py-12 sm:py-16 bg-white relative -mt-8 rounded-t-3xl z-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Book Your Ride</h2>
            <p className="text-gray-500 text-sm">Select your duration and vehicle to get started instantly.</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            
            {/* Step 1: Duration */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="bg-[#111827] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span> 
                Select Duration Plan
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {rentalDurations.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => { 
                      setDuration(d.id); 
                      setVehicle(null); 
                      setQuantity(1); // Reset counter when changing plans
                    }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${duration === d.id ? 'border-[#111827] bg-[#111827] text-white shadow-md' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}
                  >
                    <div className="font-bold mb-1">{d.title}</div>
                    <div className={`text-xs ${duration === d.id ? 'text-[#ffc800]' : 'text-gray-500'}`}>{d.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Vehicle */}
            {duration && (
              <div className="mb-8 animate-fade-in">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-[#111827] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span> 
                  Select Vehicle Type
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {vehicleTypes.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setVehicle(v.id)}
                      className={`p-4 rounded-xl border-2 flex items-center gap-4 transition-all ${vehicle === v.id ? 'border-[#ffc800] bg-[#ffc800]/10 shadow-sm' : 'border-gray-200 bg-white hover:border-[#ffc800]/50'}`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${vehicle === v.id ? 'bg-[#ffc800]' : 'bg-gray-100'}`}>
                        <Bike className={`w-6 h-6 ${vehicle === v.id ? 'text-black' : 'text-gray-500'}`} />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-gray-900">{v.title}</div>
                        <div className="text-xs text-gray-500">{v.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Action Area (Dynamic based on plan) */}
            {duration && vehicle && (
              <div className="pt-6 border-t border-gray-200 animate-fade-in">
                
                {/* 3A: If Hourly or Daily -> Show Counter & Checkout */}
                {selectedDurationData?.type === 'book' && (
                  <div className="space-y-8">
                    
                    {/* The Smart Quantity Selector */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="bg-[#111827] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span> 
                        How many {duration === 'hourly' ? 'hours' : 'days'}?
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                          <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                            className="p-4 hover:bg-gray-100 transition-colors text-gray-600"
                          >
                            <Minus className="w-5 h-5" />
                          </button>
                          <div className="w-16 text-center font-black text-xl text-gray-900">{quantity}</div>
                          <button 
                            onClick={() => setQuantity(Math.min(6, quantity + 1))} 
                            className="p-4 hover:bg-gray-100 transition-colors text-gray-600"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                        
                        {/* Smart Warnings */}
                        {quantity === 6 && duration === 'hourly' && (
                          <div className="text-sm font-semibold text-amber-600 bg-amber-50 px-4 py-2 rounded-lg border border-amber-200">
                            💡 For 6+ hours, our Daily Plan is much cheaper!
                          </div>
                        )}
                        {quantity === 6 && duration === 'daily' && (
                          <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                            💡 For 6+ days, contact us for a Weekly discount!
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Final Price & Proceed Button */}
                    <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                      <div>
                        <p className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Total Rental Cost</p>
                        <div className="flex items-end justify-center sm:justify-start gap-2 text-white">
                          <span className="text-4xl font-black tracking-tight">₹{totalPrice}</span>
                          <span className="text-gray-400 font-medium pb-1">/ {quantity} {duration === 'hourly' ? (quantity === 1 ? 'Hour' : 'Hours') : (quantity === 1 ? 'Day' : 'Days')}</span>
                        </div>
                      </div>
                      <button 
                        onClick={handleProceedToBooking}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ffc800] text-[#111827] px-8 py-4 rounded-xl font-black text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(255,200,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                      >
                        Proceed to Pay <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                  </div>
                )}

                {/* 3B: If Weekly or Monthly -> Enquire Form for WhatsApp */}
                {selectedDurationData?.type === 'enquire' && (
                  <div className="bg-white p-6 rounded-2xl border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="bg-[#111827] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span> 
                      Request a Custom Quote
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1">Your Name</label>
                        <input 
                          type="text" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-[#ffc800] bg-gray-50 focus:bg-white transition-colors"
                          placeholder="Enter name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-[#ffc800] bg-gray-50 focus:bg-white transition-colors"
                          placeholder="Enter number"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 mb-6">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="mt-1 w-4 h-4 text-[#ffc800] border-gray-300 rounded cursor-pointer"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                        I agree to the <Link to="/terms-of-service" className="text-blue-600 hover:underline font-semibold" target="_blank">Terms of Service</Link> & conditions.
                      </label>
                    </div>

                    <button 
                      onClick={handleEnquireNow}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1ebd5a] transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-5 h-5" /> Enquire Now
                    </button>
                  </div>
                )}

              </div>
            )}
          </div>
        </div>
      </section>

      {/* Rental Terms Grid */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Our Guarantees</h2>
            <p className="text-gray-500 text-sm">Everything you need for a safe and smooth ride.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {rentalTerms.map((term, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-[#ffc800] hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-[#ffc800]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <term.icon className="w-5 h-5 text-[#d97706]" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">{term.title}</h3>
                <p className="text-[10px] sm:text-xs text-gray-500">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Bike Rental Service */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">About Our Bike Rental Service</h2>
          </div>
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              MTS Travels India offers the most affordable bike rental service in Dehradun with a fleet of new condition bikes available at cheap hourly rates. Whether you need a scooter for local commuting or a motorcycle for adventure exploring nearby hills and scenic routes, we have flexible two-wheeler rental options tailored to your needs. Our bike rental service has grown popular among tourists and locals alike who value affordability, convenience, and reliability.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              We offer competitive pricing for hourly, daily, weekly, and monthly bike rentals. Our hourly bike rental plan at just ₹99 per hour makes it the cheapest option for short-term rentals in Dehradun. For day-long explorations, our daily rental at ₹499 provides excellent value with no hidden charges. All our bikes—including automatic scooties like Activa and Jupiter, and geared motorcycles like Splendor and Pulsar—are maintained in new condition with regular servicing to ensure a smooth, safe riding experience. Every bike rental comes fully insured for your protection, plus a free helmet and all safety equipment.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Renting a bike from MTS Travels India is simple and hassle-free. You need valid ID proof and a driving license, and the process is transparent with no surprise costs. Whether you're exploring the scenic beauty of Dehradun, riding to nearby attractions, or need a two-wheeler for daily activities, our bike rental service provides the perfect solution. Contact us to book your bike instantly or enquire about customized rental packages for weekly and monthly needs. Experience the freedom of riding with MTS Travels India—your trusted partner for affordable and reliable bike rental service in Dehradun.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BikeRentalPage;