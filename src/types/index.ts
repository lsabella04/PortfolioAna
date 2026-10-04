export type Language = 'es' | 'en';

export type ViewState = 'home' | 'project-detail';

export interface MetricItem {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface ClientBrand {
  id: string;
  name: string;
  category: string;
  logoText: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  kpis: { label: string; value: string }[];
  platforms: string[];
  sampleContent: { title: string; type: string; snippet: string; views?: string }[];
}

export interface ProjectCase {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  image: string;
  summary: string;
  fullStory: string;
  metrics: { label: string; value: string }[];
  contentPillars: string[];
  copies: { hook: string; body: string; callToAction: string; platform: string }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}

export interface ProjectSubsection {
  letter: string;
  title: string;
  description: string;
  formatBadge: string;
  mediaType: 'reels' | 'youtube' | 'linkedin' | 'twitter' | 'infographics' | 'article' | 'general';
}

export interface DetailedProjectInfo {
  id: string;
  brandName: string;
  logoText: string;
  category: string;
  mainTitle: string;
  introduction: string;
  subsections: ProjectSubsection[];
}
