import { configureStore } from '@reduxjs/toolkit';
import agendamentosReducer from './agendamentosSlice';
import examesReducer from './examesSlice';

export const store = configureStore({
  reducer: {
    agendamentos: agendamentosReducer,
    exames: examesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
