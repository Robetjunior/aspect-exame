import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card'] || '#f9f9f9'};
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

export const SearchInput = styled.input`
  padding: 14px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors['base-border'] || '#ccc'};
  border-radius: 8px;
  font-size: 18px;
  line-height: 1.5;
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
  border: 1px solid ${({ theme }) => theme.colors['base-border'] || '#ccc'};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-button'] || '#f0f0f0'};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight || '#e6f7ff'};
  }
`;

export const ItemText = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors['base-text'] || '#333'};

  strong {
    color: ${({ theme }) => theme.colors['base-subtitle'] || '#000'};
  }
`;
