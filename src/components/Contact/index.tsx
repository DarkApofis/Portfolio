import {
  Actions,
  EmailButton,
  Eyebrow,
  Glow,
  Heading,
  Lead,
  Panel,
  Section,
  SecondaryButton,
} from './styles'

const Contact = () => {
  return (
    <Section id="contact">
      <Panel data-reveal>
        <Glow />
        <Eyebrow>04 — contact</Eyebrow>
        <Heading>Let's build something that ships.</Heading>
        <Lead>
          Open to frontend and full-stack roles. The fastest way to reach me is
          email — I usually reply within a day.
        </Lead>
        <Actions>
          <EmailButton href="mailto:joseinvictus273@gmail.com">
            joseinvictus273@gmail.com
          </EmailButton>
          <SecondaryButton
            href="https://linkedin.com/in/jose-alfredo-osorio-garcia"
            target="_blank"
            rel="noopener"
          >
            LinkedIn ↗
          </SecondaryButton>
          <SecondaryButton href="tel:+573228317449">
            +57 322 831 7449
          </SecondaryButton>
        </Actions>
      </Panel>
    </Section>
  )
}

export default Contact
