import { Request, Response } from 'express';
import { supabase } from '../utils/supabaseClient';

export const listarExames = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('exames')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

export const detalharExame = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('exames')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

export const listarAgendamentosPorExame = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('agendamentos')
    .select('*')
    .eq('exame_id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

export const pesquisarExames = async (req: Request, res: Response) => {
  const { nome, especialidade } = req.query;
  let query = supabase.from('exames').select('*');

  if (nome) {
    query = query.ilike('nome', `%${nome}%`);
  }

  if (especialidade) {
    query = query.ilike('especialidade_medica', `%${especialidade}%`);
  }

  const { data, error } = await query;
  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};