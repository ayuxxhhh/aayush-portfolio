export const driveRoot = 'https://drive.google.com/drive/folders/1DHi1-EsZ7FJ7jA7hI8gcPpwv16Cv55MC?usp=sharing';

const media = (type, label, href, note = '') => ({ type, label, href, note });

export const cases = [
  {
    id: 'yotta',
    client: 'Yotta Data Services',
    label: 'Enterprise AI cloud',
    title: 'Making AI cloud infrastructure practical and accessible.',
    summary: 'Spearheaded PR and GTM communications for major late-2025 launches, including Shakti Studio, positioning Yotta as a sovereign AI leader.',
    role: 'Communications Specialist | Jul 2025 - Nov 2025',
    metrics: ['AI cloud GTM', 'Video scripts', 'Enterprise messaging'],
    challenge: 'AI cloud terminology can easily become abstract and disconnected from users. The objective was to make onshore GPU access and data sovereignty feel concrete for developers while still resonating with CTOs and decision-makers.',
    work: [
      'Orchestrated enterprise communications and cross-channel digital campaigns for AI and cloud infrastructure.',
      'Developed positioning frameworks and value propositions tailored for C-suite personas.',
      'Streamlined stakeholder communication and improved internal narrative adoption by 30%.'
    ],
    impact: 'Generated an estimated ₹1,000 crore pipeline influence and improved external engagement by 20%.',
    assets: [
      media('web', 'Yotta home', 'https://yotta.com/', 'Brand and product context'),
      media('web', 'Press room', 'https://yotta.com/press-release/', 'Launch and announcement references'),
      media('doc', 'GTM strategy document', '/aayush-portfolio/assets/yotta-week-1-gtm.docx', 'Planning and messaging foundation'),
      media('doc', 'Reel script document', '/aayush-portfolio/assets/yotta-reel-script.docx', 'Video narrative execution'),
      media('bundle', 'Drive evidence folder', driveRoot, 'Additional source files and working artifacts')
    ]
  },
  {
    id: 'fiteducoach',
    client: 'FitEduCoach',
    label: 'Fitness education',
    title: 'Scaling organic growth and course enrollments.',
    summary: 'Executed a full-funnel digital overhaul that organically grew Instagram followers by 3X and doubled website traffic.',
    role: 'Social Media Manager | Apr 2023 - Jun 2025',
    metrics: ['3X follower growth', '4X ROAS', '150% enrollment surge'],
    challenge: 'Needed to scale digital presence and drive enrollments for NASM-certified gym trainer courses.',
    work: [
      'Orchestrated performance marketing and influencer collaborations for NASM-certified courses.',
      'Architected a data-led content strategy and marketing automation pipeline.',
      'Used ROI analysis to drive a 15% quarter-on-quarter increase in qualified marketing leads.'
    ],
    impact: 'Achieved a 4X increase in ROAS and a 150% surge in online course enrollments while optimizing CAC.',
    assets: [
      media('bundle', 'Drive evidence folder', driveRoot, 'Campaign files, screenshots, and drafts')
    ]
  },
  {
    id: 'markss',
    client: 'Markss Infotech',
    label: 'B2B content',
    title: 'Simplifying technical B2B sales narratives.',
    summary: 'Directed targeted ABM campaigns for advanced Auto-ID, RFID, and IoT solutions.',
    role: 'Marketing Specialist | Sep 2022 - Apr 2023',
    metrics: ['Brand visibility lift', 'Sales enablement', 'ABM strategy'],
    challenge: 'Hardware and automation solutions often get buried in technical specs; we needed to focus on business outcomes by industry.',
    work: [
      'Directed a cross-functional overhaul of LinkedIn and ABM strategy.',
      'Rebuilt website content architecture and generated high-converting pitch decks.',
      'Executed integrated GTM campaigns across digital, email, and events.'
    ],
    impact: 'Generated a 3X surge in brand visibility within 8 months and enabled sales with tailored collateral.',
    assets: [
      media('web', 'Markss official site', 'https://www.markss.com/', 'Parent brand website'),
      media('web', 'Retail RFID solution page', 'https://www.markss.com/solutions-retail-rfid.php', 'Solution-led messaging example'),
      media('bundle', 'Drive evidence folder', driveRoot, 'Supporting campaign and content examples')
    ]
  },
  {
    id: 'edubridge',
    client: 'EduBridge India',
    label: 'Education growth',
    title: 'Transitioning offline trust into digital momentum.',
    summary: 'Co-orchestrated "Skills Factor", India’s largest virtual skills marathon, engaging 10,000+ youth and industry leaders.',
    role: 'Senior Marketing Executive | Mar 2021 - Sep 2022',
    metrics: ['35% YoY growth', '40% traffic uplift', '15% conversion gain'],
    challenge: 'EduBridge had strong offline trust and needed a digital acquisition model that retained credibility and warmth.',
    work: [
      'Led the strategic pivot from offline to digital GTM acquisition channels.',
      'Launched partner and influencer programs to generate qualified leads.',
      'Managed end-to-end multi-channel campaigns to drive traffic and enrollments.'
    ],
    impact: 'Digital pivot drove a 35% YoY increase in enrollments, 40% traffic growth, and 20% QoQ increase in qualified leads.',
    assets: [
      media('web', 'Skills Factor', 'https://www.edubridgeindia.com/skills-factor', 'Flagship campaign context'),
      media('web', 'EduBridge LinkedIn', 'https://in.linkedin.com/company/edubridgelearning', 'Brand and campaign visibility'),
      media('pdf', 'Social portfolio PDF', '/aayush-portfolio/assets/social-media-portfolio.pdf', 'Selected media and campaign output'),
      media('bundle', 'Drive evidence folder', driveRoot, 'Raw campaign assets and supporting materials')
    ]
  },
  {
    id: 'featured-collaborations',
    client: 'High-Profile Collaborations',
    label: 'Brand strategy',
    title: 'Executing high-value brand campaigns with prominent figures.',
    summary: 'Partnered with MasterChef Sanjeev Kapoor and Master of Wine Sonal Holland on brand campaigns and content strategy.',
    role: 'Brand & Content Strategist',
    metrics: ['Celebrity collaborations', 'Content strategy', 'Brand campaigns'],
    challenge: 'Developing campaign language aligned with established public voices and premium brand standards.',
    work: [
      'Developed content strategy for MasterChef Sanjeev Kapoor (Khana Khazana).',
      'Revamped web content and campaign copy for Sonal Holland’s academy.'
    ],
    impact: 'Delivered high-value campaigns that elevated digital presence and audience trust for both collaborators.',
    assets: [
      media('web', 'Sanjeev Kapoor Instagram', 'https://www.instagram.com/sanjeevkapoor?igsh=Y2VidG80dGVpZDlj', 'Campaign and audience-facing content'),
      media('web', 'Sonal Holland Instagram', 'https://www.instagram.com/sonalholland_masterofwine?igsh=dXU3dnJicm5lcGk5', 'Personal brand storytelling'),
      media('web', 'Sonal Holland Academy', 'https://academy.sonalholland.com/wset-level-1-wine/', 'Web content and positioning outcome'),
      media('bundle', 'Drive evidence folder', driveRoot, 'Additional drafts and publication proofs')
    ]
  }
];

