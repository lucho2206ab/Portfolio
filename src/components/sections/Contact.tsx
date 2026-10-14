import { useTranslation } from 'react-i18next'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

export function Contact() {
  const { t } = useTranslation()

  const channels = [
    {
      key: 'email',
      href: `mailto:${profile.email}`,
      label: profile.email,
      cta: t('contact.emailCta'),
      icon: <Mail className="h-5 w-5" />,
      external: false,
    },
    {
      key: 'github',
      href: profile.links.github,
      label: 'github.com/lucho2206ab',
      cta: t('contact.githubCta'),
      icon: <GithubIcon className="h-5 w-5" />,
      external: true,
    },
    {
      key: 'linkedin',
      href: profile.links.linkedin,
      label: 'in/luis-abreu-070b848a',
      cta: t('contact.linkedinCta'),
      icon: <LinkedinIcon className="h-5 w-5" />,
      external: true,
    },
  ] as const

  return (
    <Section id="contacto">
      <Container>
        <SectionHeading
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          align="center"
        />

        <Reveal className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.key}
              href={channel.href}
              target={channel.external ? '_blank' : undefined}
              rel={channel.external ? 'noopener noreferrer' : undefined}
              className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-accent-text">
                {channel.icon}
              </span>
              <span className="mt-4 font-display text-sm font-semibold text-fg">
                {channel.cta}
              </span>
              <span className="mt-1 font-mono text-xs break-all text-muted">
                {channel.label}
              </span>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-subtle transition-colors group-hover:text-accent-text">
                {t('contact.open')}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </Reveal>
      </Container>
    </Section>
  )
}
