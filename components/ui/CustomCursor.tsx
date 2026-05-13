'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/80 bg-violet-300/20 md:block"
      style={{ left: position.x, top: position.y }}
    />
  );
}
