import { Router } from 'express';
import { listarExames, detalharExame, listarAgendamentosPorExame, pesquisarExames } from '../controllers/examesController';

const router = Router();

router.get('/', listarExames);
router.get('/search', pesquisarExames); 
router.get('/:id', detalharExame);
router.get('/:id/agendamentos', listarAgendamentosPorExame);

export default router;
