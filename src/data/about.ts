export interface AboutDetailGroup {
  title: string
  items: string[]
}

export interface AboutData {
  index: string
  label: string
  heading: string[]
  intro: string
  philosophy: string
  details: AboutDetailGroup[]
}

export const about: AboutData = {
  index: '04',
  label: 'About',
  heading: ['I build.', 'I test.', 'I refine.'],
  intro:
    "I'm a developer focused on building reliable software across backend systems, modern interfaces, and automated testing.",
  philosophy:
    'I care about the details between writing code and shipping software — architecture, usability, testing, and the small decisions that make systems dependable.',
  details: [
    {
      title: 'Focus',
      items: ['Backend Development', 'Frontend Development', 'Automation & Testing'],
    },
    {
      title: 'Current Stack',
      items: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Selenium', 'SQL'],
    },
    {
      title: 'Approach',
      items: ['Build', 'Test', 'Refine', 'Ship'],
    },
  ],
}
