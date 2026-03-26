import { useState } from 'react';
import { ShieldCheck, Zap, ArrowRight, Loader2 } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'; // Uncomment if you want to redirect after

// Safely load Razorpay script
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const TestPaymentPage = () => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Fill this with your own details to test the email delivery!
  const [formData, setFormData] = useState({
    name: 'Test Admin',
    email: 'your_email@example.com', // Change this to your email
    phone: '9876543210',
  });

  const handleTestPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // 1. Load Razorpay
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert('Razorpay failed to load. Check your internet connection.');
      setLoading(false);
      return;
    }

    try {
      // 2. Call your backend to create an order for ₹1
      // Replace with your actual live backend URL if testing on production
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'; 
      
      const orderResponse = await fetch(`${API_URL}/api/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1, receipt: `test_${Date.now()}` }) // ₹1
      });
      
      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error('Failed to create order on backend');
      }

      // 3. Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Your Live Key ID
        amount: orderData.order.amount, // 100 paise (₹1)
        currency: orderData.order.currency,
        name: "MTS Travels (TEST)",
        description: "Live System Test (₹1)",
        order_id: orderData.order.id,
        
        handler: async function (response: any) {
          // 4. Payment successful! Now verify it on the backend
          try {
            const verifyResponse = await fetch(`${API_URL}/api/verify-payment`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                // Passing dummy booking data so MongoDB and Emails don't crash!
                bookingData: {
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone,
                  direction: 'System Test Route',
                  tripType: 'System Test',
                  vehicleType: 'Test Vehicle',
                  specificVehicle: 'Test Car',
                  date: new Date().toLocaleDateString(),
                  time: new Date().toLocaleTimeString(),
                  passengers: 1,
                  price: 1, // ₹1
                }
              })
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              setStatus('success');
              // Optional: Redirect to a success page after 2 seconds
              // setTimeout(() => navigate('/booking-success'), 2000);
            } else {
              setStatus('error');
              alert("Verification failed: " + verifyData.message);
            }
          } catch (err) {
            setStatus('error');
            console.error("Verification Error:", err);
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#ffc800"
        }
      };

      const paymentObject = new window.Razorpay(options);
      
      paymentObject.on('payment.failed', function (response: any) {
        alert(`Payment Failed: ${response.error.description}`);
        setLoading(false);
      });

      paymentObject.open();

    } catch (error) {
      console.error("Payment Flow Error:", error);
      alert("Something went wrong initializing the payment.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        <div className="bg-[#111827] p-6 text-center border-b-4 border-[#ffc800]">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Zap className="w-6 h-6 text-[#ffc800]" />
          </div>
          <h1 className="text-xl font-bold text-white tracking-wide">Live System Test</h1>
          <p className="text-gray-400 text-sm mt-1">Verify Razorpay, MongoDB & Emails</p>
        </div>

        <div className="p-6 sm:p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Test Successful! 🎉</h2>
              <p className="text-gray-500 text-sm">₹1 payment captured, saved to database, and emails sent. Check your inbox!</p>
            </div>
          ) : (
            <form onSubmit={handleTestPayment} className="space-y-4">
              
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mb-6">
                <p className="text-sm text-blue-800 font-medium text-center">
                  This will charge exactly <strong>₹1.00</strong> to test the live production environment.
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Test Name</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20" required />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Receive Email At</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20" required />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Test Phone</label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ffc800] focus:ring-2 focus:ring-[#ffc800]/20" required />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all bg-[#111827] text-white hover:bg-gray-800 disabled:opacity-70"
              >
                {loading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                ) : (
                  <>Pay ₹1.00 & Run Test <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPaymentPage;