import { Section, SectionLabel } from '../common'
import { Aside, Fact, Facts, Grid, Heading, P, Portrait } from './styles'
import profile from '../../assets/images/profile.jfif'

const facts = [
  { label: 'Currently', value: 'Open to roles' },
  { label: 'Previously', value: 'Mercado Libre' },
  { label: 'Studying', value: 'Data Science Eng.' },
  { label: 'Based in', value: 'Bello, Colombia' },
]

const AboutMe = () => {
  return (
    <Section id="about">
      <SectionLabel number="01" label="about" />
      <Grid>
        <div data-reveal>
          <Heading>
            I care about the architecture behind the interface as much as the
            interface itself.
          </Heading>
          <P>
            At Mercado Libre I was part of the frontend architecture of a
            large-scale CMS used daily by editorial and content teams across the
            org. I contributed to the patterns other engineers build on —
            including a documented, shared component library that enforced visual
            consistency across products.
          </P>
          <P>
            I work close to product: collaborating with PMs, UX/UI designers and
            backend engineers, shipping production-ready features sprint after
            sprint, and reaching for AI-assisted workflows to move faster without
            cutting corners.
          </P>
        </div>
        <Aside data-reveal>
          <Portrait src={profile} alt="A portrait of Jose Osorio" loading="lazy" />
          <Facts>
            {facts.map(({ label, value }) => (
              <Fact key={label}>
                <span>{label}</span>
                <span>{value}</span>
              </Fact>
            ))}
          </Facts>
        </Aside>
      </Grid>
    </Section>
  )
}

export default AboutMe
