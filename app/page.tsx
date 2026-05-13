'use client';

import { useLayoutEffect, useRef } from 'react';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ExperienceItem, PortfolioHeroContent, ProjectItem } from '@/types/portfolio';

const heroContent: PortfolioHeroContent = {
  eyebrow: 'Brand Strategist · Story Systems',
  title: 'Narrative-led growth for modern products.',
  subtitle: 'Maintainable sections with animation-safe composition and clear ownership.',
  cta: { label: 'See projects', href: '#projects' }
};

const experience: ExperienceItem[] = [
  { id: 'exp-1', company: 'EduBridge', role: 'Marketing Lead', period: '2023—2025', summary: 'Led GTM and comms.', highlights: ['GTM', 'Social', 'Partnerships'] }
];

const projects: ProjectItem[] = [
  { id: 'proj-1', title: 'Scaling Content Engine', description: 'SEO and social pipeline for course launches.', stack: ['Notion', 'Meta Ads', 'GA4'] }
];

function SceneBackground() {
  return <div aria-hidden style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'linear-gradient(#0f1020, #05050d)' }} />;
}

export default function Page() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let cleanup: (() => void) | undefined;

    (async () => {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default || gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const sections = rootRef.current?.querySelectorAll<HTMLElement>('[data-section]') ?? [];
      const triggers = Array.from(sections).map((section) => ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        toggleClass: { targets: section, className: 'is-active' }
      }));

      cleanup = () => triggers.forEach((trigger) => trigger.kill());
    })();

    return () => cleanup?.();
  }, []);

  return (
    <>
      <SceneBackground />
      <CustomCursor />
      <main ref={rootRef} style={{ display: 'grid', gap: '8rem', padding: '4rem 1.25rem 8rem' }}>
        <div data-section><Hero content={heroContent} /></div>
        <div data-section><Experience items={experience} /></div>
        <div data-section id="projects"><Projects items={projects} /></div>
      </main>
    </>
  );
}
