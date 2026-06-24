'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={`w-full z-50 sticky top-0 transition-all duration-300 ${isScrolled
      ? 'bg-black border-b border-zinc-800 text-white'
      : 'bg-transparent border-b border-transparent text-white'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image src="/logo.png" alt="Dwshotel Logo" width={100} height={100} className="w-auto h-12 brightness-0 invert" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                    active
                      ? 'text-[#b08b5c]'
                      : 'text-white hover:text-white'
                  } after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#b08b5c] after:transition-transform after:duration-300 ${
                    active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100 after:origin-center'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/rooms" className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors text-sm font-semibold">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-zinc-800 shadow-lg px-4 pb-8 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg py-2 transition-colors duration-300 ${
                  active ? 'text-[#b08b5c] font-semibold' : 'text-white hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/rooms"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-white text-lg py-2"
          >
            Online booking
          </Link>

          <div className="flex flex-col w-full space-y-3 pt-4 border-t border-zinc-800">
            <Link href="/rooms" onClick={() => setIsOpen(false)} className="w-full px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors text-center font-semibold">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
