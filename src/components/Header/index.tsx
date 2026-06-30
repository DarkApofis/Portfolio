import {
  Badge,
  Brand,
  BrandName,
  ContactButton,
  Header,
  Nav,
  NavLink,
} from './styles'

const HeaderComponent = () => {
  return (
    <Header>
      <Brand href="#top">
        <Badge>JO</Badge>
        <BrandName>Jose Osorio</BrandName>
      </Brand>
      <Nav>
        <NavLink href="#about">about</NavLink>
        <NavLink href="#work">work</NavLink>
        <NavLink href="#skills" data-secondary>
          skills
        </NavLink>
        <ContactButton href="#contact">contact</ContactButton>
      </Nav>
    </Header>
  )
}

export default HeaderComponent

