'use client';

import { RefObject, useEffect } from 'react';

export function useParallaxMouse(ref: RefObject<HTMLElement | null>, intensity = 12) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5) * intensity;
      const y = (event.clientY / innerHeight - 0.5) * intensity;
      node.style.setProperty('--parallax-x', `${x.toFixed(2)}px`);
      node.style.setProperty('--parallax-y', `${y.toFixed(2)}px`);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [ref, intensity]);
}
