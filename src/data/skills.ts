export type SkillGroupId =
  | 'backend'
  | 'frontend'
  | 'databases'
  | 'automation'
  | 'iot'
  | 'tools'

export interface SkillGroup {
  readonly id: SkillGroupId
  readonly items: readonly string[]
}

/**
 * Agrupación de skills. El título de cada grupo se traduce vía
 * `skills.groups.<id>` en `src/i18n/locales`.
 */
export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'backend',
    items: ['Python', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    id: 'frontend',
    items: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'SvelteKit',
      'HTML5',
      'CSS3',
    ],
  },
  {
    id: 'databases',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'MongoDB'],
  },
  {
    id: 'automation',
    items: ['n8n', 'Generative AI APIs', 'Telegram Bots', 'Claude Code'],
  },
  {
    id: 'iot',
    items: ['ESP32 / Wemos', 'Arduino', 'C/C++', 'Sensors', 'ESP-NOW'],
  },
  {
    id: 'tools',
    items: ['Git', 'GitHub', 'Power BI'],
  },
]
