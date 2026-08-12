export type ProjectVisualKind = 'finflow' | 'thinkit' | 'selenium'

export interface Project {
  id: string
  number: string
  title: string
  category: string
  description: string
  technologies: string[]
  visual: ProjectVisualKind
  image: string | null
  github: string | null
  live: string | null
}

export const projects: Project[] = [
  {
    id: 'finflow',
    number: '01',
    title: 'FinFlow',
    category: 'Digital Banking System',
    description:
      'A modular-monolith digital banking platform. Java / Spring Boot backend serving a React frontend, MySQL persistence and REST APIs with authentication and role-based access control.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'RBAC'],
    visual: 'finflow',
    image: null,
    github: null,
    live: null,
  },
  {
    id: 'thinkit',
    number: '02',
    title: 'ThinkiT',
    category: 'Blinkit-style E-commerce',
    description:
      'A responsive quick-commerce storefront. React + Vite frontend backed by Spring Boot REST APIs and MySQL, built for fast browsing on any screen size.',
    technologies: ['React', 'Vite', 'TypeScript', 'Spring Boot', 'MySQL', 'REST APIs'],
    visual: 'thinkit',
    image: null,
    github: null,
    live: null,
  },
  {
    id: 'selenium-automation',
    number: '03',
    title: 'Selenium Automation',
    category: 'Web Automation & Testing',
    description:
      'Java + Selenium WebDriver test suites with TestNG and Maven — cross-browser coverage grounded in manual testing concepts for dependable regression checks.',
    technologies: ['Java', 'Selenium', 'TestNG', 'Maven', 'WebDriver'],
    visual: 'selenium',
    image: null,
    github: null,
    live: null,
  },
]
