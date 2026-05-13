export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex min-h-20 w-full max-w-6xl items-center justify-between px-6" aria-label="Primary navigation">
        <a href="#home" className="text-sm font-extrabold uppercase tracking-[0.2em] text-slate-900">Ayush Tiwari</a>
        <div className="flex gap-6 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          <a href="#home" className="hover:text-slate-900">Home</a>
          <a href="#work" className="hover:text-slate-900">Work</a>
          <a href="#capabilities" className="hover:text-slate-900">Capabilities</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </nav>
    </header>
  );
}
