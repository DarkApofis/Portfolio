import {Link} from 'react-scroll'

import { Anchor, H2, Header, LI, UL } from "./styles"

const HeaderComponent = () => {
    return (
        <Header>
            <H2>{`<Jose Osorio/>`}</H2>
            <nav>
                <UL>
                    <LI>
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About me</Link>
                    </LI>
                    <LI>
                        <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
                    </LI>
                    <LI>
                        <Anchor 
                            href='https://drive.google.com/file/d/1q8qzBorqH9TRF8AUv73rsf5CjKcepAKD/view?usp=sharing'
                            target='_blank'
                        >
                            Resume
                        </Anchor>
                    </LI>
                </UL>
            </nav>
        </Header>
    )
}

export default HeaderComponent