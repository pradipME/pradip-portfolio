import { gsap } from './gsapSetup'

export function skillsAnimation(scope: HTMLElement): void {
  const groups = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll('[data-skill-group]'))

  groups.forEach((group) => {
    const items = gsap.utils.toArray<HTMLElement>(group.querySelectorAll('[data-skill-item]'))

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: group, start: 'top 78%' },
    })

    tl.fromTo(group, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 })

    if (items.length > 0) {
      tl.fromTo(
        items,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.07 },
        '-=0.35',
      )
    }
  })
}