export const freelanceCases = [
  {
    id: 'arki-staycation',
    client: 'Arki Staycation',
    label: 'Freelance',
    title: 'Operational and client-facing document creation.',
    summary: 'Created structured documents to support brand communication and execution workflows.',
    role: 'Freelance Content & Documentation',
    metrics: ['Documentation', 'Structured content', 'Execution support'],
    challenge: 'Needed clear, branded documentation that was useful for both internal workflow and client delivery.',
    work: [
      'Developed document templates and communication-ready formatting.',
      'Created practical content structures that improved clarity and handoff quality.'
    ],
    impact: 'Delivered polished documentation artifacts that improved client confidence and team alignment.',
    assets: [
      media('bundle', 'Drive evidence folder', driveRoot, 'Document samples and related project material')
    ]
  },
  {
    id: 'cobalt-living',
    client: 'Cobalt Living',
    label: 'Freelance',
    title: 'Social media ad execution for brand visibility.',
    summary: 'Supported social media advertising creatives and campaign communication.',
    role: 'Freelance Social Media Advertising',
    metrics: ['Paid social', 'Ad creative', 'Audience messaging'],
    challenge: 'Crafting ad creatives that balance visual appeal with high-intent conversion messaging.',
    work: [
      'Supported ad copy and creative direction for campaign sets.',
      'Aligned messaging with audience intent and platform format.'
    ],
    impact: 'Delivered cleaner campaign narratives and production-ready ad assets.',
    assets: [
      media('bundle', 'Drive evidence folder', driveRoot, 'Ad examples, layouts, and supporting files')
    ]
  },
  {
    id: 'junior-billionaire',
    client: 'Junior Billionaire',
    label: 'Freelance',
    title: 'Managing and producing Instagram-first content.',
    summary: 'Managed social media content planning and hands-on content creation for Instagram.',
    role: 'Freelance Social Media Manager',
    metrics: ['Instagram content', 'Creative planning', 'Audience engagement'],
    challenge: 'Maintaining quality and consistency while shipping frequent social posts and campaigns.',
    work: [
      'Planned content calendars and optimized publishing rhythm.',
      'Created social visuals and captions tailored to platform behavior.'
    ],
    impact: 'Built a stronger and more consistent visual/content presence for Instagram audiences.',
    assets: [
      media('web', 'Instagram profile', 'https://www.instagram.com/juniorbillionaire/', 'Live feed and social proof'),
      media('bundle', 'Drive evidence folder', driveRoot, 'Selected creative files and campaign examples')
    ]
  },
  {
    id: 'laundromania',
    client: 'Laundromania',
    label: 'Freelance',
    title: 'Instagram content management and creative support.',
    summary: 'Managed Instagram content and helped produce campaign-ready social creatives.',
    role: 'Freelance Social Media Manager',
    metrics: ['Instagram content', 'Creative support', 'Brand consistency'],
    challenge: 'Turning routine service communication into engaging visual storytelling.',
    work: [
      'Created and scheduled social content aligned with service-led messaging.',
      'Improved post consistency and visual cohesion across campaigns.'
    ],
    impact: 'Enhanced brand consistency and made content communication more engaging.',
    assets: [
      media('web', 'Instagram profile', 'https://www.instagram.com/laundromania/', 'Live examples of social output'),
      media('bundle', 'Drive evidence folder', driveRoot, 'Campaign and creative evidence files')
    ]
  },
  {
    id: 'sadanta-infotech',
    client: 'Sadanta Infotech',
    label: 'Freelance',
    title: 'Social media ad communication and creatives.',
    summary: 'Worked on social ad communication strategy and creative execution support.',
    role: 'Freelance Advertising Support',
    metrics: ['Social ads', 'Messaging', 'Creative support'],
    challenge: 'Create ad narratives that stay technically credible while remaining concise and clear.',
    work: [
      'Supported paid social communication and campaign creative direction.',
      'Prepared audience-friendly ad messaging and visual concepts.'
    ],
    impact: 'Delivered practical ad creatives and communication structures for campaign deployment.',
    assets: [
      media('bundle', 'Drive evidence folder', driveRoot, 'Ad concepts, copy drafts, and export files')
    ]
  },
  {
    id: 'sonal-holland-academy',
    client: 'Sonal Holland Wine Academy',
    label: 'Freelance',
    title: 'Website content revamp and SEO-focused blog support.',
    summary: 'Revamped website copy and supported SEO-optimized editorial output for academy growth.',
    role: 'Freelance Content Strategist',
    metrics: ['Website revamp', 'SEO blogs', 'Conversion copy'],
    challenge: 'Preserve premium tone while improving keyword relevance and page clarity.',
    work: [
      'Refined website positioning copy for clarity and authority.',
      'Contributed SEO-conscious blog and on-page content improvements.'
    ],
    impact: 'Improved content clarity and discoverability while maintaining premium brand voice.',
    assets: [
      media('web', 'Academy website', 'https://academy.sonalholland.com/', 'Primary web content output'),
      media('bundle', 'Drive evidence folder', driveRoot, 'Drafts, blog examples, and supporting proofs')
    ]
  },
  {
    id: 'unicef',
    client: 'UNICEF',
    label: 'Freelance',
    title: 'Campaign support and communication assistance.',
    summary: 'Contributed communication support and campaign-related execution touchpoints.',
    role: 'Freelance Communications Support',
    metrics: ['Campaign support', 'Communication', 'Execution'],
    challenge: 'Produce clear and purpose-driven content aligned with high-trust institutional communication.',
    work: [
      'Supported communication deliverables and campaign implementation tasks.',
      'Maintained messaging clarity and consistency across outputs.'
    ],
    impact: 'Delivered dependable communication support for mission-driven campaign initiatives.',
    assets: [
      media('bundle', 'Drive evidence folder', driveRoot, 'Available proofs and related deliverables')
    ]
  }
].sort((a, b) => a.client.localeCompare(b.client));

export const capabilities = [
  ['Brand & Messaging Strategy', 'Building clear positioning, launch narratives, and audience-specific language.'],
  ['Content Architecture', 'Structuring blogs, landing pages, and collateral so your team can ship effectively.'],
  ['Corporate Communications', 'Crafting internal and external comms, PR angles, and leadership messaging.']
];
