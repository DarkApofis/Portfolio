import { Anchor, H2, Header, LI, UL } from "./styles"

const HeaderComponent = () => {
    return (
        <Header>
            <H2>{`<Jose Osorio/>`}</H2>
            <nav>
                <UL>
                    <LI>
                        <Anchor href="/#about">About me</Anchor>
                    </LI>
                    <LI>
                        <Anchor href="/#projects">Projects</Anchor>
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