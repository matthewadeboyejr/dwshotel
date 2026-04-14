'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-50 sticky top-0 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-bold text-foreground">
              <Image src="/logo.png" alt="Dwshotel Logo" width={100} height={100} className="w-auto h-12" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link href="/rooms" className="text-muted-foreground hover:text-foreground transition-colors">Rooms</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg px-4 pb-8 space-y-4 flex flex-col items-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground text-lg py-2">Home</Link>
          <Link href="/rooms" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground text-lg py-2">Rooms</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground text-lg py-2">About</Link>
          <Link href="/rooms" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground text-lg py-2">Online booking</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground text-lg py-2">Contact</Link>

          <div className="flex flex-col w-full space-y-3 pt-4 border-t border-gray-100">
            <div className="flex justify-center">
              <ModeToggle />
            </div>
            <button className="w-full px-6 py-3  bg-black text-white rounded-full hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
