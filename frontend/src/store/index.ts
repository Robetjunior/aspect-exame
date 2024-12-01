import { configureStore } from '@reduxjs/toolkit';
import agendamentosReducer from './agendamentosSlice';

export const store = configureStore({
  reducer: {
    agendamentos: agendamentosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
