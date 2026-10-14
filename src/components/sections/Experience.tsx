import { useTranslation } from 'react-i18next'
import {
  Award,
  Briefcase,
  GraduationCap,
  Languages as LanguagesIcon,
} from 'lucide-react'
import { Chip } from '@/components/ui/Chip'
import { Container } from '@/components/ui/Container'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { certifications } from '@/data/certifications'
import { educationItems } from '@/data/education'
import { experienceItems } from '@/data/experience'

interface LanguageItem {
  readonly name: string
  readonly level: string
}

export function Experience() {
  const { t } = useTranslation()
  const languages = t('experience.languages', {
    returnObjects: true,
  }) as unknown as readonly LanguageItem[]

  return (
    <Section id="experiencia">
      <Container>
        <SectionHeading
          eyebrow={t('experience.eyebrow')}
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        <div className="mt-12">
          <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted uppercase">
            <Briefcase className="h-4 w-4 text-accent-text" />
            {t('experience.workTitle')}
          </h3>

          <ol className="mt-6 space-y-8 border-l border-line pl-6 sm:pl-8">
            {experienceItems.map((item) => {
              const bullets = t(`experience.items.${item.id}.bullets`, {
                returnObjects: true,
              }) as unknown as readonly string[]
              const period = `${item.start} — ${item.end ?? t('common.present')}`

              return (
                <li key={item.id} className="relative">
                  <span className="absolute top-2 -left-[31px] h-2.5 w-2.5 rounded-full bg-accent-blue ring-4 ring-page sm:-left-[39px]" />
                  <Reveal>
                    <div className="font-mono text-xs text-subtle">
                      {period}
                    </div>
                    <h4 className="mt-1 font-display text-lg font-semibold text-fg">
                      {t(`experience.items.${item.id}.role`)}
                    </h4>
                    <div className="text-sm text-accent-text">
                      {item.company}
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {bullets.map((bullet, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm leading-relaxed text-body"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    {item.stack && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <li key={tech}>
                            <Chip>{tech}</Chip>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Stagger className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted uppercase">
              <GraduationCap className="h-4 w-4 text-accent-text" />
              {t('experience.educationTitle')}
            </h3>
            <ul className="mt-5 space-y-5">
              {educationItems.map((item) => (
                <li key={item.id}>
                  <StaggerItem>
                    <div className="font-display text-sm font-semibold text-fg">
                      {t(`experience.educationItems.${item.id}`)}
                    </div>
                    <div className="mt-0.5 text-sm text-muted">
                      {item.institution}
                      {' · '}
                      <span className="font-mono text-xs">{item.period}</span>
                    </div>
                  </StaggerItem>
                </li>
              ))}
            </ul>
          </Stagger>

          <div className="space-y-6">
            <Stagger className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted uppercase">
                <Award className="h-4 w-4 text-accent-text" />
                {t('experience.certificationsTitle')}
              </h3>
              <ul className="mt-5 space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <StaggerItem>
                      <div className="text-sm font-medium text-fg">
                        {cert.name}
                      </div>
                      <div className="font-mono text-xs text-subtle">
                        {cert.issuer} · {cert.year}
                      </div>
                    </StaggerItem>
                  </li>
                ))}
              </ul>
            </Stagger>

            <Stagger className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted uppercase">
                <LanguagesIcon className="h-4 w-4 text-accent-text" />
                {t('experience.languagesTitle')}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {languages.map((language) => (
                  <li key={language.name}>
                    <StaggerItem>
                      <Chip>
                        {language.name} · {language.level}
                      </Chip>
                    </StaggerItem>
                  </li>
                ))}
              </ul>
            </Stagger>
          </div>
        </div>
      </Container>
    </Section>
  )
}
