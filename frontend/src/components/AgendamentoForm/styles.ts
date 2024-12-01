// src/components/AgendamentoForm/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card'] || '#f9f9f9'};
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    font-weight: bold;
    font-size: 18px;
    color: ${({ theme }) => theme.colors['base-subtitle'] || '#333'};
  }

  input,
  select,
  textarea {
    padding: 14px;
    border: 1px solid ${({ theme }) => theme.colors['base-border'] || '#ccc'};
    border-radius: 8px;
    font-size: 16px;
    line-height: 1.5;
  }

  textarea {
    resize: vertical;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  background-color: #0066cc; /* Azul amigável */
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004999; /* Azul mais escuro */
  }

  &:active {
    background-color: #003366;
  }

  &:disabled {
    background-color: #bbb;
    cursor: not-allowed;
  }
`;

export const CalendarContainer = styled.div`
  margin-top: 20px;

  .react-calendar {
    border: 2px solid ${({ theme }) => theme.colors['base-border'] || '#ccc'};
    border-radius: 12px;
    width: 100%;

    .react-calendar__tile--now {
      background: ${({ theme }) => theme.colors.primaryLight || '#e6f7ff'};
      color: ${({ theme }) => theme.colors['base-title'] || '#333'};
      border-radius: 8px;
    }

    .react-calendar__tile--active {
      background: ${({ theme }) => theme.colors.primaryDark || '#0066cc'};
      color: white;
      border-radius: 8px;
    }

    .react-calendar__tile:disabled {
      background-color: transparent;
      color: #ccc;
      pointer-events: none;
    }

    .react-calendar__month-view__weekdays {
      font-weight: bold;
      font-size: 18px;
      color: ${({ theme }) => theme.colors['base-title'] || '#666'};
    }

    button {
      font-size: 16px;
    }
  }
`;

export const TimeSlotsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;

  button {
    padding: 14px 20px;
    border: 2px solid ${({ theme }) => theme.colors['base-border'] || '#ccc'};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors['base-button'] || '#f0f0f0'};
    color: ${({ theme }) => theme.colors['base-title'] || '#333'};
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight || '#e6f7ff'};
      color: ${({ theme }) => theme.colors.primaryDark || '#0066cc'};
    }

    &.selected {
      background-color: ${({ theme }) => theme.colors.primary || '#0066cc'};
      color: white;
      border: 2px solid ${({ theme }) => theme.colors.primaryDark || '#004999'};
    }
  }
`;