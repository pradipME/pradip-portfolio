export interface CtaLink {
  label: string
  href: string
}

export interface HeroData {
  eyebrow: string
  headlineLines: string[]
  subheading: string
  primaryCta: CtaLink
  secondaryCta: CtaLink
}

export const hero: HeroData = {
  eyebrow: 'Java Developer · Spring Boot · React · Selenium Automation',
  headlineLines: ['Building digital', 'systems that', 'actually work'],
  subheading:
    'I build reliable backend systems, clean interfaces and automated tests — one coherent process from idea to production.',
  primaryCta: { label: 'View my work', href: '#work' },
  secondaryCta: { label: "Let's connect", href: '#contact' },
}
