import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { cases, capabilities, freelanceCases, quickTabs } from './portfolioData.js';
import './styles.css';

const caseMap = Object.fromEntries([...cases, ...freelanceCases].map((item) => [item.id, item]));

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

const mediaIcon = {
  web: '↗',
  pdf: 'PDF',
  doc: 'DOC',
  image: 'IMG',
  video: 'VID',
  note: 'TXT',
  bundle: 'DRV'
};

function LinkButton({ href, children, variant = 'dark' }) {
  return <a className={`btn ${variant}`} href={href} target="_blank" rel="noreferrer">{children}</a>;
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

function AssetPreview({ asset }) {
  const content = (
    <>
      <div className="mini-asset-top">
        <span>{mediaIcon[asset.type] || '↗'} {asset.type}</span>
      </div>
      <strong>{asset.label}</strong>
      <small>{asset.note}</small>
    </>
  );

  if (asset.href) {
    return (
      <a href={asset.href} target="_blank" rel="noreferrer" className="mini-asset-card">
        {content}
      </a>
    );
  }

  return <div className="mini-asset-card static">{content}</div>;
}

function CaseCard({ item, category = 'Experience' }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="case-card">
      <div className="card-meta-row">
        <span className="tag solid">{item.label}</span>
        <span className="meta-pill">{category}</span>
      </div>
      <h3>{item.client}</h3>
      <p>{item.summary}</p>
      <div className="tags">
        {item.metrics.slice(0, 3).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>

      <div className="card-actions-row">
        <a className="btn secondary" href={`#/case/${item.id}`}>View Details</a>
        <button type="button" className="btn ghost" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Hide Assets' : 'Preview Assets'}
        </button>
      </div>

      {expanded && (
        <div className="mini-asset-grid">
          {(item.assets || []).slice(0, 4).map((asset) => <AssetPreview key={`${item.id}-${asset.label}`} asset={asset} />)}
        </div>
      )}
    </article>
  );
}

function MediaCard({ asset }) {
  const downloadable = ['doc', 'pdf'].includes(asset.type);
  const canOpen = Boolean(asset.href);
  const Wrapper = canOpen ? 'a' : 'div';
  const wrapperProps = canOpen
    ? {
      href: asset.href,
      target: '_blank',
      rel: 'noreferrer',
      download: downloadable ? 'true' : undefined
    }
    : {};

  return (
    <Wrapper className="media-card" {...wrapperProps}>
      <div className="media-card-head">
        <span className="media-type">{mediaIcon[asset.type] || '↗'}</span>
        <span className="media-kind">{asset.type}</span>
      </div>
      <h4>{asset.label}</h4>
      {asset.note && <p>{asset.note}</p>}
      {canOpen ? <span className="media-cta">Open Asset ↗</span> : <span className="media-cta">Snapshot Only</span>}
    </Wrapper>
  );
}

function InteractiveQuickTabs() {
  const [activeTab, setActiveTab] = useState(quickTabs[0].id);
  const active = quickTabs.find((tab) => tab.id === activeTab) || quickTabs[0];

  return (
    <section className="section" id="quick-tabs">
      <div className="shell">
        <div className="quicktabs-header">
          <h2>What I Build</h2>
          <p className="section-kicker">Interactive capability map</p>
        </div>
        <div className="quicktabs-switcher">
          {quickTabs.map((tab) => (
            <button
              key={tab.id}
              className={`quicktab-btn ${tab.id === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="quicktab-panel">
          <h3>{active.headline}</h3>
          <div className="quicktab-points">
            {active.points.map((point) => (
              <div key={point} className="quicktab-point">{point}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactDashboard() {
  const [activeTab, setActiveTab] = useState('edubridge');

  const impactData = {
    edubridge: {
      title: 'The Digital Pivot: Impact Over 4 Quarters',
      stats: [
        { number: '35%', label: 'YoY Revenue/Enrollment Growth', desc: 'Driven by strategic pivot from offline to digital GTM channels.' },
        { number: '40%', label: 'Uplift in Website Traffic', desc: 'Via end-to-end multi-channel marketing campaigns.' },
        { number: '15%', label: 'Lead-to-Enrollment Conversion', desc: 'Resulting from partner and influencer marketing initiatives.' }
      ],
      chart: [
        { label: 'Quarter 1', value: 5, fill: '15%' },
        { label: 'Quarter 2', value: 12, fill: '35%' },
        { label: 'Quarter 3', value: 18, fill: '55%' },
        { label: 'Quarter 4', value: 40, fill: '100%' }
      ]
    },
    fiteducoach: {
      title: 'Organic Growth Engine Trajectory',
      stats: [
        { number: '3X', label: 'Instagram Follower Growth', desc: 'Scaling from 4K to 12K+ via optimized SEO and content strategies.' },
        { number: '4X', label: 'Increase in ROAS', desc: 'Optimized performance marketing and influencer collaborations.' },
        { number: '150%', label: 'Course Enrollments Surge', desc: 'Aggressive CAC optimization across all digital funnels.' }
      ],
      chart: [
        { label: 'Month 1', value: 15, fill: '20%' },
        { label: 'Month 3', value: 45, fill: '45%' },
        { label: 'Month 6', value: 85, fill: '80%' },
        { label: 'Month 9', value: 150, fill: '100%' }
      ]
    }
  };

  const current = impactData[activeTab];

  return (
    <section className="section-dark" id="data-impact">
      <div className="shell">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Data & Impact</h2>
        <p style={{ color: '#a0a0a0', marginBottom: '32px' }}>A look at the numbers behind the strategy.</p>

        <div className="impact-tabs">
          <button className={`tab-btn ${activeTab === 'edubridge' ? 'active' : ''}`} onClick={() => setActiveTab('edubridge')}>
            EduBridge Pivot
          </button>
          <button className={`tab-btn ${activeTab === 'fiteducoach' ? 'active' : ''}`} onClick={() => setActiveTab('fiteducoach')}>
            FitEduCoach Scaling
          </button>
        </div>

        <div className="impact-grid">
          <div>
            {current.stats.map((stat) => (
              <div className="stat-block" key={stat.label}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>

          <div className="chart-container">
            <h3 style={{ marginBottom: '32px', borderBottom: '1px solid #333', paddingBottom: '16px' }}>{current.title}</h3>
            <div style={{ marginTop: '24px' }}>
              {current.chart.map((bar) => (
                <div className="bar-row" key={bar.label}>
                  <div className="bar-label">{bar.label}</div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: bar.fill }}></div>
                  </div>
                  <div className="bar-value">+{bar.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="route-view">
      <section className="hero hero-premium">
        <div className="shell">
          <span className="hero-chip">Editorial Minimal · Portfolio 2026</span>
          <h1>Crafting clear, compelling stories for complex brands.</h1>
          <p className="lede">
            Hi, I&apos;m Ayush. I&apos;m a communications specialist and brand strategist with over five years of experience. From B2B tech and enterprise SaaS to fast-growing education platforms, I bridge the gap between technical features and human narratives.
          </p>
          <div className="hero-actions">
            <a className="btn dark" href="#/work">View Selected Work</a>
            <a className="btn secondary" href="#/contact">Get in Touch</a>
          </div>
        </div>
      </section>

      <InteractiveQuickTabs />

      <section className="section alt" id="about-me">
        <div className="shell">
          <h2>Strategic Marketing Manager & Brand Strategist</h2>
          <p style={{ marginTop: '24px' }}>
            I am a results-driven Marketing & Communications professional based in Mumbai, orchestrating Go-To-Market (GTM) strategies, enterprise communications, and brand positioning across B2B SaaS, IT, and D2C sectors.
          </p>
          <p>
            My approach combines data-led strategy with a deep appreciation for creative direction. This multidisciplinary background allows me to bring a highly aesthetic, strategic perspective to every brand I build.
          </p>
          <div style={{ marginTop: '32px' }}>
            <h3>Education & Certifications</h3>
            <ul style={{ paddingLeft: '20px', color: 'var(--text)', marginTop: '12px' }}>
              <li>Bachelor of Arts in Multimedia and Mass Communication (BAMMC) – Reena Mehta College (2021)</li>
              <li>Certifications: Google Analytics Individual Qualification (GAIQ), HubSpot Inbound Marketing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="ai-mastery">
        <div className="shell">
          <h2>AI Integration & Workflow Automation</h2>
          <p style={{ color: 'var(--soft)', marginTop: '8px', marginBottom: '32px' }}>Leveraging advanced tools to bridge the gap between creative direction and rapid technical execution.</p>
          <div className="case-grid" style={{ marginTop: '0' }}>
            {capabilities.map(([name, desc]) => (
              <div key={name} className="capability-card">
                <h3 style={{ marginTop: 0 }}>{name}</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImpactDashboard />

      <section className="section alt">
        <div className="shell">
          <h2>Featured Work</h2>
          <p style={{ color: 'var(--soft)', marginTop: '8px' }}>A selection of campaigns, GTM strategies, and brand communications.</p>
          <div className="case-grid">
            {cases.slice(0, 3).map((item) => <CaseCard key={item.id} item={item} />)}
          </div>
          <div style={{ marginTop: '40px' }}>
            <a className="btn secondary" href="#/work">View All Experience</a>
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
          <h1>Work & Experience</h1>
          <p className="lede">A complete view of full-time experience, freelance clients, and media-rich project evidence.</p>
        </div>
      </section>

      <section className="section alt">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <h2>Professional Experience</h2>
              <p className="section-kicker">Core roles and long-term engagements.</p>
            </div>
          </div>
          <div className="case-grid" style={{ marginTop: 0 }}>
            {cases.map((item) => <CaseCard key={item.id} item={item} category="Experience" />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>Freelance Work</h2>
          <p className="section-kicker">Alphabetically ordered client work across social media, ads, website content, and documentation.</p>
          <div className="case-grid" style={{ marginTop: '24px' }}>
            {freelanceCases.map((item) => <CaseCard key={item.id} item={item} category="Freelance" />)}
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
            <a className="btn secondary" href="#/work">Back to Work</a>
            {item.assets?.[0]?.href ? <LinkButton href={item.assets[0].href} variant="dark">{item.assets[0].label}</LinkButton> : null}
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

          {item.assets?.length > 0 && (
            <div className="source-card">
              <h3>Source Files & Evidence</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--soft)' }}>All available artifacts are visible right here.</p>
              <div className="media-grid">
                {item.assets.map((asset) => <MediaCard key={asset.label} asset={asset} />)}
              </div>
            </div>
          )}
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
          <h1>Let&apos;s build something.</h1>
          <p className="lede">Whether you need brand strategy, product storytelling, or a communications overhaul, I&apos;m ready to help you shape the narrative.</p>

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
