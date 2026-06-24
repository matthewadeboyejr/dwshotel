'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: '/royal-home.jpeg',
    title: 'Royal Luxury Suite',
  },
  {
    url: '/executive-home.jpeg',
    title: 'Executive Comfort Suite',
  },
  {
    url: '/deluxe-home.jpeg',
    title: 'Deluxe Stay Suite',
  },
  {
    url: '/superior-home.jpeg',
    title: 'Superior Suite Room',
  },
  {
    url: '/business-home.jpeg',
    title: 'Business Suite Room',
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Auto-advance every 6 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden -mt-20 group">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.url}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-0' : 'opacity-0 z-0'
                }`}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'
                  }`}
              />
            </div>
          );
        })}
      </div>

      {/* Dark Overlay Layer for Text Readability */}
      <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />

      {/* Centered Write-Up Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl space-y-6 animate-fade-in-up">
          {/* Decorative Tag */}
          <div className="flex items-center justify-center gap-2 text-[#b08b5c] font-semibold tracking-widest text-xs md:text-sm uppercase">
            <svg className="w-8 h-3 text-[#b08b5c]" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0,5 Q10,0 20,5 T40,5" strokeLinecap="round" />
            </svg>
            <span>Welcome to DWS Hotel</span>
            <svg className="w-8 h-3 text-[#b08b5c]/70" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0,5 Q10,0 20,5 T40,5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight font-bold tracking-wide">
            Where Luxury <br className="sm:hidden" /> Meets Serenity
          </h1>

          {/* Description */}
          {/*   <p className="text-zinc-200 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Experience the warmth of authentic Nigerian hospitality combined with modern luxury in the heart of Delta State.
          </p> */}

          {/* Button */}
          {/*   <div className="pt-6">
            <Link href="/rooms">
              <span className="inline-flex px-8 py-4 bg-[#b08b5c] hover:bg-[#967348] text-white font-bold text-sm rounded-full tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-[#b08b5c]/25 transform hover:-translate-y-0.5 items-center gap-2 mx-auto cursor-pointer">
                Explore Our Suites
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div> */}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-25 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-25 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-6 md:right-16 lg:right-24 z-25 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
              ? 'w-8 bg-white'
              : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-25 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

