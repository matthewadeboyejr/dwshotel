'use client';

import Image from 'next/image';
import ScrollReveal from './ui/ScrollReveal';

export default function AboutOverview() {
  return (
    <section className="relative w-full bg-gray-50 dark:bg-zinc-950 py-20 lg:py-28 overflow-hidden">
      {/* Decorative Wavy Ripple Background */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none opacity-[0.4] dark:opacity-[0.15] z-0 overflow-hidden">
        <svg className="w-full h-full text-zinc-200 dark:text-zinc-800" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="450" cy="200" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="450" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
          <circle cx="450" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="450" cy="200" r="220" stroke="currentColor" strokeWidth="1" />
          <circle cx="450" cy="200" r="260" stroke="currentColor" strokeWidth="1" />
          <circle cx="450" cy="200" r="300" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="450" cy="200" r="340" stroke="currentColor" strokeWidth="1" />
          <circle cx="450" cy="200" r="380" stroke="currentColor" strokeWidth="1" />
          <circle cx="450" cy="200" r="420" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="450" cy="200" r="460" stroke="currentColor" strokeWidth="1" />
          <circle cx="450" cy="200" r="500" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-4 md:mx- max-w-7xl lg:mx-auto lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: Overlapping Images */}
        <ScrollReveal className="relative w-full h-[400px] sm:h-[480px] md:h-[550px]" animation="fade-in-up">
          {/* Vertical Brown Accent Bar */}
          <div className="absolute left-0 top-[12%] w-5 h-[68%] bg-[#b08b5c]  z-10" />

          {/* Underneath Back Image */}
          <div className="absolute left-7 top-0 w-[74%] h-[82%] overflow-hidden shadow-lg border border-black/5 dark:border-white/5">
            <Image
              src="/superior-home.jpeg"
              alt="Superior luxury hotel interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Overlapping Front Image */}
          <div className="absolute right-0 bottom-0 w-[62%] h-[58%]  overflow-hidden border-8 border-white dark:border-zinc-950 shadow-2xl">
            <Image
              src="/deluxe-home.jpeg"
              alt="Deluxe comfort stay"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </ScrollReveal>

        {/* Right Side: Content */}
        <ScrollReveal className="space-y-6 md:space-y-8 lg:pl-6" animation="fade-in-up" delay={200}>
          {/* Category Pill Tag */}
          <div className="flex items-center gap-2 text-[#b08b5c] font-semibold tracking-widest text-sm uppercase">
            <span>D.W.S. Hotel</span>
            <svg className="w-8 h-3 text-[#b08b5c]/70" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0,5 Q10,0 20,5 T40,5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-[1.15] font-serif">
            You Home Away<br />
            From Home.
          </h2>

          {/* Body Paragraphs */}
          <div className="space-y-4 md:space-y-6 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed font-sans ">
            <p>
              Welcome to DWS Hotel, where hospitality meets elegance. Since our inception, we have been dedicated to providing an exceptional experience for travelers seeking comfort, style, and personalized service.
            </p>
            <p>
              Located in the heart of Delta State, our hotel serves as a sanctuary for both leisure and business travelers. Our beautifully designed rooms and serene environment create a haven of comfort, where we consistently go above and beyond to exceed our guests' expectations.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
