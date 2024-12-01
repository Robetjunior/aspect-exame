import { Request, Response } from 'express';
import { supabase } from '../utils/supabaseClient';

// Criar um novo agendamento
export const criarAgendamento = async (req: Request, res: Response) => {
  const { exame_id, medico_id, data_hora, observacoes } = req.body;

  // Validação básica dos dados recebidos
  if (!exame_id || !medico_id || !data_hora) {
    return res.status(400).json({ error: 'exame_id, medico_id e data_hora são obrigatórios.' });
  }

  // Verificar se já existe um agendamento para o mesmo médico no mesmo horário
  const { data: agendamentosExistentes, error: errorVerificacao } = await supabase
    .from('agendamentos')
    .select('*')
    .eq('medico_id', medico_id)
    .eq('data_hora', data_hora);

  if (errorVerificacao) {
    return res.status(500).json({ error: errorVerificacao.message });
  }

  if (agendamentosExistentes.length > 0) {
    return res.status(400).json({ error: 'Já existe um agendamento para este médico neste horário.' });
  }

  // Criar o novo agendamento
  const { data, error } = await supabase
    .from('agendamentos')
    .insert([{ exame_id, medico_id, data_hora, observacoes }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json(data);
};

export const atualizarAgendamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data_hora, observacoes } = req.body;

  const { data, error } = await supabase
    .from('agendamentos')
    .update({ data_hora, observacoes })
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

// Listar todos os agendamentos
export const listarAgendamentos = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('agendamentos')
    .select(`
      id,
      data_hora,
      observacoes,
      exame:exames (
        id,
        nome,
        especialidade_medica
      )
    `);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

export const listarAgendamentosPorData = async (req: Request, res: Response) => {
  const { data } = req.params;

  const { data: agendamentos, error } = await supabase
    .from('agendamentos')
    .select('*')
    .eq('data_hora', data);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(agendamentos);
};

// Excluir um agendamento existente
export const excluirAgendamento = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('agendamentos')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(204).send();
};
