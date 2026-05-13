'use client';

import { ProjectItem } from '@/types/portfolio';
import { GlowCard } from '@/components/ui/GlowCard';

interface ProjectsProps {
  items: ProjectItem[];
}

export function Projects({ items }: ProjectsProps) {
  return (
    <section>
      <h2>Projects</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {items.map((item) => (
          <GlowCard key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <small>{item.stack.join(' · ')}</small>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
