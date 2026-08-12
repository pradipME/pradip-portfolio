export interface PhilosophyData {
  label: string
  index: string
  words: string[]
  statement: string
}

export const philosophy: PhilosophyData = {
  label: 'Philosophy',
  index: '01',
  words: ['Code', 'Test', 'Refine', 'Ship'],
  statement:
    'From backend architecture to frontend experience and automated testing, I care about what happens before the code ships — and what happens after.',
}
