export type ThemeMode = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  projectType: 'internal' | 'personal';
  category: 'Streaming & Media' | 'FinTech & Web3' | 'Logistics & Realtime' | 'DevOps & Security' | 'Systems & WebSockets';
  techStack: string[];
  description: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  metrics: { label: string; value: string }[];
  liveDemoUrl?: string;
  githubUrl?: string;
  hasSimulator?: 'wapi' | 'propersats' | 'sendme' | 'bandit';
  featured: boolean;
  year: string;
  imageUrl?: string;
  role?: string;
  roleDescription?: string;
  focusAreas?: string[];
  keyContribution?: string;
  recognition?: string;
  productVision?: string;
  useCases?: string[];
  howItWorks?: string[];
  deployedStatus?: 'deployed' | 'in_development';
}

export interface HobbyItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  icon: string;
  image: string;
  areasExplore?: { label?: string; text: string }[];
}


export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
  publishDate: string;
  category: string;
  tags: string[];
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string[];
      codeSnippet?: {
        language: string;
        filename?: string;
        code: string;
      };
      callout?: string;
    }[];
    conclusion: string;
  };
}

export interface EducationItem {
  institution: string;
  qualification: string;
  status: string;
  period: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  focus: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  website: string;
  description: string;
  skills: string[];
  logoText: string;
  accentColor?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarBg: string;
  cardColor: string; // Tailwind class or hex matching the Surf the Web / Navy palette
}

