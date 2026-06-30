import styled from 'styled-components'
import { accentAlpha, colors, fonts } from '../../styles/tokens'

export const Header = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  background: rgba(22, 21, 18, 0.72);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid ${colors.border};

  @media (max-width: 700px) {
    padding: 16px 22px;
  }
`

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${colors.text};
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid ${colors.accent};
  border-radius: 7px;
  color: ${colors.accent};
  font-family: ${fonts.mono};
  font-size: 13px;
  font-weight: 500;
`

export const BrandName = styled.span`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.01em;
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  font-family: ${fonts.mono};
  font-size: 13px;

  @media (max-width: 560px) {
    gap: 18px;
  }
`

export const NavLink = styled.a`
  color: ${colors.textDim};
  transition: color 0.2s;

  &:hover {
    color: ${colors.text};
  }

  @media (max-width: 560px) {
    &[data-secondary] {
      display: none;
    }
  }
`

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: ${colors.ink};
  background: ${colors.accent};
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px ${accentAlpha(0.3)};
  }
`
