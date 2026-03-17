import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PaymentPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  const upiId = 'mtstravelsindia@upi';
  const whatsappNumber = '917217667160';
  const whatsappMessage = encodeURIComponent('Hi MTS Travels India! I have made a payment and attached the screenshot for confirmation. Please verify my booking.');
  
  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const upiApps = [
    {
      name: 'Google Pay',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <path fill="#4285F4" d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
        </svg>
      ),
      color: 'bg-white',
      link: `upi://pay?pa=${upiId}&pn=MTS%20Travels%20India&cu=INR`
    },
    {
      name: 'PhonePe',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <circle fill="#5f259f" cx="12" cy="12" r="12"/>
          <path fill="#fff" d="M15.5 7H9.8c-.7 0-1.3.6-1.3 1.3v7.4c0 .7.6 1.3 1.3 1.3h.9v-3.5h2.8c1.9 0 3.5-1.6 3.5-3.5S17.4 7 15.5 7zm0 5.2h-2.8V8.8h2.8c1 0 1.8.8 1.8 1.7s-.8 1.7-1.8 1.7z"/>
        </svg>
      ),
      color: 'bg-[#5f259f]',
      link: `upi://pay?pa=${upiId}&pn=MTS%20Travels%20India&cu=INR`
    },
    {
      name: 'Paytm',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <rect fill="#00BAF2" width="24" height="24" rx="4"/>
          <path fill="#fff" d="M6 8h2.5c1.4 0 2.5 1.1 2.5 2.5S9.9 13 8.5 13H7.5v3H6V8zm1.5 3.5h1c.6 0 1-.4 1-1s-.4-1-1-1h-1v2zm5.5-3.5h2.5c1.4 0 2.5 1.1 2.5 2.5 0 1-.6 1.9-1.5 2.3l2 3.2h-1.8l-1.7-2.8V16H13V8zm1.5 3.5h1c.6 0 1-.4 1-1s-.4-1-1-1h-1v2z"/>
        </svg>
      ),
      color: 'bg-[#00BAF2]',
      link: `upi://pay?pa=${upiId}&pn=MTS%20Travels%20India&cu=INR`
    },
    {
      name: 'BHIM',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <rect fill="#00C853" width="24" height="24" rx="4"/>
          <path fill="#fff" d="M12 4L6 8v8l6 4 6-4V8l-6-4zm0 2.2L16 9v6l-4 2.7L8 15V9l4-2.8z"/>
        </svg>
      ),
      color: 'bg-[#00C853]',
      link: `upi://pay?pa=${upiId}&pn=MTS%20Travels%20India&cu=INR`
    },
    {
      name: 'Amazon Pay',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <rect fill="#FF9900" width="24" height="24" rx="4"/>
          <path fill="#232F3E" d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5c1.5 0 2.9-.7 3.8-1.8l-1.2-1c-.6.8-1.5 1.2-2.6 1.2-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4c1.1 0 2 .5 2.6 1.2l1.2-1C14.9 7.7 13.5 7 12 7z"/>
        </svg>
      ),
      color: 'bg-[#FF9900]',
      link: `upi://pay?pa=${upiId}&pn=MTS%20Travels%20India&cu=INR`
    },
    {
      name: 'Bank UPI',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <rect fill="#1a1a1a" width="24" height="24" rx="4"/>
          <path fill="#ffc800" d="M12 3L3 8v2h18V8L12 3zm0 2.5L17 8H7l5-2.5zM5 12v6h2v-6H5zm4 0v6h2v-6H9zm4 0v6h2v-6h-2zm4 0v6h2v-6h-2zM3 20v2h18v-2H3z"/>
        </svg>
      ),
      color: 'bg-gray-100',
      link: `upi://pay?pa=${upiId}&pn=MTS%20Travels%20India&cu=INR`
    }
  ];

  return (
    <>
      <SEO
        title="Payment - MTS Travels India | Secure Online Payment"
        description="Make secure payment for your taxi booking with MTS Travels India. Pay via UPI, Google Pay, PhonePe, Paytm and more."
      />

      <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400 rounded-full px-4 py-2 mb-4">
              <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-semibold text-gray-800">100% Secure Payment</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Complete Your <span className="text-yellow-500">Payment</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              Pay securely using UPI and send the screenshot via WhatsApp for instant booking confirmation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* QR Code Section */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-6">
                Scan QR Code to Pay
              </h2>
              
              {/* QR Code */}
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-2xl border-4 border-yellow-400 shadow-lg">
                  <img
                    src="/images/qr-code.webp"
                    alt="UPI Payment QR Code - MTS Travels India"
                    className="w-48 h-48 sm:w-56 sm:h-56 rounded-xl object-contain"
                  />
                </div>
              </div>

              {/* UPI ID */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 text-center mb-2">UPI ID</p>
                <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-xl px-4 py-3">
                  <span className="font-mono font-semibold text-gray-900 text-sm sm:text-base">{upiId}</span>
                  <button
                    onClick={copyUpiId}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    title="Copy UPI ID"
                  >
                    {copied ? (
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-xs text-green-600 text-center mt-2">UPI ID copied to clipboard!</p>
                )}
              </div>

              {/* UPI Apps */}
              <div>
                <p className="text-sm text-gray-500 text-center mb-4">Pay using your favorite UPI app</p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {upiApps.map((app, index) => (
                    <a
                      key={index}
                      href={app.link}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-yellow-50 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                        {app.icon}
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-600 font-medium text-center leading-tight">
                        {app.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Instructions & WhatsApp Section */}
            <div className="space-y-6">
              
              {/* Payment Steps */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
                  How to Complete Payment
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Scan QR or Use UPI ID</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Open any UPI app and scan the QR code or enter the UPI ID manually</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Enter Amount & Pay</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Enter the booking amount as discussed and complete the payment</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Take Screenshot</h3>
                      <p className="text-xs sm:text-sm text-gray-600">After successful payment, take a screenshot of the transaction</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Send on WhatsApp</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Send the screenshot via WhatsApp for instant confirmation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Confirmation */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl">Send Payment Screenshot</h3>
                    <p className="text-green-100 text-sm">For instant booking confirmation</p>
                  </div>
                </div>
                
                <p className="text-green-100 text-sm mb-6">
                  After completing your payment, send the payment screenshot on WhatsApp. 
                  Our team will verify and confirm your booking within minutes.
                </p>
                
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-white text-green-600 font-bold py-4 rounded-xl hover:bg-green-50 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Send Screenshot on WhatsApp</span>
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
                <h3 className="font-bold text-gray-900 mb-4">Need Help with Payment?</h3>
                
                <div className="space-y-3">
                  <a
                    href="tel:+917217667160"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Call / WhatsApp</p>
                      <p className="font-semibold text-gray-900 text-sm">+91 72176 67160</p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:info@mtstravelsindia.com"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email us</p>
                      <p className="font-semibold text-gray-900 text-sm">info@mtstravelsindia.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Security Badges */}
          <div className="mt-8 sm:mt-12">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-gray-700">100% Secure</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-gray-700">UPI Protected</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Instant Confirmation</span>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
