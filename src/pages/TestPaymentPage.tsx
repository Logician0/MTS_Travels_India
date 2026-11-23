import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Zap, ArrowRight, ShieldAlert } from 'lucide-react';

const TestPaymentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const testToken = searchParams.get('token') || '';
  
  const [formData, setFormData] = useState({
    name: 'System Tester',
    email: 'suraj.logician@gmail.com',
    phone: '9876543210',
  });

  const handleTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testToken) return;

    // 1. Create a dummy booking object with the price forced to 1 Rupee.
    const testBookingData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      direction: 'Private Live Payment Verification',
      tripType: 'private_live_test',
      vehicleType: 'private_test',
      specificVehicle: 'MTS Private Test Booking',
      date: new Date().toISOString().slice(0, 10),
      time: '10:00 AM',
      passengers: 1,
      price: 1,
      privateTestToken: testToken,
    };

    // 2. Redirect to your actual Verify Booking page and pass the data!
    navigate('/verify-booking', { state: testBookingData }); 
  };

  if (!testToken) return <div className="min-h-screen flex items-center justify-center p-6 text-center font-semibold text-slate-700">This private payment check is unavailable.</div>;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="bg-[#111827] p-6 text-center border-b-4 border-[#ffc800]">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Zap className="w-6 h-6 text-[#ffc800]" />
          </div>
          <h1 className="text-xl font-bold text-white tracking-wide">Live System Test</h1>
          <p className="text-gray-400 text-sm mt-1">Generate a ₹1.00 Test Booking</p>
        </div>

        <div className="p-6 sm:p-8">
          <form onSubmit={handleTestSubmit} className="space-y-5">
            
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-blue-800 font-medium leading-relaxed">
                Clicking proceed will redirect you to your main booking page with a locked price of <strong>₹1.00</strong> to test Razorpay safely.
              </p>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Test Name</label>
              <input 
                type="text" 
                value={formData.name} 
                onChange={e => setFormData({...formData, name: e.target.value})} 
                className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 font-medium" 
                required 
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Receive Email At</label>
              <input 
                type="email" 
                value={formData.email}
                readOnly
                className="w-full mt-1 px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-sm text-gray-600 font-medium"
                required 
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Test Phone</label>
              <input 
                type="tel" 
                value={formData.phone} 
                onChange={e => setFormData({...formData, phone: e.target.value})} 
                className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20 font-medium" 
                required 
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all bg-[#111827] text-white hover:bg-gray-800 active:scale-95"
            >
              Go to Payment Page <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestPaymentPage;
