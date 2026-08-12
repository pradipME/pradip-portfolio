import { Navbar } from '../navigation/Navbar'
import { HeroPlaceholder } from '../hero/HeroPlaceholder'
import { Footer } from '../footer/Footer'

export function SiteShell() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <HeroPlaceholder />
      </main>
      <Footer />
    </div>
  )
}
