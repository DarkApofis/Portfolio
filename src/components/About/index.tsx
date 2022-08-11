import { DIV, ImageContainer, Img, InfoContainer, LI, P, Section, UL } from "./styles"
import profile from '../../assets/images/profile.jfif'

const AboutMe = () => {
    return (
        <Section id="about">
            <InfoContainer>
                <h2>About Me</h2>   
                <P>Hello, My name is Jose Osorio, I'm from Colombia and i started to code in 2020 with the help of Coursera, where i took a serie of courses called 'Python for everybody', after that i started looking for more about programming, and i found something called html</P>
                <P>So i began to study html, and at the end of 2020 i made the decision to buy the suscripcion of a platform called Platzi, where i learned a loot about html, css, js and react and that moment was when i fell in love with web development.    
                </P>
                <P>A year later i found a bootcamp called Henry where i started to improve my technical and soft skills and I took part in the creation of an e-commerce as final project where i could apply my knowledge as a frontend developer.
                </P>
                <P>Some technologies i've work with: </P>
                <UL>
                    <LI>Javascript</LI>
                    <LI>Typescript</LI>
                    <LI>React</LI>
                    <LI>Node.js</LI>
                    <LI>Express.js</LI>
                </UL>
            </InfoContainer>
            <DIV>
                <ImageContainer>
                    <Img src={profile} alt='A portrait of Jose Osorio'/>
                </ImageContainer>
            </DIV>
        </Section>
    )
}

export default AboutMe