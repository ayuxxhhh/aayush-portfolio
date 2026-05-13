import Link from 'next/link';
import { notFound } from 'next/navigation';
import { experienceTimeline, projects, ventures } from '@/data/portfolio';

const allCases = [...experienceTimeline, ...projects, ...ventures];

export function generateStaticParams() {
  return allCases.map((entry) => ({ id: entry.id }));
}

export const dynamicParams = false;

export default function CasePage({ params }: { params: { id: string } }) {
  const item = allCases.find((entry) => entry.id === params.id);
  if (!item) return notFound();

  const details = 'work' in item ? item.work : item.highlights;
  const title = 'organization' in item ? item.organization : item.name;
  const subtitle = 'role' in item ? item.role : item.label;
  const description = 'challenge' in item ? item.challenge : item.summary;

  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-14">
      <Link href="/#work" className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">← Back to work</Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{title}</h1>
      <p className="mt-2 text-slate-500">{subtitle}</p>
      <p className="mt-6">{description}</p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">Work Delivered</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        {details.map((point) => <li key={point}>{point}</li>)}
      </ul>
    </main>
  );
}
