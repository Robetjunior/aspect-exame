import styled from 'styled-components'

import { mixins } from '../../../../../CoffeeDelivery/src/styles/mixins'

export const Hero = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`;

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`

export const CoffeeList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: black;
  padding: 1.5rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const BackButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: "black";
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;