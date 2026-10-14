export const SUPPORTED_LANGUAGES = ['es', 'en'] as const

export type Language = (typeof SUPPORTED_LANGUAGES)[number]

export const DEFAULT_LANGUAGE: Language = 'es'

export const LANGUAGE_LABELS: Record<Language, string> = {
  es: 'ES',
  en: 'EN',
}

export function isLanguage(value: unknown): value is Language {
  return value === 'es' || value === 'en'
}
