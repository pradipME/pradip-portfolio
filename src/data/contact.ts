export interface ContactData {
  index: string
  label: string
  heading: string[]
  statement: string
}

export const contact: ContactData = {
  index: '05',
  label: 'Contact',
  heading: ["Let's", 'build', 'something', 'good.'],
  statement: "Have an idea, project, or opportunity worth discussing? Let's connect.",
}
