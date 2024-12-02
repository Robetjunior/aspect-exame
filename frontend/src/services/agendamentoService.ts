import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

export interface Agendamento {
  id?: number;
  exame_id: number;
  medicoId: number;
  dataHora: string;
  observacoes: string;
}

export interface BackendAgendamento {
  id?: number;
  exame_id: number;
  medico_id: number;
  data_hora: string;
  observacoes: string;
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
  'agendamentos/criarAgendamento',
  async (novoAgendamento: BackendAgendamento) => {
    const response = await api.post('/agendamentos', novoAgendamento);
    // Convert backend response to frontend format
    const agendamento: Agendamento = {
      id: response.data.id,
      exame_id: response.data.exame_id,
      medicoId: response.data.medico_id,
      dataHora: response.data.data_hora,
      observacoes: response.data.observacoes,
    };
    return agendamento;
  }
);