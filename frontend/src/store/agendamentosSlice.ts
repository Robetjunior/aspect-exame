import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { criarAgendamento } from '../services/agendamentoService';

interface Agendamento {
  id: number;
  exameId: number;
  dataHora: string;
  observacoes?: string;
}

interface AgendamentosState {
  lista: Agendamento[];
  carregado: boolean;
  erro: string | null;
}

const initialState: AgendamentosState = {
  lista: [],
  carregado: false,
  erro: null,
};

const agendamentosSlice = createSlice({
  name: 'agendamentos',
  initialState,
  reducers: {
    setAgendamentos: (state, action: PayloadAction<Agendamento[]>) => {
      state.lista = action.payload;
      state.carregado = true;
    },
    removerAgendamento: (state, action: PayloadAction<number>) => {
      state.lista = state.lista.filter(ag => ag.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(criarAgendamento.pending, (state) => {
        state.erro = null;
      })
      .addCase(criarAgendamento.fulfilled, (state, action) => {
        state.lista.push(action.payload);
      })
      .addCase(criarAgendamento.rejected, (state, action) => {
        state.erro = action.payload as string;
      });
  },
});

export const { setAgendamentos, removerAgendamento } = agendamentosSlice.actions;
export default agendamentosSlice.reducer;
