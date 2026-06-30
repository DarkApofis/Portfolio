import { Section, SectionLabel } from '../common'
import {
  Banner,
  BannerLabel,
  BannerSub,
  BannerText,
  Card,
  CardTitle,
  Chip,
  Chips,
  Grid,
  Languages,
} from './styles'

const groups = [
  {
    title: 'PROFICIENT',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Redux',
      'Zustand',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Jest',
      'Vitest',
      'Playwright',
    ],
  },
  {
    title: 'EXPERIENCED',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'Web Vitals',
      'Performance',
      'SEO',
      'Responsive Design',
      'Accessibility (WCAG)',
      'Python',
      'FastAPI',
      'SQL',
      'NoSQL',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'Webpack',
    ],
  },
  {
    title: 'EXPLORING',
    skills: ['Golang'],
  },
  {
    title: 'TOOLS & WORKFLOW',
    skills: ['Git', 'GitHub', 'Cursor', 'Claude', 'Codex', 'AI-assisted dev'],
  },
]

const Skills = () => {
  return (
    <Section id="skills">
      <SectionLabel number="03" label="skills & stack" />
      <Grid>
        {groups.map(({ title, skills }) => (
          <Card key={title} data-reveal>
            <CardTitle>{title}</CardTitle>
            <Chips>
              {skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </Chips>
          </Card>
        ))}
      </Grid>

      <Banner data-reveal>
        <div>
          <BannerLabel>EDUCATION</BannerLabel>
          <BannerText>
            B.S. Data Science Engineering <span>(in progress)</span>
          </BannerText>
          <BannerSub>
            Instituto Tecnológico Metropolitano (ITM), Medellín · since Aug 2025
          </BannerSub>
        </div>
        <div>
          <BannerLabel>LANGUAGES</BannerLabel>
          <Languages>
            English <span>B2</span> &nbsp;·&nbsp; Spanish <span>C2 native</span>
          </Languages>
        </div>
      </Banner>
    </Section>
  )
}

export default Skills
