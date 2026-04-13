import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { cases, capabilities } from './portfolioData.js';
import './styles.css';

const caseMap = Object.fromEntries(cases.map((item) => [item.id, item]));

function useRoute() {
  const getRoute = () => window.location.hash.replace(/^#\/?/, '') || 'home';
  const [route, setRoute] = useState(getRoute);
  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

function LinkButton({ href, children, variant = 'dark', external }) {
  const props = external ? { target: '_blank', rel: 'noreferrer' } : {};
  return <a className={`btn ${variant}`} href={href} {...props}>{children}</a>;
}

function Header({ route }) {
  const isCurrent = (key) => route === key || route.startsWith(`${key}/`);
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#/home">Ayush Tiwari</a>
        <div className="nav-links">
          <a aria-current={isCurrent('home') ? 'page' : undefined} href="#/home">Home</a>
          <a aria-current={isCurrent('work') ? 'page' : undefined} href="#/work">Work</a>
          <a aria-current={isCurrent('contact') ? 'page' : undefined} href="#/contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function CaseCard({ item }) {
  return (
    <article className="case-card">
      <span className="tag" style={{ background: 'var(--ink)', color: '#fff', borderColor: 'var(--ink)' }}>{item.label}</span>
      <h3>{item.client}</h3>
      <p>{item.summary}</p>
      <div className="tags">
        {item.metrics.slice(0, 3).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <LinkButton href={`#/case/${item.id}`} variant="secondary">View Details</LinkButton>
      </div>
    </article>
  );
}

function Home() {
  return (
    <main className="route-view">
      <section className="hero">
        <div className="shell">
          <h1>Crafting clear, compelling stories for complex brands.</h1>
          <p className="lede">
            Hi, I'm Ayush. I'm a communications specialist and brand strategist with over five years of experience. From B2B tech and enterprise SaaS to fast-growing education platforms, I bridge the gap between technical features and human narratives.
          </p>
          <div className="hero-actions">
            <LinkButton href="#/work" variant="dark">View Selected Work</LinkButton>
            <LinkButton href="#/contact" variant="secondary">Get in Touch</LinkButton>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="shell">
          <h2>Featured Work</h2>
          <p style={{ color: 'var(--soft)', marginTop: '8px' }}>A selection of campaigns, GTM strategies, and brand communications.</p>
          <div className="case-grid">
            {cases.slice(0, 3).map((item) => <CaseCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>Core Capabilities</h2>
          <div className="case-grid" style={{ marginTop: '32px' }}>
            {capabilities.map(([title, text]) => (
              <div key={title} style={{ padding: '24px', border: '1px solid var(--line)', borderRadius: 'var(--radius)' }}>
                <h3 style={{ marginTop: 0 }}>{title}</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Work() {
  return (
    <main className="route-view">
      <section className="hero" style={{ paddingBottom: '40px' }}>
        <div className="shell">
          <h1>Work & Proof</h1>
          <p className="lede">Case studies, strategies, and the raw documents that powered them.</p>
        </div>
      </section>
      <section className="section alt">
        <div className="shell">
          <div className="case-grid" style={{ marginTop: 0 }}>
            {cases.map((item) => <CaseCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

function CaseDetail({ id }) {
  const item = caseMap[id] || cases[0];
  return (
    <main className="route-view">
      <section className="hero">
        <div className="shell">
          <span className="tag" style={{ marginBottom: '16px', display: 'inline-block' }}>{item.client}</span>
          <h1>{item.title}</h1>
          <p className="lede">{item.role}</p>
          <div className="hero-actions">
            <LinkButton href="#/work" variant="secondary">Back to Work</LinkButton>
            {item.links[0] && <LinkButton href={item.links[0].href} variant="dark" external={!item.links[0].local}>{item.links[0].label}</LinkButton>}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="shell case-detail-layout">
          <div>
            <h2 style={{ marginBottom: '16px' }}>The Challenge</h2>
            <p style={{ marginBottom: '40px' }}>{item.challenge}</p>
            
            <h2 style={{ marginBottom: '16px' }}>The Approach</h2>
            <ul style={{ marginBottom: '40px', paddingLeft: '20px', color: 'var(--text)' }}>
              {item.work.map((line) => <li key={line} style={{ marginBottom: '12px' }}>{line}</li>)}
            </ul>

            <h2 style={{ marginBottom: '16px' }}>The Impact</h2>
            <p>{item.impact}</p>
          </div>
          <div className="source-card">
            <h3>Source Files</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--soft)' }}>Links and documents related to this project.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
              {item.links.map((link) => (
                <a key={link.label} href={link.href} target={link.local ? undefined : '_blank'} rel={link.local ? undefined : 'noreferrer'} className="source-link">
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main className="route-view">
      <section className="hero">
        <div className="shell">
          <h1>Let's build something.</h1>
          <p className="lede">Whether you need brand strategy, product storytelling, or a communications overhaul, I'm ready to help you shape the narrative.</p>
          
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="mailto:ayushtiwari402@gmail.com" style={{ fontSize: '1.2rem', fontWeight: '600' }}>ayushtiwari402@gmail.com</a>
            <a href="tel:+917977575765" style={{ fontSize: '1.2rem', fontWeight: '600' }}>+91 79775 75765</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div style={{ fontWeight: '700', color: 'var(--ink)' }}>Ayush Tiwari</div>
        <div style={{ fontSize: '0.9rem', marginTop: '4px' }}>Communications & Brand Strategist based in Mumbai</div>
        <div className="footer-links">
          <a href="#/home">Home</a>
          <a href="#/work">Work</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const route = useRoute();
  let view = <Home />;
  if (route === 'work') view = <Work />;
  if (route.startsWith('case/')) view = <CaseDetail id={route.split('/')[1]} />;
  if (route === 'contact') view = <Contact />;
  return (
    <div className="app-frame">
      <Header route={route} />
      <div id="content" key={route}>{view}</div>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
