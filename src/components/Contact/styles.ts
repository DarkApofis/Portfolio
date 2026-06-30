import styled from 'styled-components'
import { accentAlpha, colors, fonts, layout } from '../../styles/tokens'

export const Section = styled.section`
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: 90px ${layout.pagePadding} 60px;
  scroll-margin-top: 80px;

  @media (max-width: 700px) {
    padding: 70px 22px 48px;
  }
`

export const Panel = styled.div`
  background: linear-gradient(135deg, #1f1e1a, #191814);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: clamp(40px, 6vw, 72px);
  position: relative;
  overflow: hidden;
`

export const Glow = styled.div`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${accentAlpha(0.12)};
  filter: blur(40px);
`

export const Eyebrow = styled.div`
  font-family: ${fonts.mono};
  font-size: 13px;
  color: ${colors.accent};
  margin-bottom: 22px;
`

export const Heading = styled.h2`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: clamp(30px, 4.5vw, 54px);
  letter-spacing: -0.025em;
  line-height: 1.05;
  margin: 0 0 20px;
  max-width: 18ch;
`

export const Lead = styled.p`
  font-size: 17px;
  line-height: 1.6;
  color: ${colors.textMuted};
  max-width: 54ch;
  margin: 0 0 36px;
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  position: relative;
`

export const EmailButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${colors.accent};
  color: ${colors.ink};
  padding: 14px 26px;
  border-radius: 11px;
  font-weight: 600;
  font-size: 15px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px ${accentAlpha(0.28)};
  }
`

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${colors.text};
  padding: 14px 26px;
  border-radius: 11px;
  font-weight: 500;
  font-size: 15px;
  border: 1px solid ${colors.borderStrong};
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: ${colors.accent};
    background: rgba(255, 255, 255, 0.03);
  }
`
