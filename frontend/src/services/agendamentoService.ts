import api from './api';

interface Agendamento {
  exameId: number;
  dataHora: string;
  observacoes?: string;
}

export const listarAgendamentos = async () => {
  const response = await api.get('/agendamentos');
  return response.data;
};

export const criarAgendamento = async (agendamento: Agendamento) => {
  const response = await api.post('/agendamentos', agendamento);
  return response.data;
};

export const excluirAgendamento = async (id: number) => {
  await api.delete(`/agendamentos/${id}`);
};
