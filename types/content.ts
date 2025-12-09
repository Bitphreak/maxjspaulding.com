export interface Profile {
  name: string;
  title: string;
  company: string;
  location: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    blog?: string;
  };
  bio: {
    short: string;
    extended: string;
  };
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured: boolean;
  order: number;
  image?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "email" | "linkedin" | "github" | "blog";
  url: string;
  label: string;
}
