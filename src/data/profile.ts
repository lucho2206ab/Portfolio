/**
 * Datos de identidad y contacto. Fuente de verdad para enlaces/constantes.
 * Los textos traducibles viven en `src/i18n/locales/*`.
 */
export const profile = {
  name: 'Luis Alberto Abreu',
  title: 'Software Developer | Backend & Full Stack',
  location: 'Mendoza, Argentina',
  email: 'luis.abreumza@gmail.com',
  cvUrl: `${import.meta.env.BASE_URL}CV_Luis_Abreu_Software_Developer_2026.pdf`,
  links: {
    linkedin: 'https://www.linkedin.com/in/luis-abreu-070b848a',
    github: 'https://github.com/lucho2206ab',
  },
} as const
