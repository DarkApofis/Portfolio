import { Anchor, Footer, UL } from "./styles"

const FooterComponent = () => {
    return (
        <Footer>
            <UL>
                <li>
                    <Anchor href="https://github.com/DarkApofis" target='_blank'>
                        Github
                    </Anchor>
                </li>
                <li>
                    <Anchor href="https://www.linkedin.com/in/jose-alfredo-osorio-garcia/" target='_blank'>
                        Linkedin
                    </Anchor>
                </li>
            </UL>
        </Footer>
    )
}

export default FooterComponent