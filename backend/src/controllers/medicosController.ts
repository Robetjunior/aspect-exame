import { Request, Response } from 'express';
import { supabase } from '../utils/supabaseClient';

// Lista todos os médicos
export const listarMedicos = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('medicos')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

// Detalha um médico específico por ID
export const detalharMedico = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('medicos')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

export const listarMedicosPorEspecialidade = async (req: Request, res: Response) => {
  const { especialidade } = req.params;

  const { data, error } = await supabase
    .from('medicos')
    .select('*')
    .eq('especialidade', especialidade);

  if (error) {
    console.error('Erro ao buscar médicos:', error.message);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

export const listarDisponibilidadesPorMedico = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Obtém todas as disponibilidades do médico
    const { data: disponibilidades, error: dispError } = await supabase
      .from('disponibilidade_medica')
      .select('*')
      .eq('medico_id', id);

    if (dispError) {
      throw dispError;
    }

    // Obtém todos os agendamentos do médico
    const { data: agendamentos, error: agendError } = await supabase
      .from('agendamentos')
      .select('*')
      .eq('medico_id', id);

    if (agendError) {
      throw agendError;
    }

    // Converte os agendamentos para um conjunto de datas com horários agendados
    const datasAgendadas = new Set(
      agendamentos.map((ag) => new Date(ag.data_hora).toDateString())
    );

    // Filtra as disponibilidades removendo as datas que possuem qualquer horário já agendado
    const disponibilidadesFiltradas = disponibilidades.filter((disp) => {
      const dataDisponibilidade = new Date(disp.data_hora_inicio).toDateString();
      return !datasAgendadas.has(dataDisponibilidade);
    });

    return res.status(200).json(disponibilidadesFiltradas);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Lista agendamentos de um médico específico por ID
export const listarAgendamentosPorMedico = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('agendamentos')
    .select('*')
    .eq('medico_id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

// Pesquisa médicos por nome ou especialidade
export const pesquisarMedicos = async (req: Request, res: Response) => {
  const { nome, especialidade } = req.query;
  console.log('Parâmetros de consulta:', { nome, especialidade });

  let query = supabase.from('medicos').select('*');

  if (nome) {
    query = query.ilike('nome', `%${nome}%`);
  }

  if (especialidade) {
    query = query.ilike('especialidade', `%${especialidade}%`);
  }

  const { data, error } = await query;
  console.log('Resultado da consulta:', data);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};
