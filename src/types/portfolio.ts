export interface Profile {
  name: string;
  headline: string;
  shortBio: string;
  extendedBio?: string;
  location?: string;
  email: string;
  ctaTextPrimary: string;
  ctaTextSecondary: string;
  avatarUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  status: string;
  period?: string;
  description?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  role: string;
  statusText?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Certificate {
  id: string;
  name: string;
  englishTitle?: string;
  issuer: string;
  year?: string;
  issueDate?: string;
  period?: string;
  credentialId?: string;
  fileUrl?: string;
  category?: string;
  skills?: string[];
  credentialUrl?: string;
}

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  icon: "instagram" | "tiktok" | "mail" | "github" | "linkedin";
}

export interface PortfolioData {
  profile: Profile;
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  certificates: Certificate[];
  socials: SocialLink[];
}
