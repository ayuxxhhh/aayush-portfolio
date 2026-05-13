'use client';

import { PropsWithChildren } from 'react';

interface GlowCardProps extends PropsWithChildren {
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <article className={className} style={{
      transform: 'translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0)',
      transition: 'transform 160ms ease-out',
      border: '1px solid rgba(255,255,255,.16)',
      borderRadius: '1rem',
      padding: '1.25rem',
      background: 'radial-gradient(circle at top, rgba(120,119,198,0.25), rgba(0,0,0,0.7))'
    }}>
      {children}
    </article>
  );
}
