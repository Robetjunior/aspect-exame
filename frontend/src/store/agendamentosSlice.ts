import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Agendamento {
  id: number;
  exameId: number;
  dataHora: string;
  observacoes?: string;
}

interface AgendamentosState {
  lista: Agendamento[];
}

const initialState: AgendamentosState = {
  lista: [],
};

const agendamentosSlice = createSlice({
  name: 'agendamentos',
  initialState,
  reducers: {
    adicionarAgendamento: (state, action: PayloadAction<Agendamento>) => {
      state.lista.push(action.payload);
    },
    removerAgendamento: (state, action: PayloadAction<number>) => {
      state.lista = state.lista.filter(ag => ag.id !== action.payload);
    },
    setAgendamentos: (state, action: PayloadAction<Agendamento[]>) => {
      state.lista = action.payload;
    },
  },
});

export const { adicionarAgendamento, removerAgendamento, setAgendamentos } = agendamentosSlice.actions;
export default agendamentosSlice.reducer;
