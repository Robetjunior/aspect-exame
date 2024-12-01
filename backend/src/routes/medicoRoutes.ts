import { Router } from 'express';
import {
  listarMedicos,
  detalharMedico,
  listarAgendamentosPorMedico,
  pesquisarMedicos,
  listarDisponibilidadesPorMedico,
  listarMedicosPorEspecialidade
} from '../controllers/medicosController';

const router = Router();

// Rota para listar médicos por especialidade
router.get('/especialidade/:especialidade', listarMedicosPorEspecialidade);

// Rota para listar todos os médicos
router.get('/', listarMedicos);

// Rota para detalhar um médico específico por ID
router.get('/:id', detalharMedico);

// Rota para listar disponibilidades de um médico específico por ID
router.get('/:id/disponibilidades', listarDisponibilidadesPorMedico);

// Rota para listar agendamentos de um médico específico por ID
router.get('/:id/agendamentos', listarAgendamentosPorMedico);

// Rota para pesquisar médicos por nome ou especialidade
router.get('/pesquisa', pesquisarMedicos);

export default router;
