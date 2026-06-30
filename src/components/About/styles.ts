import styled from 'styled-components'
import { colors, fonts } from '../../styles/tokens'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 64px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const Heading = styled.h2`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: clamp(26px, 3.2vw, 38px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 24px;
  max-width: 20ch;
`

export const P = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: ${colors.textMuted};
  margin: 0 0 18px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const Portrait = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 16px;
  display: block;
`

export const Facts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: ${fonts.mono};
  font-size: 13px;
  color: ${colors.textDim};
`

export const Fact = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 11px 0;
  border-bottom: 1px solid ${colors.border};

  &:last-child {
    border-bottom: none;
  }

  span:last-child {
    color: ${colors.text};
  }
`
