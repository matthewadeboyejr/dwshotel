'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ui/ScrollReveal';

export default function CommonQueriesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const queries = [
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes, we offer group discounts for bookings of 5 rooms or more. Please contact our reservations team for more information.'
    },
    {
      question: 'How can I make a reservation?',
      answer: 'You can make a reservation directly through our website or by calling our reservations desk.'
    },
    {
      question: 'Is there a cancellation policy?',
      answer: 'Yes, cancellations made 24 hours prior to check-in are free of charge. Late cancellations may incur a fee.'
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes, we provide complimentary secure parking for all our guests.'
    },
    {
      question: 'What is the check-in/check-out time?',
      answer: 'Check-in is from 2:00 PM, and check-out is until 12:00 PM.'
    },
    {
      question: 'What types of accommodations do you offer?',
      answer: 'We offer a range of accommodations from Deluxe Rooms to Royal Suites and Penthouses.'
    }
  ];

  return (
    <section className="w-full bg-white dark:bg-zinc-950 py-20 lg:py-28 overflow-hidden">
      <div className="mx-4 md:mx-20 max-w-7xl lg:mx-auto lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Header & Contact Support Card */}
          <ScrollReveal className="lg:col-span-5 space-y-8" animation="fade-in-up">
            <div className="space-y-4">
              {/* Category Tag */}
              <div className="flex items-center gap-2 text-[#b08b5c] font-semibold tracking-widest text-sm uppercase">
                <svg className="w-8 h-3 text-[#b08b5c]/70" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M0,5 Q10,0 20,5 T40,5" strokeLinecap="round" />
                </svg>
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl  text-zinc-900 dark:text-white leading-[1.15] font-serif">
                Frequently Asked <br className="hidden md:block" />
                Questions
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-md leading-relaxed">
                Can't find the answers you're looking for? Reach out to our customer support team for direct, personalized assistance.
              </p>
            </div>

            {/* Float Card */}
            <div className="bg-zinc-50 dark:bg-zinc-900/40 p-8    relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#b08b5c]/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 font-serif">
                Need direct help?
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
                Our support team is available 24/7 to answer your queries and assist with room bookings.
              </p>
              <Link href="/contact">
                <button className="w-full py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 text-sm font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer">
                  Contact Support
                  <span className="transform translate-x-0 group-hover/btn:translate-x-1.5 transition-transform duration-300 text-base">→</span>
                </button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Side: Minimalist Borderless Accordion */}
          <ScrollReveal className="lg:col-span-7 space-y-2 lg:pl-4" animation="fade-in-up" delay={200}>
            {queries.map((query, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border-b border-gray-200 dark:border-zinc-900 py-6 transition-all duration-300 ${isOpen ? 'pb-8' : 'pb-6'
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                  >
                    <span className={`text-lg md:text-xl font-medium tracking-wide transition-colors duration-300 font-serif ${isOpen ? 'text-[#b08b5c]' : 'text-zinc-800 dark:text-zinc-200 group-hover:text-[#b08b5c]'
                      }`}>
                      {query.question}
                    </span>
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-900/60 text-zinc-500 transition-all duration-300 ${isOpen ? 'rotate-180 bg-[#b08b5c]/10 text-[#b08b5c]' : 'group-hover:text-[#b08b5c] group-hover:bg-[#b08b5c]/5'
                      }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-350 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl pl-1">
                      {query.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
