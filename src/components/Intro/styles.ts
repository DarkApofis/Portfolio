import styled from 'styled-components'
import { colors, fonts, layout } from '../../styles/tokens'

export const Section = styled.header`
  position: relative;
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: 110px ${layout.pagePadding} 90px;

  @media (max-width: 700px) {
    padding: 80px 22px 64px;
  }
`

export const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${fonts.mono};
  font-size: 13px;
  color: ${colors.accent};
  margin-bottom: 28px;
`

export const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${colors.accent};
  box-shadow: 0 0 12px ${colors.accent};
`

export const Title = styled.h1`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: clamp(44px, 7vw, 88px);
  line-height: 0.98;
  letter-spacing: -0.03em;
  margin: 0 0 32px;
  max-width: 14ch;

  span {
    color: ${colors.accent};
  }
`

export const Lead = styled.p`
  font-size: 19px;
  line-height: 1.6;
  color: ${colors.textMuted};
  max-width: 60ch;
  margin: 0 0 40px;

  strong {
    color: ${colors.text};
    font-weight: 600;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
`

export const Note = styled.span`
  font-family: ${fonts.mono};
  font-size: 13px;
  color: ${colors.textFaint};
  margin-left: 6px;
`

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  margin-top: 72px;
  background: ${colors.border};
  border: 1px solid ${colors.border};
  border-radius: 14px;
  overflow: hidden;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Stat = styled.div`
  background: ${colors.surface};
  padding: 24px 22px;
`

export const StatValue = styled.div<{ $accent?: boolean }>`
  font-family: ${fonts.display};
  font-size: 34px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ $accent }) => ($accent ? colors.accent : 'inherit')};
`

export const StatLabel = styled.div`
  font-family: ${fonts.mono};
  font-size: 12px;
  color: ${colors.textDim};
  margin-top: 6px;
`
