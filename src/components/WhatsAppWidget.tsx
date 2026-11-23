import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();

  // 🚨 HIDE WIDGET ON ADMIN PAGE
  // Check if the current URL contains '/admin'
  if (location.pathname.includes('/admin')) {
    return null; // Return nothing, completely hiding the widget
  }

  // Phone number without the '+' symbol
  const phoneNumber = "917217667160";

  // Show a little "Need help?" tooltip after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Redirect to WhatsApp with the message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    // Reset state
    setMessage('');
    setIsOpen(false);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      
      {/* 🚀 The Open Chat Window */}
      <div 
        className={`bg-white w-[320px] sm:w-[350px] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 origin-bottom-right mb-4 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none absolute bottom-16'
        }`}
      >
        {/* Header */}
        <div className="bg-[#075E54] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                <img src="/images/brand/favicon.png" alt="MTS" className="w-full h-full object-contain rounded-full" onError={(e) => e.currentTarget.src = 'https://ui-avatars.com/api/?name=MTS&background=111827&color=ffc800'} />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075E54] rounded-full"></span>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">MTS Travels India</h3>
              <p className="text-emerald-100 text-[10px]">Typically replies instantly</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="bg-[#E5DDD5] p-4 h-[250px] overflow-y-auto flex flex-col gap-3 relative">
          {/* Subtle WhatsApp-style background pattern (optional) */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative z-10">
            <p className="text-sm text-gray-800">Hi there! 👋</p>
            <p className="text-sm text-gray-800 mt-1">Need help booking a cab or tour package? Let us know where you want to go!</p>
            <span className="text-[9px] text-gray-400 block text-right mt-1">Just now</span>
          </div>
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 bg-white flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] text-gray-800"
          />
          <button 
            type="submit"
            disabled={!message.trim()}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${message.trim() ? 'bg-[#075E54] text-white hover:bg-[#128C7E]' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
          >
            <Send className="w-4 h-4 ml-1" />
          </button>
        </form>
      </div>

      {/* 🚀 Tooltip & Floating Button */}
      <div className="flex items-center gap-3">
        {showTooltip && !isOpen && (
          <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-sm font-semibold text-gray-700 animate-fade-in hidden sm:block">
            Need a ride? Chat with us! 👋
          </div>
        )}
        
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen ? 'bg-gray-800 text-white rotate-90' : 'bg-[#25D366] text-white hover:bg-[#128C7E]'}`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            // Custom WhatsApp SVG icon
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.638-1.653-1.935-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          )}
        </button>
      </div>

    </div>
  );
};

export default WhatsAppWidget;