import { Section, SectionLabel } from '../common'
import {
  Body,
  Card,
  CardActions,
  Cover,
  CoverImg,
  DemoLink,
  Description,
  Heading,
  List,
  Meta,
  MetaNote,
  MoreCard,
  MoreHandle,
  MoreText,
  MoreTitle,
  Pill,
  RepoLink,
  Stack,
  Subtitle,
  Tag,
  Title,
} from './styles'
import bookshelf from '../../assets/images/bookshelf.png'

const stack = ['Next.js', 'TypeScript', 'Tailwind', 'Zustand', 'Supabase', 'Vitest']

const ProjectsContainer = () => {
  return (
    <Section id="work">
      <SectionLabel number="02" label="selected work" />
      <Heading data-reveal>Things I build on my own time</Heading>
      <Subtitle data-reveal>
        Side projects where I own the whole stack end to end — design, frontend,
        backend and tests.
      </Subtitle>

      <List>
        <Card data-reveal>
          <Cover>
            <CoverImg
              src={bookshelf}
              alt="Book Shelf reading-tracker dashboard"
              loading="lazy"
            />
          </Cover>
          <Body>
            <Meta>
              <Tag>Full-Stack</Tag>
              <MetaNote>01 — featured</MetaNote>
            </Meta>
            <Title>Book Shelf</Title>
            <Description>
              A full-stack app to catalog, organize and track the books you read.
              Built end to end on Next.js with Supabase for auth and persistence,
              Zustand for client state, and a Vitest suite covering the core logic.
            </Description>
            <Stack>
              {stack.map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </Stack>
            <CardActions>
              <DemoLink
                href="https://book-shelf-tau-three.vercel.app/"
                target="_blank"
                rel="noopener"
              >
                Live demo ↗
              </DemoLink>
              <RepoLink
                href="https://github.com/DarkApofis/Book-Shelf"
                target="_blank"
                rel="noopener"
              >
                GitHub ↗
              </RepoLink>
            </CardActions>
          </Body>
        </Card>

        <MoreCard
          href="https://github.com/DarkApofis"
          target="_blank"
          rel="noopener"
          data-reveal
        >
          <div>
            <MoreTitle>More on GitHub</MoreTitle>
            <MoreText>
              Browse the rest of what I'm building and experimenting with.
            </MoreText>
          </div>
          <MoreHandle>github.com/DarkApofis ↗</MoreHandle>
        </MoreCard>
      </List>
    </Section>
  )
}

export default ProjectsContainer