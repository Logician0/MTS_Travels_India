import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Info, Phone, Mail, User, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

// Safely loads the Razorpay checkout script
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const VerifyBookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

  const [minDate, setMinDate] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  if (!bookingData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">No booking data found!</h2>
        <button onClick={() => navigate('/routes')} className="text-[#0F8A7C] underline">Go back to Routes</button>
      </div>
    );
  }

  const maxPassengers = bookingData.vehicleType === 'sedan' ? 4 : 6;
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    date: '',
    timeHour: '10',     
    timeMinute: '00',   
    timePeriod: 'AM',   
    passengers: 1 
  });

  // --- FULL FULL-STACK RAZORPAY INTEGRATION ---
  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // 1. Load the script
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setIsProcessing(false);
      return;
    }

    const finalFormattedTime = `${formData.timeHour}:${formData.timeMinute} ${formData.timePeriod}`;
    
    // Combine all data into one clean package
    const finalBookingData = {
      ...bookingData,
      ...formData,
      time: finalFormattedTime
    };

    try {
      // 2. Ask your Node.js Server to create an Order securely (🚀 LIVE URL APPLIED HERE)
      const orderResponse = await fetch('https://mts-travels-india-backend.onrender.com/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: bookingData.price })
      });
      
      const orderData = await orderResponse.json();

      if (!orderData.success) {
        alert("Failed to create order on server.");
        setIsProcessing(false);
        return;
      }

      // 3. Setup Razorpay Options using the secure order_id from your server
      const options = {
        key: "rzp_test_STscSgnGmHCBqa", // Your exact test key
        amount: orderData.order.amount, 
        currency: "INR",
        name: "MTS Travels India",
        description: `Cab Booking: ${bookingData.direction}`,
        image: "/images/logo.png",
        order_id: orderData.order.id, // 🚨 Secure ID from your server!
        
        // 4. What happens when the payment is successful
        handler: async function (response: any) {
          console.log("Payment completed on frontend, verifying with server...");
          
          // Send the receipt to your server to mathematically verify it (🚀 LIVE URL APPLIED HERE)
          const verifyResponse = await fetch('https://mts-travels-india-backend.onrender.com/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              bookingData: finalBookingData // Send all the traveler details to the server too!
            })
          });

          const verifyData = await verifyResponse.json();

          if (verifyData.success) {
            alert(`Payment Successful! Your cab is booked.\nWe will contact you shortly at ${formData.phone}.`);
            navigate('/');
          } else {
            alert("Payment verification failed! Please contact support.");
          }
        },
        
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#111827", 
        },
      };

      // 5. Open the Razorpay Checkout Window
      const paymentObject = new (window as any).Razorpay(options);
      
      paymentObject.on('payment.failed', function (response: any) {
        alert(`Payment Failed: ${response.error.description}`);
      });

      paymentObject.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Could not connect to the payment server. Is your Node.js server running?");
    }

    setIsProcessing(false);
  };

  return (
    <>
      <SEO title="Verify Booking - MTS Travels India" description="Complete your booking details safely and securely." />
      
      <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="mb-8">
            <h1 className="text-3xl font-black text-[#111827] mb-2">Almost Done!</h1>
            <p className="text-gray-500">Please fill in your travel details to secure your cab.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: The Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <h2 className="text-xl font-bold mb-6 text-gray-900 border-b pb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#ffc800]" /> Traveler Details
                </h2>
                
                <form onSubmit={handlePayment} className="space-y-6">
                  
                  {/* Personal Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <input required type="text" className="w-full border-2 border-gray-200 rounded-xl p-3.5 focus:border-[#ffc800] focus:ring-0 outline-none transition-colors bg-gray-50 focus:bg-white" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input required type="email" className="w-full border-2 border-gray-200 rounded-xl p-3.5 focus:border-[#ffc800] focus:ring-0 outline-none transition-colors bg-gray-50 focus:bg-white" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <input required type="tel" pattern="[0-9]{10}" className="w-full border-2 border-gray-200 rounded-xl p-3.5 focus:border-[#ffc800] focus:ring-0 outline-none transition-colors bg-gray-50 focus:bg-white" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="10-digit mobile number" />
                    </div>
                  </div>

                  {/* Travel Date & CUSTOM Time Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
                    
                    {/* Date Picker */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Pickup Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                          required type="date" min={minDate}
                          className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#ffc800] focus:ring-0 outline-none transition-colors bg-gray-50 focus:bg-white text-gray-700 font-medium cursor-pointer" 
                          value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} 
                        />
                      </div>
                    </div>

                    {/* Custom Premium Time Picker */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Pickup Time</label>
                      <div className="flex gap-2">
                        {/* Hour Dropdown */}
                        <div className="relative flex-1">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                          <select 
                            className="w-full pl-9 pr-2 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#ffc800] focus:ring-0 outline-none appearance-none bg-gray-50 focus:bg-white text-gray-700 font-medium cursor-pointer"
                            value={formData.timeHour} onChange={e => setFormData({...formData, timeHour: e.target.value})}
                          >
                            {['01','02','03','04','05','06','07','08','09','10','11','12'].map(h => (
                              <option key={h} value={h}>{h}</option>
                            ))}
                          </select>
                        </div>
                        
                        {/* Minute Dropdown */}
                        <div className="relative flex-1">
                          <span className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 font-bold text-gray-400">:</span>
                          <select 
                            className="w-full px-2 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#ffc800] focus:ring-0 outline-none appearance-none bg-gray-50 focus:bg-white text-gray-700 font-medium cursor-pointer text-center"
                            value={formData.timeMinute} onChange={e => setFormData({...formData, timeMinute: e.target.value})}
                          >
                            {['00','15','30','45'].map(m => (
                              <option key={m} value={m}>{m}</option>
                            ))}
                          </select>
                        </div>

                        {/* AM / PM Interactive Toggle */}
                        <div className="flex bg-gray-100 p-1 rounded-xl border-2 border-gray-100 flex-col sm:flex-row gap-1">
                          <button 
                            type="button" 
                            onClick={() => setFormData({...formData, timePeriod: 'AM'})} 
                            className={`px-3 py-1 rounded-lg text-sm font-bold transition-all ${formData.timePeriod === 'AM' ? 'bg-white text-[#111827] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                          >
                            AM
                          </button>
                          <button 
                            type="button" 
                            onClick={() => setFormData({...formData, timePeriod: 'PM'})} 
                            className={`px-3 py-1 rounded-lg text-sm font-bold transition-all ${formData.timePeriod === 'PM' ? 'bg-white text-[#111827] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                          >
                            PM
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Premium Notice Alert */}
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl flex gap-3 shadow-sm mt-6">
                    <Info className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-800 font-medium">
                      <strong className="block text-amber-900 mb-0.5">Advance Booking Required</strong>
                      Please ensure your selected pickup time is at least <span className="font-bold underline">5 hours from now</span> to allow us to assign the best driver for your route.
                    </p>
                  </div>

                  {/* Interactive Passenger Selection */}
                  <div className="pt-4">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Number of Passengers</label>
                    <div className="flex flex-wrap gap-3">
                      {[...Array(maxPassengers)].map((_, i) => {
                        const num = i + 1;
                        const isMax = num === maxPassengers;
                        const isSelected = formData.passengers === num;
                        
                        return (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setFormData({...formData, passengers: num})}
                            className={`relative px-5 sm:px-6 py-3 rounded-xl border-2 font-bold text-sm transition-all duration-200 ${
                              isSelected 
                                ? 'border-[#111827] bg-[#111827] text-white shadow-md transform scale-105' 
                                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {num} {isMax && <span className={`text-[10px] ml-1 uppercase tracking-wider ${isSelected ? 'text-[#ffc800]' : 'text-gray-400'}`}>(Max)</span>}
                            {isSelected && <CheckCircle2 className="absolute -top-2 -right-2 w-5 h-5 text-[#ffc800] bg-[#111827] rounded-full" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t mt-6">
                    <button 
                      type="submit" 
                      disabled={isProcessing}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 transform ${isProcessing ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-[#ffc800] text-[#111827] shadow-[0_4px_14px_0_rgba(255,200,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,200,0,0.23)] hover:bg-[#e6b400] hover:-translate-y-0.5'}`}
                    >
                      <ShieldCheck className="w-6 h-6" /> 
                      {isProcessing ? 'Securely Loading Razorpay...' : 'Proceed to Secure Payment'}
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                      Payments are 100% secure & encrypted by Razorpay
                    </p>
                  </div>

                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: Summary & Support Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                
                {/* Booking Summary Card */}
                <div className="bg-[#111827] text-white rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ffc800] opacity-10 rounded-full blur-2xl" />
                  
                  <h3 className="text-lg font-bold mb-5 border-b border-gray-700 pb-3 text-[#ffc800]">Your Trip Summary</h3>
                  
                  <div className="space-y-4 text-sm relative z-10">
                    <div>
                      <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold mb-1">Route</span> 
                      <span className="font-bold text-base">{bookingData.direction}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold mb-1">Trip Type</span> 
                        <span className="font-bold capitalize">{bookingData.tripType.replace('_', ' ')}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold mb-1">Vehicle</span> 
                        <span className="font-bold">{bookingData.specificVehicle}</span>
                      </div>
                    </div>

                    <div className="pt-4 mt-2 border-t border-gray-700">
                      <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold mb-1">Total Fare</span> 
                      <span className="text-3xl font-black text-[#25D366]">₹{bookingData.price}</span>
                      <span className="text-xs text-gray-400 block mt-1">Inclusive of GST. Tolls extra.</span>
                    </div>
                  </div>
                </div>

                {/* Contact & Support Card */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Need Help with Booking?</h3>
                  <p className="text-sm text-gray-500 mb-5">Our support team is available 24/7 to assist you with your travel plans.</p>
                  
                  <div className="space-y-4">
                    <a href="tel:+917217667160" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-teal-50 hover:text-[#0F8A7C] transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#0F8A7C] group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-400 uppercase">Call Us</div>
                        <div className="font-bold text-gray-900">+91 72176 67160</div>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyBookingPage;