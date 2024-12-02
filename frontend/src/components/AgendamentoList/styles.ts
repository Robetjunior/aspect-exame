import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: #ffffff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: 0 auto;
  border: 2px solid #a3d9a5; /* Bordas padrão */
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
  border: 2px solid #a3d9a5;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #e6ffe6;
    border-color: #006400; /* Destaque no hover */
  }

  &:active {
    background-color: #cfe6cf;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemText = styled.p`
  margin: 0;
  font-size: 18px;
  color: #333;
  line-height: 1.5;

  strong {
    color: #006400; /* Destaque para textos importantes */
  }
`;

export const DeleteButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #d9534f;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #c9302c;
    transform: scale(1.05);
  }

  &:focus {
    outline: 3px solid #f2dede;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ModalContent = styled.div`
  padding: 32px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 2px solid #a3d9a5;

  h2 {
    margin-top: 0;
    font-size: 22px;
    color: #000000;
  }

  p {
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
`;

export const ConfirmButton = styled.button`
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  background-color: #d9534f;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #c9302c;
    transform: scale(1.05);
  }

  &:focus {
    outline: 3px solid #f2dede;
  }
`;

export const CancelButton = styled.button`
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  background-color: #a3d9ab;
  color: #006400;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e6ffe6;
    transform: scale(1.05);
  }

  &:focus {
    outline: 3px solid #a3d9a5;
  }
`;

export const NoAgendamentosMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-top: 20px;
  font-style: italic;
`;
