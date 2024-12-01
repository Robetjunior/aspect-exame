// src/routes/agendamentos.ts
import { Router } from 'express';
import {
  criarAgendamento,
  listarAgendamentos,
  excluirAgendamento,
  atualizarAgendamento,
  listarAgendamentosPorData
} from '../controllers/agendamentosController';

const router = Router();

router.post('/', criarAgendamento);
router.get('/', listarAgendamentos);
router.delete('/:id', excluirAgendamento);
router.put('/:id', atualizarAgendamento);
router.get('/data/:data', listarAgendamentosPorData);

export default router;
