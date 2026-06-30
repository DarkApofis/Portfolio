import styled from 'styled-components'
import { colors, fonts, layout } from '../../styles/tokens'

export const Footer = styled.footer`
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: 30px ${layout.pagePadding} 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 700px) {
    padding: 28px 22px 44px;
  }
`

export const Note = styled.span`
  font-family: ${fonts.mono};
  font-size: 12px;
  color: ${colors.textFaint};
`
