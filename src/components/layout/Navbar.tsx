import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { navItems, sectionIds } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/cn'

const linkBase =
  'relative inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors'

export function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label={t('a11y.mainNav')}
        className="relative w-full max-w-3xl"
      >
        <div className="flex items-center justify-between gap-2 rounded-full border border-line bg-surface px-2.5 py-2 shadow-lg shadow-black/5 backdrop-blur-xl dark:shadow-black/40">
          <a
            href="#inicio"
            className="group flex items-center gap-2 rounded-full px-2 py-1"
            aria-label={`${profile.name} — ${t('nav.inicio')}`}
          >
            <Logo className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display text-sm font-semibold tracking-tight text-fg">
              Luis Abreu
            </span>
          </a>

          <div className="flex items-center gap-1.5">
            <ul className="hidden items-center gap-0.5 md:flex">
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        linkBase,
                        isActive
                          ? 'text-fg'
                          : 'text-body hover:text-fg',
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 rounded-full bg-surface-strong ring-1 ring-line"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 32,
                          }}
                        />
                      )}
                      <span className="relative z-10">{t(item.key)}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <ThemeToggle />

            <LanguageSwitcher />

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:bg-surface-strong md:hidden"
              aria-label={open ? t('a11y.closeMenu') : t('a11y.openMenu')}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute inset-x-0 top-full mt-2 rounded-3xl border border-line bg-elevated/90 p-2 shadow-xl shadow-black/10 backdrop-blur-xl dark:shadow-black/50 md:hidden"
            >
              <ul className="flex flex-col">
                {navItems.map((item) => {
                  const isActive = active === item.id
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? 'true' : undefined}
                        className={cn(
                          'block rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-surface-strong text-fg'
                            : 'text-body hover:bg-surface hover:text-fg',
                        )}
                      >
                        {t(item.key)}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
