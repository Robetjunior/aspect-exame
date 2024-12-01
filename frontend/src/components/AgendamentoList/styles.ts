import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 1);
  max-width: 800px;
  margin: 0 auto;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = styled.li`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-background']};
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemText = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors['base-text']};
  line-height: 1.5;

  strong {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;

export const DeleteButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #d9534f; /* Vermelho padrão para ações de exclusão */
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #c9302c; /* Tom mais escuro ao passar o mouse */
    transform: scale(1.05);
  }

  &:focus {
    outline: 3px solid #f2dede; /* Destaque ao focar no botão */
  }
`;

export const ModalContent = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 1);
  text-align: center;

  h2 {
    margin-top: 0;
    font-size: 22px;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors['base-text']};
    margin-bottom: 20px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const ConfirmButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #d9534f; /* Vermelho padrão para confirmar exclusão */
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #c9302c; /* Tom mais escuro ao passar o mouse */
    transform: scale(1.05);
  }

  &:focus {
    outline: 3px solid #f2dede; /* Destaque ao focar no botão */
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['base-border']};
  color: ${({ theme }) => theme.colors['base-text']};
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
    transform: scale(1.05);
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors['base-border']};
  }
`;
