import { useTranslation } from 'react-i18next'
import { ArrowUp, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { navItems } from '@/data/navigation'
import { profile } from '@/data/profile'

const currentYear = new Date().getFullYear()

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-line bg-elevated/60">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="flex items-center gap-2">
              <Logo className="h-7 w-7" />
              <span className="font-display text-base font-semibold text-fg">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {t('footer.tagline')}
            </p>
          </div>

          <nav aria-label={t('footer.nav')}>
            <h2 className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">
              {t('footer.nav')}
            </h2>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">
              {t('footer.social')}
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-center text-xs text-subtle sm:text-left">
            © {currentYear} {profile.name}. {t('footer.rights')}
            {' · '}
            {t('footer.builtWith')}
          </p>
          <a
            href="#inicio"
            aria-label={t('a11y.backToTop')}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs text-body transition-colors hover:bg-surface-strong hover:text-fg"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            {t('a11y.backToTop')}
          </a>
        </div>
      </Container>
    </footer>
  )
}
