'use client';

import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function useReveal() {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>('[data-reveal]');

    const animations = elements.map((el) =>
      gsap.fromTo(
        el,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%'
          }
        }
      )
    );

    return () => {
      animations.forEach((animation) => animation.scrollTrigger?.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
