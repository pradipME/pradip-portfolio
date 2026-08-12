import { gsap } from './gsapSetup'

export function philosophyAnimation(scope: HTMLElement): void {
  const words = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll('[data-philosophy-word]'))
  const statement = scope.querySelector<HTMLElement>('[data-philosophy-statement]')

  if (words.length === 0) return

  const mm = gsap.matchMedia()

  mm.add('(min-width: 768px)', () => {
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: scope,
        start: 'top top',
        end: '+=300%',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    })

    const segment = 2

    words.forEach((word, index) => {
      const enterStart = index * segment
      const exitStart = enterStart + segment

      tl.fromTo(
        word,
        { opacity: 0.14, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1, ease: 'none' },
        enterStart,
      )

      if (index < words.length - 1) {
        tl.to(word, { opacity: 0.14, scale: 0.94, duration: 1, ease: 'none' }, exitStart)
      }
    })

    if (statement) {
      tl.fromTo(
        statement,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.6, ease: 'none' },
        (words.length - 1) * segment,
      )
    }
  })

  mm.add('(max-width: 767px)', () => {
    words.forEach((word, index) => {
      gsap.fromTo(
        word,
        { opacity: 0.16, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: index * 0.1,
          scrollTrigger: { trigger: word, start: 'top 85%' },
        },
      )
    })
  })
}
