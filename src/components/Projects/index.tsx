import { Section, Projects, Img, H2, ImageContainer, P, Anchor } from "./styles"
import pro_ropa from '../../assets/images/pro_ropa.jpg'
import dog_breeds from '../../assets/images/dog_breeds.jpg'
import platzi_movies from '../../assets/images/platzi_movies.png'

const ProjectsContainer = () => {
    return (
        <Section id="projects">
            <H2>Projects</H2>
            <Projects>
                <Anchor href='https://pro-ropa-store.vercel.app/' target='_blank'>
                    <ImageContainer>
                        <Img src={pro_ropa} loading="lazy"/>
                    </ImageContainer>
                    <P>Pro Ropa - E commerce</P>
                </Anchor>
                <Anchor href='https://dog-breeds-eight.vercel.app/' target='_blank'>
                    <ImageContainer>
                        <Img src={dog_breeds} loading="lazy"/>
                    </ImageContainer>
                    <P>Dog Breeds - SPA</P>
                </Anchor>
                <Anchor href='https://platzi-movies.vercel.app/' target='_blank'>
                    <ImageContainer>
                        <Img src={platzi_movies} loading="lazy"/>
                    </ImageContainer>
                    <P>Platzi Movies - SPA</P>
                </Anchor>
            </Projects>
        </Section>
    )
}

export default ProjectsContainer