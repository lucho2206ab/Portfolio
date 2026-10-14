import type { TranslationSchema } from './es'

export const en: TranslationSchema = {
  nav: {
    inicio: 'Home',
    sobreMi: 'About',
    skills: 'Skills',
    experiencia: 'Experience',
    proyectos: 'Projects',
    contacto: 'Contact',
  },
  a11y: {
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Change language',
    skipToContent: 'Skip to content',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    backToTop: 'Back to top',
    viewCode: 'View code on GitHub',
    viewDemo: 'View live demo',
  },
  common: {
    present: 'Present',
    private: 'Private',
    code: 'Code',
    demo: 'Demo',
  },
  hero: {
    tagline:
      'I build APIs, modern frontends and automations, integrating software, data and IoT.',
    ctaContact: 'Contact',
    ctaCv: 'Download CV',
  },
  about: {
    eyebrow: 'About',
    title: 'A hybrid profile across business and technology',
    paragraphs: [
      'I am a software developer with technical training and hands-on experience in web development, APIs, automation and systems integration.',
      'I currently take part in modernizing internal applications and management processes, working with Python, FastAPI, TypeScript, PostgreSQL and modern frontend technologies. I also build IoT projects that integrate hardware, software, data and automation.',
      'My previous background in administrative management lets me understand business needs and turn them into technology solutions.',
    ],
    stats: [
      { value: '50+', label: 'users rely on the systems I maintain' },
      { value: '~30%', label: 'less time spent on support tasks' },
      { value: '2023', label: 'digitizing internal processes' },
    ],
    factsTitle: 'In short',
    facts: [
      { label: 'Location', value: 'Mendoza, Argentina' },
      { label: 'Focus', value: 'Backend & Full Stack' },
      { label: 'Education', value: 'Software Development Technician' },
      { label: 'Languages', value: 'Native Spanish · English (learning)' },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Technical skills',
    subtitle: 'Technologies and tools I work with every day.',
    groups: {
      backend: 'Backend & APIs',
      frontend: 'Frontend',
      databases: 'Databases',
      automation: 'Automation & AI',
      iot: 'IoT & Embedded',
      tools: 'Tools',
    },
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Professional background',
    subtitle: 'Work experience, education and certifications.',
    workTitle: 'Work experience',
    educationTitle: 'Education',
    certificationsTitle: 'Certifications',
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Learning' },
    ],
    items: {
      asic: {
        role: 'Administrative Manager',
        bullets: [
          'Development and modernization of internal systems to digitize administrative and document processes.',
          'Web app for records and file management, replacing a legacy system.',
          'APIs, databases and web applications with Python/FastAPI, PostgreSQL, TypeScript and SvelteKit.',
          'Improvements and automations that cut response times by ~30%, across systems used daily by more than 50 users.',
        ],
      },
      precision: {
        role: 'IoT & Full Stack Developer (Freelance)',
        bullets: [
          'End-to-end architecture: sensors, firmware, communication, backend, database, frontend and automation.',
          'Firmware for microcontrollers and soil-moisture and temperature sensors.',
          'Node-to-gateway communication over ESP-NOW, integrated with web services.',
          'APIs and data processing to record and query historical measurements.',
          'React + TypeScript web dashboard and automations with n8n, Telegram and generative AI.',
        ],
      },
      osde: {
        role: 'Treasury Assistant',
        bullets: [
          'Management of ERP systems and payment-related administrative processes.',
          'Data administration and control; migrations preserving information integrity.',
          'Process automation with Google tools.',
        ],
      },
    },
    educationItems: {
      ies: 'Software Development Technician (Higher Degree)',
      aden: 'Business Administration Technician',
      insutec: 'Occupational Health and Safety Technician',
    },
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Featured projects',
    subtitle: 'A selection of systems and applications I built.',
    items: {
      expedientes: {
        title: 'Records and file management system',
        description:
          'Web application for records and file management that replaces a legacy system. Used daily by more than 50 people, it reduced response times by ~30%.',
      },
      precision: {
        title: 'Precision agriculture (IoT)',
        description:
          'End-to-end architecture for agricultural monitoring: sensors and firmware, ESP-NOW communication, backend and database, React + TypeScript dashboard, and AI-powered automations.',
      },
      huella: {
        title: 'Mi_huella_app',
        description:
          'Web application that calculates the carbon footprint based on the user’s habits.',
      },
      origamix: {
        title: 'Origamix',
        description:
          'A block-stacking game in the style of Tetris, with scoring mechanics.',
      },
      mapas: {
        title: 'Asic_mapas',
        description: 'Interactive map and layer project built on OpenStreetMap.',
      },
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build something together',
    subtitle:
      'Got a project, a role or an idea? Reach out and I’ll get back to you soon.',
    emailLabel: 'Email',
    emailCta: 'Send email',
    githubCta: 'View profile',
    linkedinCta: 'Connect',
    open: 'Open',
  },
  footer: {
    tagline: 'Backend and full stack software developer.',
    nav: 'Navigation',
    social: 'Social',
    rights: 'All rights reserved.',
    builtWith: 'Built with React, TypeScript and Tailwind CSS.',
  },
}
