import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  DEFAULT_LANGUAGE,
  isLanguage,
  type Language,
} from '@/i18n/config'
import { en } from '@/i18n/locales/en'
import { es } from '@/i18n/locales/es'

function getInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem('lang')
    if (isLanguage(stored)) {
      return stored
    }
  } catch {
    // localStorage puede no estar disponible (modo privado, SSR, etc.)
  }

  const browser = window.navigator.language.toLowerCase()
  return browser.startsWith('en') ? 'en' : DEFAULT_LANGUAGE
}

void i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  try {
    window.localStorage.setItem('lang', lng)
  } catch {
    // Ignorar si localStorage no está disponible.
  }
})

export default i18n
