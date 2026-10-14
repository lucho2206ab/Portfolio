import { useTranslation } from 'react-i18next'

export function SkipLink() {
  const { t } = useTranslation()

  return (
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:z-[100] focus:-translate-x-1/2 focus:rounded-full focus:border focus:border-line focus:bg-elevated focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-fg focus:shadow-lg"
    >
      {t('a11y.skipToContent')}
    </a>
  )
}
