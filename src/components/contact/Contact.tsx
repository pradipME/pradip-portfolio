import { useRef } from 'react'
import { contact } from '../../data/contact'
import { useReveal } from '../../hooks/useReveal'
import { ContactCTA } from './ContactCTA'
import { ContactLinks } from './ContactLinks'

export function Contact() {
  const rootRef = useRef<HTMLElement>(null)

  useReveal(rootRef)

  return (
    <section id="contact" ref={rootRef} aria-label="Contact">
      <div className="mx-auto w-full max-w-(--content-max) px-(--gutter) py-24 sm:py-32">
        <ContactCTA data={contact} />
        <ContactLinks />
      </div>
    </section>
  )
}
