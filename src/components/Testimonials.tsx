import { useState } from 'react';
import { Play, X, Star, MapPin } from 'lucide-react';

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      thumbnail: '/images/testimonial-1.webp',
      videoId: 'dQw4w9WgXcQ',
      quote: 'Excellent service for our Char Dham trip!',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      thumbnail: '/images/testimonial-2.webp',
      videoId: 'dQw4w9WgXcQ',
      quote: 'Professional drivers and clean vehicles.',
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Bangalore',
      rating: 5,
      thumbnail: '/images/testimonial-3.webp',
      videoId: 'dQw4w9WgXcQ',
      quote: 'Best taxi service in Dehradun!',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="floating-shape w-48 md:w-72 h-48 md:h-72 bg-[#ffc800] -top-24 md:-top-36 -right-24 md:-right-36" />
      <div className="floating-shape w-32 md:w-56 h-32 md:h-56 bg-[#111827] -bottom-16 md:-bottom-28 -left-16 md:-left-28" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#ffc800]/10 text-[#111827] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-3 sm:mb-4">
            What Our <span className="text-[#ffc800]">Customers Say</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto px-4">
            Hear from our satisfied customers about their travel experiences with MTS Travels.
          </p>
        </div>

        {/* Video Testimonials Grid - Always 3 columns */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Video Thumbnail - Vertical Aspect Ratio */}
              <div className="relative aspect-[9/14] sm:aspect-[9/15] md:aspect-[9/16] overflow-hidden">
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Play Button */}
                <button
                  onClick={() => setActiveVideo(testimonial.videoId)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#ffc800] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#111827] ml-0.5" fill="currentColor" />
                  </div>
                </button>

                {/* Rating Badge */}
                <div className="absolute top-1.5 sm:top-2 md:top-3 right-1.5 sm:right-2 md:right-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1 flex items-center gap-0.5 sm:gap-1">
                    <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-[#ffc800]" fill="currentColor" />
                    <span className="text-[8px] sm:text-[9px] md:text-xs font-bold text-[#111827]">{testimonial.rating}</span>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="absolute bottom-1.5 sm:bottom-2 md:bottom-4 left-1.5 sm:left-2 md:left-4 right-1.5 sm:right-2 md:right-4">
                  <h4 className="text-white font-bold text-[8px] sm:text-[9px] md:text-sm lg:text-base truncate">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-0.5 sm:gap-1 text-white/80">
                    <MapPin className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
                    <span className="text-[7px] sm:text-[8px] md:text-xs">{testimonial.location}</span>
                  </div>
                  <p className="text-white/70 text-[6px] sm:text-[7px] md:text-xs mt-0.5 sm:mt-1 line-clamp-2 hidden md:block">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[9/16]">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-[#ffc800] transition-colors"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full rounded-xl sm:rounded-2xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
