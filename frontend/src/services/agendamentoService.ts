import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

interface Agendamento {
  exameId: number;
  medicoId: number;
  dataHora: string;
  observacoes?: string;
}

// Função para listar agendamentos - sem alteração
export const listarAgendamentos = async () => {
  const response = await api.get('/agendamentos');
  return response.data;
};

// Função para excluir agendamento - sem alteração
export const excluirAgendamento = async (id: number) => {
  await api.delete(`/agendamentos/${id}`);
};

// Função assíncrona para criar agendamento utilizando createAsyncThunk
export const criarAgendamento = createAsyncThunk(
  'agendamentos/criar', // Ação para identificar a operação no Redux
  async (agendamento: Agendamento, { rejectWithValue }) => {
    try {
      // Envia a requisição para criar o agendamento
      const response = await api.post('/agendamentos', agendamento);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Agora é seguro acessar 'error.message'
        return rejectWithValue(error.message);
      } else {
        // Trate casos onde 'error' não é uma instância de 'Error'
        return rejectWithValue('Erro desconhecido');
      }
    }
  }
);