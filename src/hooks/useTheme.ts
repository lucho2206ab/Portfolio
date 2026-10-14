import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'
const THEME_COLOR: Record<Theme, string> = {
  dark: '#05060a',
  light: '#f4f6fb',
}

function readThemeFromDom(): Theme {
  return document.documentElement.classList.contains('light') ? 'light' : 'dark'
}

/**
 * Tema claro/oscuro. La clase inicial la define un script inline en `index.html`
 * (evita el flash); aquí se sincroniza y persiste la preferencia.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(readThemeFromDom)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('light', theme === 'light')
    root.classList.toggle('dark', theme === 'dark')

    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', THEME_COLOR[theme])
    }
  }, [theme])

  const toggle = useCallback(() => {
    setThemeState((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Ignorar si localStorage no está disponible.
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
