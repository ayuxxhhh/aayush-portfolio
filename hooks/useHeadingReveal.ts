'use client';

import { RefObject, useLayoutEffect } from 'react';

export function useHeadingReveal(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || typeof window === 'undefined') return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default || gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const words = node.querySelectorAll('[data-reveal-word]');
      if (!words.length) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: node,
          start: 'top 80%',
          once: true
        }
      });

      timeline.fromTo(
        words,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: 'power3.out' }
      );

      cleanup = () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    })();

    return () => cleanup?.();
  }, [ref]);
}
