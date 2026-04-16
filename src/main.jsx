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
        { number: "150%", label: "
