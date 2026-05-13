'use client';

import { useRef } from 'react';
import { useHeadingReveal } from '@/hooks/useHeadingReveal';
import { PortfolioHeroContent } from '@/types/portfolio';

interface HeroProps {
  content: PortfolioHeroContent;
}

export function Hero({ content }: HeroProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useHeadingReveal(headingRef);

  return (
    <section style={{ minHeight: '80vh', display: 'grid', alignItems: 'center' }}>
      <div>
        <p>{content.eyebrow}</p>
        <h1 ref={headingRef}>
          {content.title.split(' ').map((word) => (
            <span key={word} data-reveal-word style={{ display: 'inline-block', marginRight: '0.35ch' }}>{word}</span>
          ))}
        </h1>
        <p>{content.subtitle}</p>
        <a href={content.cta.href}>{content.cta.label}</a>
      </div>
    </section>
  );
}
