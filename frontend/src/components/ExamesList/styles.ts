// src/components/ExamesList/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;


export const ListContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  border-radius: 5px;
  font-size: 16px;
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
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors['base-text']};

  strong {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;
