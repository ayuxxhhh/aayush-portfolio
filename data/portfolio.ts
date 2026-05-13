export type MediaType = 'web' | 'pdf' | 'doc' | 'image' | 'video' | 'note' | 'bundle';

export interface Asset {
  type: MediaType;
  label: string;
  href?: string;
  note?: string;
}

export interface HeroData {
  chip: string;
  headline: string;
  lede: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface ExperienceEntry {
  id: string;
  organization: string;
  label: string;
  title: string;
  role: string;
  dateRange: string;
  summary: string;
  metrics: string[];
  challenge: string;
  work: string[];
  impact: string;
  assets: Asset[];
}

export interface PortfolioItem {
  id: string;
  name: string;
  label: string;
  summary: string;
  status: string;
  highlights: string[];
  assets: Asset[];
}

export const hero: HeroData = {
  chip: 'Communications Leadership · Portfolio 2026',
  headline: 'I build communication systems that turn complex products into clear market stories.',
  lede:
    'I am Ayush Tiwari, a communications specialist and content strategist with 5+ years across B2B technology, education, and consumer brands. I lead narrative strategy, agency management, and cross-functional launch communication that aligns product, leadership, and market teams.',
  ctaPrimary: 'View Selected Work',
  ctaSecondary: 'Get in Touch'
};

const media = (type: MediaType, label: string, href = '', note = ''): Asset => ({ type, label, href, note });

export const experienceTimeline: ExperienceEntry[] = [
  {
    id: 'edubridge',
    organization: 'EduBridge India',
    label: 'Education growth',
    title: 'Transitioning offline trust into sustained digital momentum.',
    role: 'Senior Marketing Executive',
    dateRange: 'Mar 2021 - Sep 2022',
    summary: 'Led the organization-wide communication shift from offline growth to digital campaigns with measurable enrollment outcomes.',
    metrics: ['35% YoY enrollment growth', '40% traffic lift', '15% conversion improvement'],
    challenge: 'EduBridge had strong offline trust and needed digital storytelling that preserved credibility while improving acquisition efficiency.',
    work: [
      'Led the GTM transition narrative across website, social channels, and partner communication.',
      'Managed cross-functional campaign execution with external collaborators and internal stakeholders.',
      'Built communication assets that translated program value into enrollment-focused messaging.'
    ],
    impact: 'The digital program contributed to 35% year-over-year enrollment growth and stronger campaign consistency across channels.',
    assets: [media('web', 'Skills Factor page', 'https://www.edubridgeindia.com/skills-factor', 'Flagship campaign context.')]
  },
  {
    id: 'markss',
    organization: 'Markss Infotech',
    label: 'B2B content',
    title: 'Simplifying technical B2B narratives for enterprise buyers.',
    role: 'Marketing Specialist',
    dateRange: 'Sep 2022 - Apr 2023',
    summary: 'Built content and account-based communication frameworks for Auto-ID, RFID, and IoT offerings.',
    metrics: ['3X brand visibility', 'Sales enablement collateral', 'ABM execution'],
    challenge: 'Product messaging relied heavily on technical depth but lacked business-led storytelling for decision-makers.',
    work: [
      'Reframed product narratives into industry outcomes for account-based campaigns.',
      'Coordinated website copy updates and sales-facing communication collateral.',
      'Aligned campaign messaging across email, digital, and event touchpoints.'
    ],
    impact: 'Brand visibility increased significantly within eight months while sales teams gained clearer content assets for enterprise conversations.',
    assets: [media('web', 'Markss official site', 'https://www.markss.com/', 'Parent brand website.')]
  },
  {
    id: 'fiteducoach',
    organization: 'FitEduCoach',
    label: 'Fitness education',
    title: 'Scaling content-led growth for online certification programs.',
    role: 'Social Media Manager',
    dateRange: 'Apr 2023 - Jun 2025',
    summary: 'Directed editorial planning, platform strategy, and campaign communication to scale reach and enrollments.',
    metrics: ['3X follower growth', '4X ROAS', '150% enrollment surge'],
    challenge: 'The brand needed stronger content systems and clearer campaign messaging to support rapid digital growth.',
    work: [
      'Designed channel-specific content calendars tied to enrollment objectives.',
      'Managed campaign communication across paid, organic, and influencer formats.',
      'Established reporting rhythm to optimize message quality and platform performance.'
    ],
    impact: 'Audience growth and enrollment performance improved materially through a structured communication strategy and disciplined execution.',
    assets: [media('pdf', 'Social media campaign portfolio', '/aayush-portfolio/assets/social-media-portfolio.pdf', 'Campaign snapshots.')]
  },
  {
    id: 'yotta',
    organization: 'Yotta Data Services',
    label: 'Enterprise AI cloud',
    title: 'Leading communications for sovereign AI and cloud launches.',
    role: 'Communications Specialist',
    dateRange: 'Jul 2025 - Present',
    summary: 'Owns strategic communication for enterprise AI launches, leadership messaging, and agency-aligned brand execution.',
    metrics: ['Enterprise launch communication', 'Leadership narrative', 'Agency management'],
    challenge: 'The market needed clear, credible communication that connected technical AI infrastructure with decision-maker priorities.',
    work: [
      'Leads launch communication planning for key AI and cloud product moments with cross-functional teams.',
      'Owns leadership messaging and spokesperson narratives for high-visibility announcements.',
      'Manages agency and internal workflows to keep creative execution, PR, and stakeholder communication aligned.'
    ],
    impact: 'Strengthened Yotta’s leadership narrative in sovereign AI through clear messaging, structured communication governance, and launch readiness.',
    assets: [media('web', 'Yotta press room', 'https://yotta.com/press-release/', 'Launch and announcement references.')]
  }
];

export const ventures: PortfolioItem[] = [
  {
    id: 'analytics-of-india',
    name: 'Analytics of India',
    label: 'Ongoing launch',
    summary: 'Building the communication foundation, editorial strategy, and launch positioning for an analytics-focused media initiative.',
    status: 'Launching',
    highlights: ['Narrative architecture', 'Editorial systems', 'Go-to-market planning'],
    assets: []
  },
  {
    id: 'arki-ayurveda',
    name: 'Arki Ayurveda LLP',
    label: 'Ongoing launch',
    summary: 'Leading brand communication, content direction, and rollout planning for a modern Ayurveda venture.',
    status: 'Launching',
    highlights: ['Brand story development', 'Content strategy', 'Launch communication roadmap'],
    assets: []
  }
];

export const projects: PortfolioItem[] = [
  {
    id: 'sonal-holland-academy',
    name: 'Sonal Holland Wine Academy',
    label: 'Freelance project',
    summary: 'Revamped website and blog communication to improve discoverability while preserving a premium brand voice.',
    status: 'Completed',
    highlights: ['Website messaging rewrite', 'SEO-aware editorial content', 'Conversion-focused page copy'],
    assets: [media('web', 'Academy website', 'https://academy.sonalholland.com/', 'Primary web content output.')]
  },
  {
    id: 'unicef-support',
    name: 'UNICEF Campaign Support',
    label: 'Freelance project',
    summary: 'Supported communication deliverables and campaign execution with clarity, consistency, and mission alignment.',
    status: 'Completed',
    highlights: ['Campaign communication support', 'Editorial consistency', 'Stakeholder-ready copy'],
    assets: []
  }
];

export const capabilities = [
  ['Communication Strategy', 'Builds structured narratives that align product value, audience context, and brand intent.'],
  ['Content Leadership', 'Designs scalable editorial systems for web, social, and campaign communication.'],
  ['Agency & Stakeholder Management', 'Leads agency collaboration and cross-functional execution from strategy to launch.']
] as const;

export const accolades = [
  'Led communication for major enterprise AI launch narratives at Yotta Data Services.',
  'Built multi-sector content systems across B2B tech, education, and consumer brands.',
  'Driving two active venture launches: Analytics of India and Arki Ayurveda LLP.'
] as const;
