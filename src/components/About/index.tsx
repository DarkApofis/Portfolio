import { DIV, ImageContainer, Img, InfoContainer, LI, P, Section, UL } from "./styles"
import profile from '../../assets/images/profile.jfif'

const AboutMe = () => {
    return (
        <Section id="about">
            <InfoContainer>
                <h2>About Me</h2>   
                <P>Hello, my name is Jose Osorio, I'm from Colombia and I started to code in 2020 with the help of Coursera, where I took a series of courses called “Python for everybody”, after that I started looking for more about programming, and I found something called HTML</P>
                <P>So, I began to study HTML, and at the end of 2020, I made the decision to buy a subscription to a platform called Platzi, where I learned a lot about HTML, CSS, JS, and React.   
                </P>
                <P>And A year later I found a Bootcamp called Henry where I started to improve my technical and soft skills and I took part in the creation of an E-commerce as final project where I could apply my knowledge as a frontend developer.
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
                    <Img src={profile} alt='A portrait of Jose Osorio' loading="lazy"/>
                </ImageContainer>
            </DIV>
        </Section>
    )
}

export default AboutMe