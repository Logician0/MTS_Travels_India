import { Star, Clock, UserCheck, Navigation, Shield } from 'lucide-react';

const TrustStrip = () => {
  const trustItems = [
    { icon: Star, text: '4.9★ Rating', shortText: '4.9★' },
    { icon: Clock, text: '24/7 Service', shortText: '24/7' },
    { icon: UserCheck, text: 'Pro Drivers', shortText: 'Pro' },
    { icon: Navigation, text: 'GPS Track', shortText: 'GPS' },
    { icon: Shield, text: 'No Hidden Fee', shortText: 'Safe' },
  ];

  return (
    <section className="bg-[#111827] py-4 sm:py-5 lg:py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* All screens: 5 columns horizontal layout */}
        <div className="flex justify-between items-center gap-2 sm:gap-4 lg:gap-6">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 lg:gap-3 flex-1"
              >
                {/* Icon - bigger on mobile */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center bg-[#ffc800] flex-shrink-0">
                  <IconComponent className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" />
                </div>
                {/* Text - bigger on mobile */}
                <span className="text-white text-[10px] sm:text-xs lg:text-sm font-semibold text-center sm:text-left whitespace-nowrap">
                  <span className="sm:hidden">{item.shortText}</span>
                  <span className="hidden sm:inline">{item.text}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
