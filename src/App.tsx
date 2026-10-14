import { MotionConfig } from 'framer-motion'
import { Background } from '@/components/layout/Background'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SkipLink } from '@/components/layout/SkipLink'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-svh flex-col">
        <SkipLink />
        <Background />
        <Navbar />
        <main id="contenido" className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
