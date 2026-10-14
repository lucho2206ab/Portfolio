import { useTranslation } from 'react-i18next'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface Stat {
  readonly value: string
  readonly label: string
}

interface Fact {
  readonly label: string
  readonly value: string
}

export function About() {
  const { t } = useTranslation()

  const paragraphs = t('about.paragraphs', {
    returnObjects: true,
  }) as unknown as readonly string[]
  const stats = t('about.stats', {
    returnObjects: true,
  }) as unknown as readonly Stat[]
  const facts = t('about.facts', {
    returnObjects: true,
  }) as unknown as readonly Fact[]

  return (
    <Section id="sobre-mi">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t('about.eyebrow')}
            title={t('about.title')}
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal className="space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-pretty leading-relaxed text-body"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-line bg-surface p-5"
                >
                  <div className="font-display text-3xl font-bold text-fg">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-surface p-6 backdrop-blur sm:p-8">
              <h3 className="font-mono text-xs tracking-[0.2em] text-accent-text uppercase">
                {t('about.factsTitle')}
              </h3>
              <ul className="mt-5 space-y-4">
                {facts.map((fact) => (
                  <li key={fact.label} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" />
                    <div>
                      <div className="text-xs tracking-wide text-subtle uppercase">
                        {fact.label}
                      </div>
                      <div className="text-sm text-fg">
                        {fact.value}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
