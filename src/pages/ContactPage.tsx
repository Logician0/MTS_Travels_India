import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, ArrowLeftRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // 👈 Added Link import
import SEO from '../components/SEO';

const ContactPage = () => {
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip'>('oneway');
  
  // 👈 New state for terms and conditions
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  const [oneWayForm, setOneWayForm] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '',
    message: '',
  });

  const [roundTripForm, setRoundTripForm] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    dropoff: '',
    departureDate: '',
    departureTime: '',
    returnDate: '',
    returnTime: '',
    passengers: '',
    message: '',
  });

  // --- NEW: Google Sheets integration function ---
  const submitToGoogleSheet = async (data: any, tripType: string) => {
    // ⚠️ IMPORTANT: Replace this with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbybpbgK76uDp3drv_fO9sZJAQOKASuMaOIN6aFVxXPzTnhBue-82ljC0yddfrHDhbp_hw/exec';
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString(),
          tripType: tripType,
          ...data
        })
      });
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
    }
  };

  // --- UPDATED: One Way Submit Handler ---
  const handleOneWaySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    
    // 1. Send data to Google Sheet silently
    await submitToGoogleSheet(oneWayForm, 'One Way');

    // 2. Format the message for WhatsApp
    const message = `*New Booking Request: One Way* 🚖
    
*Name:* ${oneWayForm.name}
*Phone:* ${oneWayForm.phone}
*Email:* ${oneWayForm.email || 'N/A'}

*Pickup Location:* ${oneWayForm.pickup}
*Drop Location:* ${oneWayForm.dropoff}
*Date:* ${oneWayForm.date}
*Time:* ${oneWayForm.time}
*Passengers:* ${oneWayForm.passengers}

*Additional Message:* ${oneWayForm.message || 'None'}`;

    // 3. Open WhatsApp
    const whatsappUrl = `https://wa.me/917217667160?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // 4. Clear form and terms
    setOneWayForm({ name: '', phone: '', email: '', pickup: '', dropoff: '', date: '', time: '', passengers: '', message: '' });
    setAcceptedTerms(false);
  };

  // --- UPDATED: Round Trip Submit Handler ---
  const handleRoundTripSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    
    // 1. Send data to Google Sheet
    await submitToGoogleSheet(roundTripForm, 'Round Trip');

    // 2. Format the message for WhatsApp
    const message = `*New Booking Request: Round Trip* 🚖
    
*Name:* ${roundTripForm.name}
*Phone:* ${roundTripForm.phone}
*Email:* ${roundTripForm.email || 'N/A'}

*Pickup Location:* ${roundTripForm.pickup}
*Drop Location:* ${roundTripForm.dropoff}
*Departure Date:* ${roundTripForm.departureDate} at ${roundTripForm.departureTime}
*Return Date:* ${roundTripForm.returnDate} at ${roundTripForm.returnTime}
*Passengers:* ${roundTripForm.passengers}

