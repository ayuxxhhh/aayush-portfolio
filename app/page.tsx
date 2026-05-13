'use client';

import { useEffect } from 'react';
import { useReveal } from '@/hooks/useReveal';

const cards = [
  'Growth campaigns',
  'Creative strategy',
  'Performance ads',
  'Funnel optimization'
];

export default function HomePage() {
  useReveal();

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.glow-card');
    const onMove = (event: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', `${x}%`);
        card.style.setProperty('--my', `${y}%`);
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-20">
      <header className="space-y-6">
        <p className="inline-block rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.25em] text-violet-200">
          Digital Growth Marketer
        </p>
        <h1 data-reveal className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
          Building premium web experiences with motion and strategy.
        </h1>
        <p data-reveal className="max-w-2xl text-lg text-slate-300">
          Next.js + Tailwind + GSAP + Three.js stack wired for smooth, cinematic portfolio storytelling.
        </p>
      </header>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card}
            data-reveal
            className="glow-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 glow-layer" />
            <h2 className="relative z-10 text-2xl font-medium text-white">{card}</h2>
            <p className="relative z-10 mt-3 text-slate-300">
              Hover-reactive glow and subtle kinetic interactions for premium UX.
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
