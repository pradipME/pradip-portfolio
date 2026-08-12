import { gsap } from './gsapSetup'

export function projectAnimations(scope: HTMLElement): void {
  const rows = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll('[data-project-row]'))
  const mm = gsap.matchMedia()

  rows.forEach((row) => {
    const visual = row.querySelector<HTMLElement>('[data-project-visual]')

    if (visual) {
      gsap.fromTo(
        visual,
        { opacity: 0, y: 56, scale: 0.985 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 75%' },
        },
      )
    }

    mm.add('(min-width: 768px)', () => {
      const visualDesktop = row.querySelector<HTMLElement>('[data-project-visual]')
      const visualInner = row.querySelector<HTMLElement>('[data-project-visual-inner]')

      if (visualDesktop && visualInner) {
        gsap.fromTo(
          visualInner,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: visualDesktop,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      }
    })
  })
}
