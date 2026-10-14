export interface NavItem {
  readonly id: string
  /** Clave i18n para el label (ver `src/i18n/locales`). */
  readonly key: string
}

/**
 * Secciones del sitio, en orden. `id` debe coincidir con el `id` del DOM.
 */
export const navItems: readonly NavItem[] = [
  { id: 'inicio', key: 'nav.inicio' },
  { id: 'sobre-mi', key: 'nav.sobreMi' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'experiencia', key: 'nav.experiencia' },
  { id: 'proyectos', key: 'nav.proyectos' },
  { id: 'contacto', key: 'nav.contacto' },
] as const

/** Ids estables para el scroll-spy (mismo orden que `navItems`). */
export const sectionIds: readonly string[] = navItems.map((item) => item.id)
