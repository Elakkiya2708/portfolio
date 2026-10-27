export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  screenshots: {
    url: string;
    caption: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  statusNote?: string;
  architectureOverview?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    tag?: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  program?: string;
  duration: string;
  period: string;
  year: string;
  location: string;
  description: string[];
  technologies?: string[];
  status?: 'Completed' | 'Ongoing' | 'Trainee';
  certificateLink?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingOrg: string;
  issueDate: string;
  expirationDate?: string;
  validationNumber?: string;
  validationUrl?: string;
  fileUrl?: string;
  fileType?: 'pdf' | 'image';
  page?: number;
  description?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  gradeLabel: string;
  gradeValue: string;
  description: string;
  highlights?: string[];
}
