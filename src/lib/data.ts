import portfolioData from '@/data/portfolio-data.json';

// Define interfaces for the data structure
interface SocialMediaLink {
  platform: string;
  url: string;
}

interface BasicInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  profileImage: string;
  socialMedia: SocialMediaLink[];
}

interface Skill {
  name: string;
  level: number;
}

interface SkillsInfo {
  frontend: Skill[];
  backend: Skill[]; // Assuming same structure, adjust if needed
  tools: Skill[];
  programming: Skill[];
  languages: Skill[]; // Assuming same structure, adjust if needed
}

interface EducationEntry {
  institution: string;
  degree: string;
  start: string;
  end: string;
  description: string;
}

interface ExperienceEntry {
  company: string;
  position: string;
  location: string;
  start: string;
  end: string;
  description: string;
  highlights: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

// Define Testimonial interface
interface Testimonial {
  name: string;
  position: string;
  text: string;
  image: string;
}

interface LanguageInfo {
  language: string;
  fluency: string;
}

// Define the main PortfolioData interface based on JSON structure
interface PortfolioData {
  basics: BasicInfo;
  skills: SkillsInfo;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: Project[];
  // Make testimonials property optional
  testimonials?: Testimonial[];
  interests: string[];
  languages: LanguageInfo[];
}

// Assert the type of the imported JSON data
const typedPortfolioData: PortfolioData = portfolioData as PortfolioData;

/**
 * Get the portfolio data from the JSON file
 * @returns Portfolio data
 */
export function getPortfolioData(): PortfolioData {
  return typedPortfolioData;
}

/**
 * Get basic information about the portfolio owner
 * @returns Basic information
 */
export function getBasicInfo(): BasicInfo {
  return typedPortfolioData.basics;
}

/**
 * Get skills categorized by type
 * @returns Skills information
 */
export function getSkills(): SkillsInfo {
  return typedPortfolioData.skills;
}

/**
 * Get education information
 * @returns Education information
 */
export function getEducation(): EducationEntry[] {
  return typedPortfolioData.education;
}

/**
 * Get work experience information
 * @returns Experience information
 */
export function getExperience(): ExperienceEntry[] {
  return typedPortfolioData.experience;
}

/**
 * Get projects information
 * @returns Projects information
 */
export function getProjects(): Project[] {
  return typedPortfolioData.projects;
}

/**
 * Get testimonials information
 * @returns Testimonials information
 */
export function getTestimonials(): Testimonial[] {
  // Add nullish coalescing or check if testimonials exist if it can be undefined in JSON
  return typedPortfolioData.testimonials ?? [];
}

/**
 * Get personal interests
 * @returns Interests information
 */
export function getInterests(): string[] {
  return typedPortfolioData.interests;
}

/**
 * Get languages
 * @returns Languages information
 */
export function getLanguages(): LanguageInfo[] {
  return typedPortfolioData.languages;
} 