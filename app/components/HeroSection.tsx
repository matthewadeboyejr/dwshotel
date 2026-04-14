'use client';

import Link from 'next/link';
import { ArrowUpRight, Play, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden -mt-20">
      {/* Video Background */}
      <video
        src="/introVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-16 lg:px-24 pb-24 md:pb-32">

        {/* Rating Pill */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit px-4 py-2 mb-6">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-white/90 text-sm font-medium tracking-wide">4.5 Star Rated · Abraka, Delta State</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
          Come Have a <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Feel of Luxury
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          The best hotel for your next vacation, staycation, honeymoon,
          business trip or just relaxation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/rooms"
            className="group px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-400 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-green-500/25"
          >
            Book Now
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>

        {/* Bottom Stats Bar */}
        <div className="flex flex-wrap gap-8 md:gap-16 mt-12 pt-8 border-t border-white/10">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
            <p className="text-white/50 text-sm mt-1">Happy Guests</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
            <p className="text-white/50 text-sm mt-1">Luxury Rooms</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">4.5</p>
            <p className="text-white/50 text-sm mt-1">Star Rating</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">24/7</p>
            <p className="text-white/50 text-sm mt-1">Room Service</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
