export interface NavLink {
  label: string
  href: string
}

export interface Profile {
  name: string
  role: string
  tagline: string
  summary: string
  location: string
  email: string
  github: string
  linkedin: string
}

export const profile: Profile = {
  name: 'Pradip Sonawane',
  role: 'Java Developer · Spring Boot · React · Selenium Automation',
  tagline: 'Building digital systems that actually work.',
  summary:
    'A Java and Spring Boot developer who also works across React, TypeScript and Selenium automation — building reliable, tested, production-minded systems.',
  location: 'India',
  email: 'mailto:hello@example.com',
  github: '',
  linkedin: '',
}

export const navLinks: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
