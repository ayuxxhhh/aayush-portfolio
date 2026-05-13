'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [point, setPoint] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <span
      aria-hidden
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        borderRadius: '999px',
        pointerEvents: 'none',
        zIndex: 100,
        transform: `translate3d(${point.x - 12}px, ${point.y - 12}px, 0)`,
        border: '1px solid rgba(255,255,255,.7)',
        backdropFilter: 'blur(2px)'
      }}
    />
  );
}
