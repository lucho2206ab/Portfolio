import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  LANGUAGE_LABELS,
  SUPPORTED_LANGUAGES,
  isLanguage,
} from '@/i18n/config'
import { cn } from '@/lib/cn'

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const current = isLanguage(i18n.resolvedLanguage) ? i18n.resolvedLanguage : 'es'

  return (
    <div
      role="group"
      aria-label={t('a11y.switchLanguage')}
      className="flex items-center gap-0.5 rounded-full border border-line bg-surface p-0.5"
    >
      {SUPPORTED_LANGUAGES.map((lng) => {
        const isActive = current === lng
        return (
          <button
            key={lng}
            type="button"
            onClick={() => void i18n.changeLanguage(lng)}
            aria-pressed={isActive}
            className={cn(
              'relative inline-flex items-center rounded-full px-2.5 py-1 font-mono text-xs transition-colors',
              isActive ? 'text-fg' : 'text-muted hover:text-fg',
            )}
          >
            {isActive && (
              <motion.span
                layoutId="language-switcher-pill"
                className="absolute inset-0 rounded-full bg-surface-strong"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{LANGUAGE_LABELS[lng]}</span>
          </button>
        )
      })}
    </div>
  )
}
