export interface Project {
  id: string
  index: string
  title: string
  category: string
  description: string
  technologies: string[]
  github: string
  live: string | null
  year: string
}

export const projects: Project[] = [
  {
    id: 'finflow',
    index: '01',
    title: 'FinFlow',
    category: 'Digital Banking System',
    description:
      'A modular-monolith digital banking platform. Java / Spring Boot backend serving a React frontend, MySQL persistence and REST APIs with authentication and role-based access control.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'RBAC'],
    github: 'https://github.com/pradip-sonawane/finflow',
    live: null,
    year: '2026',
  },
  {
    id: 'thinkit',
    index: '02',
    title: 'ThinkiT',
    category: 'Blinkit-style E-commerce',
    description:
      'A responsive quick-commerce storefront. React + Vite frontend backed by Spring Boot REST APIs and MySQL, built for fast browsing on any screen size.',
    technologies: ['React', 'Vite', 'TypeScript', 'Spring Boot', 'MySQL', 'REST APIs'],
    github: 'https://github.com/pradip-sonawane/thinkit',
    live: null,
    year: '2026',
  },
  {
    id: 'selenium-automation',
    index: '03',
    title: 'Selenium Automation',
    category: 'Test Automation Suite',
    description:
      'Java + Selenium WebDriver test suites with TestNG and Maven — cross-browser coverage grounded in manual testing concepts for dependable regression checks.',
    technologies: ['Java', 'Selenium', 'TestNG', 'Maven', 'WebDriver'],
    github: 'https://github.com/pradip-sonawane/selenium-automation',
    live: null,
    year: '2026',
  },
]
