import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui/Container'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { profile } from '@/data/profile'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-body backdrop-blur"
          >
            <MapPin className="h-3.5 w-3.5 text-accent-text" />
            {profile.location}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-5xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-mono text-sm text-accent-text sm:text-base"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {t('hero.tagline')}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent-violet to-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-violet/25 transition-transform hover:-translate-y-0.5"
            >
              {t('hero.ctaContact')}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.cvUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3 text-sm font-semibold text-fg backdrop-blur transition-colors hover:bg-surface-strong"
            >
              <Download className="h-4 w-4 text-accent-text transition-transform group-hover:translate-y-0.5" />
              {t('hero.ctaCv')}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-2"
          >
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:bg-surface-strong hover:text-fg"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:bg-surface-strong hover:text-fg"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#sobre-mi"
        aria-label={t('nav.sobreMi')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-fg sm:inline-flex"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  )
}