*Additional Message:* ${roundTripForm.message || 'None'}`;

    // 3. Open WhatsApp
    const whatsappUrl = `https://wa.me/917217667160?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // 4. Clear form and terms
    setRoundTripForm({ name: '', phone: '', email: '', pickup: '', dropoff: '', departureDate: '', departureTime: '', returnDate: '', returnTime: '', passengers: '', message: '' });
    setAcceptedTerms(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone / WhatsApp',
      details: ['+91 72176 67160'],
      action: 'tel:+917217667160',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@mtstravelsindia.com'],
      action: 'mailto:info@mtstravelsindia.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Dehradun', 'Uttarakhand, India'],
      action: '#',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['24/7 Available', 'Always Ready'],
      action: '#',
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us - Book Your Taxi"
        description="Contact MTS Travels India for taxi booking, tour packages, and travel inquiries. Call us 24/7 or fill the booking form. Quick response guaranteed."
        keywords="contact mts travels, taxi booking dehradun, book cab, travel inquiry"
      />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="floating-shape w-48 sm:w-72 h-48 sm:h-72 bg-[#ffc800] -top-24 sm:-top-36 -left-24 sm:-left-36" />
        <div className="floating-shape w-40 sm:w-56 h-40 sm:h-56 bg-[#111827] -bottom-20 sm:-bottom-28 -right-20 sm:-right-28" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#ffc800]/10 text-[#111827] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
              Book Your <span className="text-[#ffc800]">Taxi</span>
            </h1>
            <p className="text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto">
              Get in touch with us for bookings, inquiries, or any travel assistance. 
              We're here to help 24/7.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm border border-gray-100 card-hover text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffc800] rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#111827]" />
                </div>
                <h3 className="font-semibold text-[#111827] text-sm sm:text-base mb-1 sm:mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-[10px] sm:text-xs lg:text-sm text-[#6B7280] break-all sm:break-normal">{detail}</p>
                ))}
              </a>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4 sm:mb-6">Book Your Ride</h2>
              
              {/* Trip Type Tabs */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
                <button
                  type="button"
                  onClick={() => setTripType('oneway')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm sm:text-base font-semibold transition-all ${
                    tripType === 'oneway'
                      ? 'bg-[#ffc800] text-[#111827] shadow-md'
                      : 'text-[#6B7280] hover:text-[#111827]'
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>One Way</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('roundtrip')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm sm:text-base font-semibold transition-all ${
                    tripType === 'roundtrip'
                      ? 'bg-[#ffc800] text-[#111827] shadow-md'
                      : 'text-[#6B7280] hover:text-[#111827]'
                  }`}
                >
                  <ArrowLeftRight className="w-4 h-4" />
                  <span>Round Trip</span>
                </button>
              </div>

              {/* One Way Form */}
              {tripType === 'oneway' && (
                <form onSubmit={handleOneWaySubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={oneWayForm.name}
                        onChange={(e) => setOneWayForm({ ...oneWayForm, name: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={oneWayForm.phone}
                        onChange={(e) => setOneWayForm({ ...oneWayForm, phone: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                        placeholder="+91 72176 67160"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={oneWayForm.email}
                      onChange={(e) => setOneWayForm({ ...oneWayForm, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Pickup Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={oneWayForm.pickup}
                        onChange={(e) => setOneWayForm({ ...oneWayForm, pickup: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                        placeholder="Pickup City"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Drop Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={oneWayForm.dropoff}
                        onChange={(e) => setOneWayForm({ ...oneWayForm, dropoff: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                        placeholder="Drop City"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={oneWayForm.date}
                        onChange={(e) => setOneWayForm({ ...oneWayForm, date: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Time *
                      </label>
                      <input
                        type="time"
                        required
                        value={oneWayForm.time}
                        onChange={(e) => setOneWayForm({ ...oneWayForm, time: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                      Number of Passengers
                    </label>
                    <select
                      value={oneWayForm.passengers}
                      onChange={(e) => setOneWayForm({ ...oneWayForm, passengers: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                    >
                      <option value="">Select</option>
                      <option value="1-2">1-2 Passengers</option>
                      <option value="3-4">3-4 Passengers</option>
                      <option value="5-6">5-6 Passengers</option>
                      <option value="7-10">7-10 Passengers</option>
                      <option value="10+">10+ Passengers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                      Additional Message
                    </label>
                    <textarea
                      value={oneWayForm.message}
                      onChange={(e) => setOneWayForm({ ...oneWayForm, message: e.target.value })}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm resize-none"
                      placeholder="Any special requests..."
                    />
                  </div>

                  {/* 👈 NEW: Terms Checkbox */}
                  <div className="flex items-start gap-3 mt-4 mb-2">
                    <div className="flex items-center h-5">
                      <input 
                        id="terms-oneway" 
                        type="checkbox" 
                        required
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-[#ffc800] text-[#111827] cursor-pointer"
                      />
                    </div>
                    <div className="text-sm">
                      <label htmlFor="terms-oneway" className="font-medium text-gray-700 cursor-pointer">
                        I have read and accept the{' '}
                        <Link to="/terms-of-service" target="_blank" className="text-blue-600 hover:text-blue-800 hover:underline font-bold">
                          terms and conditions
                        </Link>.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!acceptedTerms}
                    className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold flex items-center justify-center gap-2 text-sm sm:text-base transition-all ${
                      !acceptedTerms 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-[#ffc800] text-[#111827] btn-hover hover:bg-[#e6b400]'
                    }`}
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Submit Booking Request
                  </button>
                </form>
              )}

              {/* Round Trip Form */}
              {tripType === 'roundtrip' && (
                <form onSubmit={handleRoundTripSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={roundTripForm.name}
                        onChange={(e) => setRoundTripForm({ ...roundTripForm, name: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={roundTripForm.phone}
                        onChange={(e) => setRoundTripForm({ ...roundTripForm, phone: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                        placeholder="+91 72176 67160"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={roundTripForm.email}
                      onChange={(e) => setRoundTripForm({ ...roundTripForm, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Pickup Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={roundTripForm.pickup}
                        onChange={(e) => setRoundTripForm({ ...roundTripForm, pickup: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                        placeholder="Pickup City"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Drop Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={roundTripForm.dropoff}
                        onChange={(e) => setRoundTripForm({ ...roundTripForm, dropoff: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                        placeholder="Drop City"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Departure Date *
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={roundTripForm.departureDate}
                        onChange={(e) => setRoundTripForm({ ...roundTripForm, departureDate: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Departure Time *
                      </label>
                      <input
                        type="time"
                        required
                        value={roundTripForm.departureTime}
                        onChange={(e) => setRoundTripForm({ ...roundTripForm, departureTime: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Return Date *
                      </label>
                      <input
                        type="date"
                        required
                        min={roundTripForm.departureDate || new Date().toISOString().split('T')[0]}
                        value={roundTripForm.returnDate}
                        onChange={(e) => setRoundTripForm({ ...roundTripForm, returnDate: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                        Return Time *
                      </label>
                      <input
                        type="time"
                        required
                        value={roundTripForm.returnTime}
                        onChange={(e) => setRoundTripForm({ ...roundTripForm, returnTime: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                      Number of Passengers
                    </label>
                    <select
                      value={roundTripForm.passengers}
                      onChange={(e) => setRoundTripForm({ ...roundTripForm, passengers: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm"
                    >
                      <option value="">Select</option>
                      <option value="1-2">1-2 Passengers</option>
                      <option value="3-4">3-4 Passengers</option>
                      <option value="5-6">5-6 Passengers</option>
                      <option value="7-10">7-10 Passengers</option>
                      <option value="10+">10+ Passengers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#111827] mb-1.5">
                      Additional Message
                    </label>
                    <textarea
                      value={roundTripForm.message}
                      onChange={(e) => setRoundTripForm({ ...roundTripForm, message: e.target.value })}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 outline-none transition-all text-sm resize-none"
                      placeholder="Any special requests..."
                    />
                  </div>

                  {/* 👈 NEW: Terms Checkbox */}
                  <div className="flex items-start gap-3 mt-4 mb-2">
                    <div className="flex items-center h-5">
                      <input 
                        id="terms-roundtrip" 
                        type="checkbox" 
                        required
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-[#ffc800] text-[#111827] cursor-pointer"
                      />
                    </div>
                    <div className="text-sm">
                      <label htmlFor="terms-roundtrip" className="font-medium text-gray-700 cursor-pointer">
                        I have read and accept the{' '}
                        <Link to="/terms-of-service" target="_blank" className="text-blue-600 hover:text-blue-800 hover:underline font-bold">
                          terms and conditions
                        </Link>.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!acceptedTerms}
                    className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold flex items-center justify-center gap-2 text-sm sm:text-base transition-all ${
                      !acceptedTerms 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-[#ffc800] text-[#111827] btn-hover hover:bg-[#e6b400]'
                    }`}
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Submit Round Trip Request
                  </button>
                </form>
              )}
            </div>

            {/* Map & Info */}
            <div className="space-y-6">
             {/* Map */}
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                  title="MTS Travels India Location"
                  src="https://maps.google.com/maps?q=MTS+Travels+India,+Dehradun,+Uttarakhand&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="sm:h-[400px]"
                />
              </div>

              {/* Quick Contact */}
              <div className="bg-[#111827] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+917217667160"
                    className="flex items-center gap-3 text-white/80 hover:text-[#ffc800] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#ffc800]/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#ffc800]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Call / WhatsApp</p>
                      <p className="font-semibold">+91 72176 67160</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@mtstravelsindia.com"
                    className="flex items-center gap-3 text-white/80 hover:text-[#ffc800] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#ffc800]/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#ffc800]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Email Us</p>
                      <p className="font-semibold">info@mtstravelsindia.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;