export interface PortfolioHeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
}
