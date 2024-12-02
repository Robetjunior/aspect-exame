import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  border: 2px solid #a3d9a5;
`;

export const SearchInput = styled.input`
  padding: 16px;
  margin-bottom: 20px;
  width: 100%;
  border: 2px solid #a3d9a5;
  border-radius: 8px;
  font-size: 18px;
  line-height: 1.5;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:focus {
    border-color: #006400; /* Destaque no foco */
    background-color: #e6ffe6; /* Fundo leve */
    outline: none;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.li`
  padding: 20px;
  border: 2px solid #a3d9a5;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: #e6ffe6;
    border-color: #006400;
  }

  &:active {
    background-color: #cfe6cf; /* Tom mais escuro no active */
  }
`;

export const ItemText = styled.span`
  font-size: 18px;
  color: #333;

  strong {
    color: #006400; /* Destaque consistente */
  }
`;
