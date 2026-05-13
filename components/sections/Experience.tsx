'use client';

import { useRef } from 'react';
import { ExperienceItem } from '@/types/portfolio';
import { GlowCard } from '@/components/ui/GlowCard';
import { useParallaxMouse } from '@/hooks/useParallaxMouse';

interface ExperienceProps {
  items: ExperienceItem[];
}

export function Experience({ items }: ExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useParallaxMouse(sectionRef, 8);

  return (
    <section ref={sectionRef}>
      <h2>Experience</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {items.map((item) => (
          <GlowCard key={item.id}>
            <h3>{item.role} · {item.company}</h3>
            <p>{item.period}</p>
            <p>{item.summary}</p>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
