import portfolioData from '@/data/portfolio-data.json';

export type PortfolioData = typeof portfolioData;

/**
 * Get the portfolio data from the JSON file
 * @returns Portfolio data
 */
export function getPortfolioData(): PortfolioData {
  return portfolioData;
}

/**
 * Get basic information about the portfolio owner
 * @returns Basic information
 */
export function getBasicInfo() {
  return portfolioData.basics;
}

/**
 * Get skills categorized by type
 * @returns Skills information
 */
export function getSkills() {
  return portfolioData.skills;
}

/**
 * Get education information
 * @returns Education information
 */
export function getEducation() {
  return portfolioData.education;
}

/**
 * Get work experience information
 * @returns Experience information
 */
export function getExperience() {
  return portfolioData.experience;
}

/**
 * Get projects information
 * @returns Projects information
 */
export function getProjects() {
  return portfolioData.projects;
}

/**
 * Get testimonials information
 * @returns Testimonials information
 */
export function getTestimonials() {
  return portfolioData.testimonials;
}

/**
 * Get personal interests
 * @returns Interests information
 */
export function getInterests() {
  return portfolioData.interests;
}

/**
 * Get languages
 * @returns Languages information
 */
export function getLanguages() {
  return portfolioData.languages;
} 