export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'SQL', 'Maven', 'REST APIs'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Automation',
    skills: ['Selenium', 'TestNG', 'WebDriver', 'Cross-browser Testing'],
  },
]
