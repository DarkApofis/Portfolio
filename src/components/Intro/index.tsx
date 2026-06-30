import { ButtonGhost, ButtonPrimary } from '../common'
import {
  Actions,
  Dot,
  Eyebrow,
  Lead,
  Note,
  Section,
  Stat,
  StatLabel,
  Stats,
  StatValue,
  Title,
} from './styles'

const stats = [
  { value: '3+', label: 'years in production' },
  { value: '1st', label: 'AI feature shipped' },
  { value: '∞', label: 'component library reuse', accent: true },
  { value: '↑↑', label: 'Core Web Vitals' },
]

const Intro = () => {
  return (
    <Section id="top">
      <Eyebrow data-reveal>
        <Dot />
        Frontend Engineer · Bello, Colombia
      </Eyebrow>
      <Title data-reveal>
        I build high-traffic <span>production systems</span> for the web.
      </Title>
      <Lead data-reveal>
        Frontend engineer with 3+ years of production experience, including time at{' '}
        <strong>Mercado Libre</strong> — one of Latin America's largest tech
        companies. I specialize in React &amp;
        TypeScript, architecting complex CMSs, reusable component libraries, and the
        kind of performance work users feel.
      </Lead>
      <Actions data-reveal>
        <ButtonPrimary href="#work">View selected work →</ButtonPrimary>
        <ButtonGhost href="#contact">Get in touch</ButtonGhost>
        <Note>B2 English · Native Spanish</Note>
      </Actions>

      <Stats data-reveal>
        {stats.map(({ value, label, accent }) => (
          <Stat key={label}>
            <StatValue $accent={accent}>{value}</StatValue>
            <StatLabel>{label}</StatLabel>
          </Stat>
        ))}
      </Stats>
    </Section>
  )
}

export default Intro
