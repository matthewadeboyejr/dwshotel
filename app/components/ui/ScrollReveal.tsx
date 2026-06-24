'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'zoom-in';
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 800,
  animation = 'fade-in-up',
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px', // triggers slightly before fully entering view
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationStyles = {
    'fade-in': {
      initial: 'opacity-0',
      active: 'opacity-100 transition-opacity',
    },
    'fade-in-up': {
      initial: 'opacity-0 translate-y-8',
      active: 'opacity-100 translate-y-0 transition-all',
    },
    'fade-in-down': {
      initial: 'opacity-0 -translate-y-8',
      active: 'opacity-100 translate-y-0 transition-all',
    },
    'fade-in-left': {
      initial: 'opacity-0 -translate-x-8',
      active: 'opacity-100 translate-x-0 transition-all',
    },
    'fade-in-right': {
      initial: 'opacity-0 translate-x-8',
      active: 'opacity-100 translate-x-0 transition-all',
    },
    'zoom-in': {
      initial: 'opacity-0 scale-95',
      active: 'opacity-100 scale-100 transition-all',
    },
  };

  const anim = animationStyles[animation];

  const style: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? anim.active : anim.initial}`}
      style={style}
    >
      {children}
    </div>
  );
}
