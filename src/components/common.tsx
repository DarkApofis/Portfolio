import styled, { css } from 'styled-components'
import { accentAlpha, colors, fonts, layout } from '../styles/tokens'

/** Shared max-width frame used by every section. */
export const sectionFrame = css`
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: 80px ${layout.pagePadding};
  scroll-margin-top: 80px;

  @media (max-width: 700px) {
    padding: 60px 22px;
  }
`

export const Section = styled.section`
  ${sectionFrame}
`

export const ButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: ${colors.accent};
  color: ${colors.ink};
  padding: 13px 24px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px ${accentAlpha(0.28)};
  }
`

export const ButtonGhost = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: ${colors.text};
  padding: 13px 24px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  border: 1px solid ${colors.borderStrong};
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: ${colors.accent};
    background: rgba(255, 255, 255, 0.03);
  }
`

const Label = styled.div`
  font-family: ${fonts.mono};
  font-size: 13px;
  color: ${colors.accent};
  margin-bottom: 34px;
  display: flex;
  align-items: center;
  gap: 14px;

  span:nth-child(2) {
    width: 34px;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }

  span:last-child {
    color: ${colors.textDim};
  }
`

type SectionLabelProps = {
  number: string
  label: string
}

/** The "01 — about" eyebrow that opens each section. */
export const SectionLabel = ({ number, label }: SectionLabelProps) => (
  <Label data-reveal>
    <span>{number}</span>
    <span />
    <span>{label}</span>
  </Label>
)
