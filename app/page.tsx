import Link from 'next/link';
import { cases, capabilities, freelanceCases } from '@/src/portfolioData';

function CaseCard({ item, category }: { item: any; category: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">{item.label}</span>
        <span className="rounded-full border border-slate-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">{category}</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{item.client}</h3>
      <p className="mt-2 text-sm">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.metrics.slice(0, 3).map((m: string) => <span key={m} className="rounded-full bg-slate-100 px-3 py-1 text-xs">{m}</span>)}
      </div>
      <Link href={`/case/${item.id}`} className="mt-5 inline-flex rounded-full border border-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-900">
        View Details
      </Link>
    </article>
  );
}

export default function HomePage() {
  return (
    <main id="home" className="mx-auto max-w-6xl px-6 pb-20 pt-16">
      <section className="py-12">
        <p className="mb-4 inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-xs uppercase tracking-[0.16em]">Digital Strategy • Communications</p>
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-900">Scrollytelling portfolio for GTM strategy, content systems, and campaign execution.</h1>
      </section>

      <section id="work" className="py-12">
        <h2 className="text-3xl font-semibold text-slate-900">Selected Work</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {cases.map((item) => <CaseCard key={item.id} item={item} category="Experience" />)}
          {freelanceCases.slice(0, 4).map((item) => <CaseCard key={item.id} item={item} category="Freelance" />)}
        </div>
      </section>

      <section id="capabilities" className="py-12">
        <h2 className="text-3xl font-semibold text-slate-900">Capabilities</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {capabilities.map(([title, desc]) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="py-12">
        <h2 className="text-3xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-3 text-sm">Open to full-time and consulting roles in digital strategy, marketing communications, and content architecture.</p>
      </section>
    </main>
  );
}
