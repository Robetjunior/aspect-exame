import styled from 'styled-components'

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
  padding: 32px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 2px solid #a3d9a5; /* Bordas consistentes */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Section = styled.section`
  background-color: #f9f9f9; /* Tom de fundo claro */
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #a3d9a5; /* Mesma borda */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 16px;
    font-size: 24px;
    color: #000000;
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
      background-color: #e6ffe6; /* Destaque leve */
    }
  }
`;

export const Card = styled.div`
  background: #006400;
  color: #ffffff;
  padding: 1.5rem;
  margin: 0.5rem 0;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    background-color: #004b00;
  }
`;

export const BackButton = styled.button`
  background: #006400;
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #004b00;
    transform: scale(1.05);
  }

  &:active {
    background-color: #003300;
    transform: scale(0.95);
  }
`;