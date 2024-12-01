// src/components/AgendamentoForm/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: bold;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  input,
  select,
  textarea {
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    resize: vertical;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #28a745; /* Verde para indicar ação positiva */
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838; /* Tom mais escuro no hover */
  }

  &:active {
    background-color: #1e7e34; /* Tom ainda mais escuro no clique */
  }

  &:disabled {
    background-color: #6c757d; /* Cinza para estado desabilitado */
    cursor: not-allowed;
  }
`;

export const CalendarContainer = styled.div`
  margin-top: 20px;

  .react-calendar {
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    border-radius: 8px;
    width: 100%;

    .react-calendar__tile--now {
      background: ${({ theme }) => theme.colors.primaryLight};
      color: ${({ theme }) => theme.colors['base-title']};
      border-radius: 8px;
    }

    .react-calendar__tile--active {
      background: ${({ theme }) => theme.colors.primaryDark};
      color: white;
      border-radius: 8px;
    }

    .react-calendar__tile:disabled {
      background-color: transparent;
      color: #ccc;
      pointer-events: none;
    }
  }
`;

export const TimeSlotsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;

  button {
    padding: 10px 15px;
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['base-title']};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight};
      color: white;
    }

    &.selected {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      border: 1px solid ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;