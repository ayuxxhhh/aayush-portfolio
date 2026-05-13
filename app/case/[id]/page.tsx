import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cases, freelanceCases } from '@/src/portfolioData';

const allCases = [...cases, ...freelanceCases];

export default function CasePage({ params }: { params: { id: string } }) {
  const item = allCases.find((entry) => entry.id === params.id);
  if (!item) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-14">
      <Link href="/#work" className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">← Back to work</Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{item.client}</h1>
      <p className="mt-2 text-slate-500">{item.role}</p>
      <p className="mt-6">{item.challenge}</p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-900">Work Delivered</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        {item.work.map((point: string) => <li key={point}>{point}</li>)}
      </ul>
    </main>
  );
}
