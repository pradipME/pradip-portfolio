export type SkillGroupId = 'backend' | 'frontend' | 'automation' | 'tools'

export interface SkillGroup {
  id: SkillGroupId
  number: string
  title: string
  skills: string[]
}

export interface SkillsData {
  index: string
  label: string
  statement: string
  groups: SkillGroup[]
}

export const skills: SkillsData = {
  index: '03',
  label: 'Capabilities',
  statement:
    'I work across backend development, frontend interfaces and automated testing — connecting implementation with software quality.',
  groups: [
    {
      id: 'backend',
      number: '01',
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Maven'],
    },
    {
      id: 'frontend',
      number: '02',
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'],
    },
    {
      id: 'automation',
      number: '03',
      title: 'Automation & Testing',
      skills: ['Selenium', 'TestNG', 'WebDriver', 'Manual Testing', 'Cross-browser Testing', 'Maven'],
    },
    {
      id: 'tools',
      number: '04',
      title: 'Tools & Database',
      skills: ['Git', 'GitHub', 'MySQL', 'Maven', 'Chrome DevTools'],
    },
  ],
}
