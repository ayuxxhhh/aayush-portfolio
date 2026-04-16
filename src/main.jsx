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
        <a className="btn secondary" href={`#/case/${item.id}`}>View Details</a>
      </div>
    </article>
  );
}

function ImpactDashboard() {
  const [activeTab, setActiveTab] = useState('edubridge');

  const impactData = {
    edubridge: {
      title: "The Digital Pivot: Impact Over 4 Quarters",
      stats: [
        { number: "35%", label: "YoY Revenue/Enrollment Growth", desc: "Driven by strategic pivot from offline to digital GTM channels." },
        { number: "40%", label: "Uplift in Website Traffic", desc: "Via end-to-end multi-channel marketing campaigns." },
        { number: "15%", label: "Lead-to-Enrollment Conversion", desc: "Resulting from partner and influencer marketing initiatives." }
      ],
      chart: [
        { label: "Quarter 1", value: 5, fill: "15%" },
        { label: "Quarter 2", value: 12, fill: "35%" },
        { label: "Quarter 3", value: 18, fill: "55%" },
        { label: "Quarter 4", value: 40, fill: "100%" }
      ]
    },
    fiteducoach: {
      title: "Organic Growth Engine Trajectory",
      stats: [
        { number: "3X", label: "Instagram Follower Growth", desc: "Scaling from 4K to 12K+ via optimized SEO and content strategies." },
        { number: "4X", label: "Increase in ROAS", desc: "Optimized performance marketing and influencer collaborations." },
        { number: "150%", label: "Course Enrollments Surge", desc: "Aggressive CAC optimization across all digital funnels." }
      ],
      chart: [
        { label: "Month 1", value: 15, fill: "20%" },
        { label: "Month 3", value: 45, fill: "45%" },
        { label: "Month 6", value: 85, fill: "80%" },
        { label: "Month 9", value: 150, fill: "100%" }
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
          <button 
            className={`tab-btn ${activeTab === 'edubridge' ? 'active' : ''}`} 
            onClick={() => setActiveTab('edubridge')}
          >
            EduBridge Pivot
          </button>
          <button 
            className={`tab-btn ${activeTab === 'fiteducoach' ? 'active' : ''}`} 
            onClick={() => setActiveTab('fiteducoach')}
          >
            FitEduCoach Scaling
          </button>
        </div>
        
        <div className="impact-grid">
          <div>
            {current.stats.map((stat, i) => (
              <div className="stat-block" key={i}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="chart-container">
            <h3 style={{ marginBottom: '32px', borderBottom: '1px solid #333', paddingBottom: '16px' }}>
              {current.title}
            </h3>
            <div style={{ marginTop: '24px' }}>
              {current.chart.map((bar, i) => (
                <div className="bar-row" key={i}>
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
      <section className="hero">
        <div className="shell">
          <h1>Crafting clear, compelling stories for complex brands.</h1>
          <p className="lede">
            Hi, I'm Ayush. I'm a communications specialist and brand strategist with over five years of experience. From B2B tech and enterprise SaaS to fast-growing education platforms, I bridge the gap between technical features and human narratives.
          </p>
          <div className="hero-actions">
            <a className="btn dark" href="#/work">View Selected Work</a>
            <a className="btn secondary" href="#/contact">Get in Touch</a>
          </div>
        </div>
      </section>

      <section className="section alt" id="about-me">
        <div className="shell">
          <h2>Strategic Marketing Manager & Brand Strategist</h2>
          <p style={{ marginTop: '24px' }}>
            I am a results-driven Marketing & Communications professional based in Mumbai, orchestrating Go-To-Market (GTM) strategies, enterprise communications, and brand positioning across the B2B SaaS, IT, and D2C sectors. I specialize in translating complex product architectures into compelling narratives that drive stakeholder alignment and audience engagement.
          </p>
          <p>
            My approach combines data-led strategy with a deep appreciation for creative direction. Beyond corporate communications and scaling digital growth, my creative vision extends into high-fashion aesthetics, cinematic photography, and music production. This multidisciplinary background allows me to bring a unique, highly aesthetic, and deeply strategic perspective to every brand I build—including independent ventures like Arki Ayurveda and Analytics of India.
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
            <div style={{ padding: '24px', border: '1px solid var(--line)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ marginTop: 0 }}>Prompt Engineering</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>Expert in crafting architectural prompts to streamline content strategy, draft high-converting copy, and optimize brand positioning at scale.</p>
            </div>
            <div style={{ padding: '24px', border: '1px solid var(--line)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ marginTop: 0 }}>Technical Web Automation</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>Utilizing AI coding assistants to accelerate the development, deployment, and structural philosophy of data-structured platforms.</p>
            </div>
            <div style={{ padding: '24px', border: '1px solid var(--line)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ marginTop: 0 }}>Creative AI Generation</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>Leveraging advanced models for cinematic editorial and luxury aesthetics, bypassing traditional technical bottlenecks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The new Interactive Impact Dashboard */}
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
          <p className="lede">Complete professional history, case studies, and the raw documents that powered them.</p>
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
            <a className="btn secondary" href="#/work">Back to Work</a>
            {item.links[0] && <LinkButton href={item.links[0].href} variant="dark">{item.links[0].label}</LinkButton>}
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
          {item.links.length > 0 && (
            <div className="source-card">
              <h3>Source Files & Links</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--soft)' }}>Assets related to this project.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                {item.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="source-link" download={link.href.includes('.docx') || link.href.includes('.pdf') ? "true" : undefined}>
                    {link.label} ↗
                  </a>
                ))}
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
