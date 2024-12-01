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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-weight: bold;
    font-size: 20px;
    color: #000000;
  }

  input,
  select,
  textarea {
    padding: 16px;
    border: 2px solid #a3d9a5;
    border-radius: 8px;
    font-size: 18px;
    line-height: 1.5;
  }

  textarea {
    resize: vertical;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  padding: 20px 40px;
  border: none;
  border-radius: 12px;
  background-color: #006400;
  color: #ffffff;
  cursor: pointer;
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004b00;
  }

  &:active {
    background-color: #003300;
  }

  &:disabled {
    background-color: #bbb;
    cursor: not-allowed;
  }
`;

export const CalendarContainer = styled.div`
  margin-top: 24px;

  .react-calendar {
    border: 2px solid #a3d9a5;
    border-radius: 12px;
    width: 100%;

    .react-calendar__tile--now {
      background: #e6ffe6;
      color: #000000;
      border-radius: 8px;
    }

    .react-calendar__tile--active {
      background: #006400;
      color: #ffffff;
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
      color: #000000;
    }

    button {
      font-size: 16px;
    }
  }
`;

export const TimeSlotsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;

  button {
    padding: 16px 22px;
    border: 2px solid #a3d9a5;
    border-radius: 8px;
    background-color: #f0f0f0;
    color: #000000;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
      background-color: #e6ffe6;
      color: #006400;
    }

    &.selected {
      background-color: #006400;
      color: #ffffff;
      border: 2px solid #004b00;
    }
  }
`;
