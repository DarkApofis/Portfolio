import styled from 'styled-components'
import { accentAlpha, colors, fonts } from '../../styles/tokens'

export const Heading = styled.h2`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: clamp(26px, 3.2vw, 38px);
  letter-spacing: -0.02em;
  margin: 0 0 12px;
`

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${colors.textDim};
  margin: 0 0 48px;
  max-width: 62ch;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 18px;
  overflow: hidden;
  transition: border-color 0.25s, transform 0.25s;

  &:hover {
    border-color: ${colors.borderHover};
    transform: translateY(-3px);
  }
`

export const Cover = styled.div`
  width: 100%;
  height: 420px;
  overflow: hidden;
  border-bottom: 1px solid ${colors.border};
  background: #f3f2ee;

  @media (max-width: 700px) {
    height: 240px;
  }
`

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
`

export const Body = styled.div`
  padding: 38px 44px 42px;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    padding: 28px 24px 30px;
  }
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
`

export const Tag = styled.span`
  font-family: ${fonts.mono};
  font-size: 12px;
  color: ${colors.ink};
  background: ${colors.accent};
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 500;
`

export const MetaNote = styled.span`
  font-family: ${fonts.mono};
  font-size: 12px;
  color: ${colors.textFaint};
`

export const Title = styled.h3`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.015em;
  margin: 0 0 14px;
`

export const Description = styled.p`
  font-size: 15.5px;
  line-height: 1.65;
  color: ${colors.textMuted};
  margin: 0 0 22px;
  max-width: 70ch;
`

export const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-family: ${fonts.mono};
  font-size: 12px;
  color: ${colors.textDim};
`

export const Pill = styled.span`
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 5px 11px;
  border-radius: 20px;
`

export const CardActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`

export const DemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${colors.accent};
  color: ${colors.ink};
  padding: 11px 20px;
  border-radius: 9px;
  font-weight: 600;
  font-size: 14px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px ${accentAlpha(0.28)};
  }
`

export const RepoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${colors.text};
  padding: 11px 20px;
  border-radius: 9px;
  font-weight: 500;
  font-size: 14px;
  border: 1px solid ${colors.borderStrong};
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: ${colors.accent};
    background: rgba(255, 255, 255, 0.03);
  }
`

export const MoreCard = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: ${colors.surface};
  border: 1px dashed ${colors.borderHover};
  border-radius: 18px;
  padding: 28px 36px;
  color: ${colors.text};
  transition: border-color 0.25s, background 0.25s;

  &:hover {
    border-color: ${colors.accent};
    background: ${colors.surfaceRaised};
  }
`

export const MoreTitle = styled.div`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: 19px;
  letter-spacing: -0.01em;
`

export const MoreText = styled.div`
  font-size: 14px;
  color: ${colors.textDim};
  margin-top: 4px;
`

export const MoreHandle = styled.span`
  font-family: ${fonts.mono};
  font-size: 13px;
  color: ${colors.accent};
`
