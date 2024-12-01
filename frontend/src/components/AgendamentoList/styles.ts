// src/components/AgendamentosList/styles.ts
import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors['base-text']};

  strong {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.danger};
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  align-self: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dangerDark};
  }
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.danger};
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  align-self: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dangerDark};
  }
`;
