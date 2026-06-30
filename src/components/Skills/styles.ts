import styled from 'styled-components'
import { colors, fonts } from '../../styles/tokens'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 16px;
  padding: 30px 32px;
`

export const CardTitle = styled.div`
  font-family: ${fonts.mono};
  font-size: 12px;
  color: ${colors.accent};
  margin-bottom: 20px;
  letter-spacing: 0.04em;
`

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`

export const Chip = styled.span`
  background: ${colors.chip};
  padding: 8px 14px;
  border-radius: 9px;
  font-size: 14px;
`

export const Banner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 24px;
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 16px;
  padding: 28px 32px;
  align-items: center;
  justify-content: space-between;
`

export const BannerLabel = styled.div`
  font-family: ${fonts.mono};
  font-size: 12px;
  color: ${colors.textFaint};
  margin-bottom: 7px;
`

export const BannerText = styled.div`
  font-size: 16px;
  font-weight: 500;

  span {
    color: ${colors.textDim};
    font-weight: 400;
  }
`

export const BannerSub = styled.div`
  font-size: 14px;
  color: ${colors.textDim};
  margin-top: 3px;
`

export const Languages = styled.div`
  font-size: 15px;

  span {
    color: ${colors.textDim};
  }
`
