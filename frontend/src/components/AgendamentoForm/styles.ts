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
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
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