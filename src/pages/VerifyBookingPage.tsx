import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock, Info, Phone, User, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
  const [isVerifying, setIsVerifying] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  // New state for Bike Rental age/license verification
  const [acceptedAgeLicense, setAcceptedAgeLicense] = useState(false);

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

  if (isVerifying) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111827] text-white">
        <div className="relative mb-10 flex items-center justify-center">
          <div className="absolute w-32 h-32 rounded-full border-t-4 border-[#ffc800] border-r-4 border-transparent animate-spin" style={{ animationDuration: '1s' }} />
          <div className="absolute w-36 h-36 rounded-full border-b-4 border-[#0F8A7C] border-l-4 border-transparent animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
          <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,200,0,0.3)] relative z-10 p-4">
            <img src="/images/logo.webp" alt="MTS Travels India" className="w-full h-auto object-contain" onError={(e: any) => { e.currentTarget.src = '/images/logo.png' }} />
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 tracking-wide text-center px-4 animate-fade-in-up">
          Redirecting to Booking Confirmation Page
        </h2>
        <p className="text-gray-400 font-bold tracking-widest uppercase text-sm animate-pulse">
          Please Wait...
        </p>
      </div>
    );
  }

  // Smart check: Is this a bike rental?
  const isBikeRental = bookingData.tripType === 'bike_rental' || bookingData.vehicleType === 'bike';
  const maxPassengers = bookingData.vehicleType === 'sedan' ? 4 : 6;

  const [formData, setFormData] = useState({ 
    name: bookingData.name || '', // Auto-fill if passed from Test Page
    email: bookingData.email || '', 
    phone: bookingData.phone || '', 
    date: bookingData.date || '', // Note: Standard HTML date inputs expect YYYY-MM-DD
    timeHour: '10',     
    timeMinute: '00',   
    timePeriod: 'AM',   
    passengers: bookingData.passengers || 1 
  });

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Extra safety checks
    if (!acceptedTerms) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    
    // Prevent submission if it's a bike rental and they didn't check the license box
    if (isBikeRental && !acceptedAgeLicense) {
      alert("You must confirm you are 18+ and have a valid driving license.");
      return;
    }

    setIsProcessing(true);

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setIsProcessing(false);
      return;
    }

    const finalFormattedTime = `${formData.timeHour}:${formData.timeMinute} ${formData.timePeriod}`;
    
    const finalBookingData = {
      ...bookingData,
      ...formData,
      time: finalFormattedTime
    };

    // 🚨 SMART BACKEND URL: Uses your environment variable, falls back to live server
    const API_URL = ((import.meta as any).env as any).VITE_API_URL || 'https://mts-travels-api-staging.suraj-logician.workers.dev';

    try {
      const orderResponse = await fetch(`${API_URL}/api/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: bookingData.price })
      });
      
      const orderData = await orderResponse.json();

      if (!orderData.success) {
        alert("Failed to create order on server. Is your backend running?");
        setIsProcessing(false);
        return;
      }

      const configResponse = await fetch(`${API_URL}/api/payment-config`);
      const paymentConfig = await configResponse.json();
      if (!configResponse.ok || !paymentConfig.keyId) {
        alert("Payment configuration is unavailable. Please contact support.");
        setIsProcessing(false);
        return;
      }

      const options = {
        // The publishable key ID comes from the Worker; the Razorpay secret stays server-side.
        key: paymentConfig.keyId,
        amount: orderData.order.amount, 
        currency: "INR",
        name: "MTS Travels India",
        description: `${isBikeRental ? 'Bike Rental' : 'Cab Booking'}: ${bookingData.direction}`,
        image: "/images/logo.png",
        order_id: orderData.order.id, 
        
        handler: async function (response: any) {
          setIsVerifying(true);
          console.log("Payment completed on frontend, verifying with server...");
          
          const verifyResponse = await fetch(`${API_URL}/api/verify-payment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              bookingData: finalBookingData 
            })
          });

          const verifyData = await verifyResponse.json();

          if (verifyData.success) {
            // Keep the receipt available if the success page is refreshed immediately after checkout.
            sessionStorage.setItem('mts-last-booking-confirmation', JSON.stringify({
              booking: finalBookingData,
              paymentId: response.razorpay_payment_id
            }));
            navigate('/booking-success', { 
                state: { 
                    booking: finalBookingData,
                    paymentId: response.razorpay_payment_id
                } 
            });
          } else {
            alert("Payment verification failed! Please contact support.");
            setIsVerifying(false);
            setIsProcessing(false);
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
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
          }
        }
      };

      const paymentObject = new (window as any).Razorpay(options);
      
      paymentObject.on('payment.failed', function (response: any) {
        alert(`Payment Failed: ${response.error.description}`);
        setIsProcessing(false);
      });

      paymentObject.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Could not connect to the payment server. Please try again later.");
      setIsProcessing(false);
    }
  };

  // Determine if the button should be disabled based on what they are booking
  const isFormValid = isBikeRental ? (acceptedTerms && acceptedAgeLicense) : acceptedTerms;

  return (
    <>
      <SEO title="Verify Booking - MTS Travels India" description="Complete your booking details safely and securely." />
      
      <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="mb-8">
            <h1 className="text-3xl font-black text-[#111827] mb-2">Almost Done!</h1>
            <p className="text-gray-500">Please fill in your details to secure your {isBikeRental ? 'bike' : 'cab'}.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <h2 className="text-xl font-bold mb-6 text-gray-900 border-b pb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#ffc800]" /> Traveler Details
                </h2>
                
                <form onSubmit={handlePayment} className="space-y-6">
                  
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        {isBikeRental ? 'Bike Pickup Date' : 'Pickup Date'}
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                          required type="date" min={minDate}
                          className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#ffc800] focus:ring-0 outline-none transition-colors bg-gray-50 focus:bg-white text-gray-700 font-medium cursor-pointer" 
                          value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        {isBikeRental ? 'Bike Pickup Time' : 'Pickup Time'}
                      </label>
                      <div className="flex gap-2">
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

                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl flex gap-3 shadow-sm mt-6">
                    <Info className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-800 font-medium">
                      <strong className="block text-amber-900 mb-0.5">Advance Booking Required</strong>
                      Please ensure your selected pickup time is at least <span className="font-bold underline">3 hours from now</span> to allow us to assign the best {isBikeRental ? 'vehicle' : 'driver'} for your route.
                    </p>
                  </div>

                  {!isBikeRental && (
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
                  )}

                  <div className="pt-4 flex items-start gap-3 mt-2">
                    <div className="flex items-center h-5">
                      <input 
                        id="terms" 
                        type="checkbox" 
                        required
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-[#ffc800] text-[#111827] cursor-pointer"
                      />
                    </div>
                    <div className="text-sm">
                      <label htmlFor="terms" className="font-medium text-gray-700 cursor-pointer">
                        I have read and accept the{' '}
                        <Link to="/terms-of-service" target="_blank" className="text-blue-600 hover:text-blue-800 hover:underline font-bold">
                          terms and conditions
                        </Link>.
                      </label>
                    </div>
                  </div>

                  {isBikeRental && (
                    <div className="flex items-start gap-3 mt-2">
                      <div className="flex items-center h-5">
                        <input 
                          id="licenseCheck" 
                          type="checkbox" 
                          required
                          checked={acceptedAgeLicense}
                          onChange={(e) => setAcceptedAgeLicense(e.target.checked)}
                          className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-[#ffc800] text-[#111827] cursor-pointer"
                        />
                      </div>
                      <div className="text-sm">
                        <label htmlFor="licenseCheck" className="font-medium text-gray-700 cursor-pointer">
                          I confirm that I am 18 years or older and possess a valid, original Driving License.
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t mt-4">
                    <button 
                      type="submit" 
                      disabled={isProcessing || !isFormValid}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 transform ${(isProcessing || !isFormValid) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#ffc800] text-[#111827] shadow-[0_4px_14px_0_rgba(255,200,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,200,0,0.23)] hover:bg-[#e6b400] hover:-translate-y-0.5'}`}
                    >
                      <ShieldCheck className="w-6 h-6" /> 
                      {isProcessing ? 'Connecting to secure server...' : 'Proceed to Secure Payment'}
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                      Payments are 100% secure & encrypted by Razorpay
                    </p>
                  </div>

                </form>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                
                <div className="bg-[#111827] text-white rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ffc800] opacity-10 rounded-full blur-2xl" />
                  
                  <h3 className="text-lg font-bold mb-5 border-b border-gray-700 pb-3 text-[#ffc800]">Your Trip Summary</h3>
                  
                  <div className="space-y-4 text-sm relative z-10">
                    <div>
                      <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold mb-1">
                        {isBikeRental ? 'Duration' : 'Route'}
                      </span> 
                      <span className="font-bold text-base">{bookingData.direction}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold mb-1">Trip Type</span> 
                        <span className="font-bold capitalize">{bookingData.tripType ? bookingData.tripType.replace('_', ' ') : 'N/A'}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold mb-1">Vehicle</span> 
                        <span className="font-bold">{bookingData.specificVehicle}</span>
                      </div>
                    </div>

                    <div className="pt-4 mt-2 border-t border-gray-700">
                      <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold mb-1">Total Fare</span> 
                      <span className="text-3xl font-black text-[#25D366]">₹{bookingData.price}</span>
                      <span className="text-xs text-gray-400 block mt-1">Inclusive of GST. {isBikeRental ? 'Fuel extra.' : 'Tolls extra.'}</span>
                    </div>
                  </div>
                </div>

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
