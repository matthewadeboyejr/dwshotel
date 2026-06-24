'use client';

import ScrollReveal from './ui/ScrollReveal';

const facilities = [
  {
    title: 'Executive Lounge',
    icon: (
      <svg className="w-12 h-12 text-[#b08b5c] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 22H2" />
        <path d="M12 22V12" />
        <path d="M12 12 3 3h18Z" />
        <path d="m19 5-7 7-7-7" />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'Private Co-Working Space',
    icon: (
      <svg className="w-12 h-12 text-[#b08b5c] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <circle cx="7" cy="12" r="2" />
        <circle cx="17" cy="12" r="2" />
      </svg>
    )
  },
  {
    title: 'Free Wifi',
    icon: (
      <svg className="w-12 h-12 text-[#b08b5c] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.5a10 10 0 0 1 14 0" />
        <path d="M8.5 16a6 6 0 0 1 7 0" />
        <path d="M2 9a15 15 0 0 1 20 0" />
        <circle cx="12" cy="19" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'Exotic Dining Room',
    icon: (
      <svg className="w-12 h-12 text-[#b08b5c] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3" />
        <path d="M5 10a7 7 0 0 1 14 0" />
        <path d="M2 14h20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z" />
        <circle cx="12" cy="2" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'Swimming Pool',
    icon: (
      <svg className="w-12 h-12 text-[#b08b5c] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2v17c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5V8" />
        <path d="M18 2v17c0 1.5-1 2.5-2.5 2.5s-2.5-1-2.5-2.5V8" />
        <path d="M6 6h12" />
        <path d="M6 10h12" />
        <path d="M6 14h12" />
      </svg>
    )
  },
  {
    title: 'Parking Space',
    icon: (
      <svg className="w-12 h-12 text-[#b08b5c] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="8" rx="2" />
        <path d="M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
        <circle cx="7" cy="15" r="1.5" fill="currentColor" />
        <circle cx="17" cy="15" r="1.5" fill="currentColor" />
        <path d="M4 19v2" />
        <path d="M20 19v2" />
      </svg>
    )
  }
];

export default function HotelFacilities() {
  return (
    <section className="relative w-full bg-gray-50 dark:bg-zinc-950 py-20 lg:py-28 overflow-hidden">
      {/* Background Architectural Building Schematic (Left) */}
      <div className="absolute left-0 bottom-0 w-[280px] h-[340px] sm:w-[350px] sm:h-[400px] opacity-[0.08] dark:opacity-[0.03] pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-600 dark:text-zinc-400">
          <line x1="10" y1="230" x2="190" y2="230" stroke="currentColor" strokeWidth="0.75" />
          <line x1="20" y1="230" x2="20" y2="50" stroke="currentColor" strokeWidth="0.75" />
          <line x1="60" y1="230" x2="60" y2="30" stroke="currentColor" strokeWidth="0.75" />
          <line x1="120" y1="230" x2="120" y2="60" stroke="currentColor" strokeWidth="0.75" />
          <line x1="170" y1="230" x2="170" y2="90" stroke="currentColor" strokeWidth="0.75" />

          <line x1="20" y1="50" x2="60" y2="30" stroke="currentColor" strokeWidth="0.75" />
          <line x1="60" y1="30" x2="120" y2="60" stroke="currentColor" strokeWidth="0.75" />
          <line x1="120" y1="60" x2="170" y2="90" stroke="currentColor" strokeWidth="0.75" />

          <line x1="20" y1="200" x2="170" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="20" y1="170" x2="170" y2="170" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="20" y1="140" x2="170" y2="140" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="20" y1="110" x2="170" y2="110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="20" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />

          <rect x="30" y="205" width="12" height="16" stroke="currentColor" strokeWidth="0.5" />
          <rect x="75" y="205" width="12" height="16" stroke="currentColor" strokeWidth="0.5" />
          <rect x="135" y="205" width="12" height="16" stroke="currentColor" strokeWidth="0.5" />

          <rect x="30" y="175" width="12" height="16" stroke="currentColor" strokeWidth="0.5" />
          <rect x="75" y="175" width="12" height="16" stroke="currentColor" strokeWidth="0.5" />
          <rect x="135" y="175" width="12" height="16" stroke="currentColor" strokeWidth="0.5" />

          <rect x="30" y="145" width="12" height="16" stroke="currentColor" strokeWidth="0.5" />
          <rect x="75" y="145" width="12" height="16" stroke="currentColor" strokeWidth="0.5" />
          <rect x="135" y="145" width="12" height="16" stroke="currentColor" strokeWidth="0.5" />

          <rect x="30" y="115" width="12" height="16" stroke="currentColor" strokeWidth="0.5" />
          <rect x="75" y="115" width="12" height="16" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <ScrollReveal className="flex flex-col items-center justify-center text-center mb-16 space-y-4" animation="fade-in-up">
          <div className="flex items-center gap-2 text-[#b08b5c] font-semibold tracking-widest text-sm uppercase">
            <svg className="w-8 h-3 text-[#b08b5c]/70" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0,5 Q10,0 20,5 T40,5" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl  text-zinc-900 dark:text-white font-serif">
            Hotel Facilities
          </h2>
        </ScrollReveal>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => {
            return (
              <ScrollReveal
                key={idx}
                animation="fade-in-up"
                delay={idx * 100}
                className="group relative bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 border border-[#b08b5c]/40 px-8 md:px-12 py-8 flex flex-col items-center justify-center text-center min-h-[220px] transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#EAD8C6] dark:bg-zinc-700 group-hover:bg-[#b08b5c] rounded-b-md transition-colors duration-300" />

                {/* Icon Container */}
                <div className="mb-6 flex items-center justify-center h-16 w-16 text-[#b08b5c]">
                  {facility.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-medium text-zinc-900 dark:text-zinc-100 font-serif tracking-wide group-hover:text-[#b08b5c] transition-colors duration-300">
                  {facility.title}
                </h3>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
