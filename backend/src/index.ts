import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import examesRouter from './routes/exames';
import agendamentosRouter from './routes/agendamentos';
import medicoRouter from './routes/medicoRoutes';
import { supabase } from './utils/supabaseClient';

dotenv.config();

const app = express();

// Habilita o CORS para todas as rotas
app.use(cors());

app.use(express.json());

// Configuração das rotas
app.use('/api/exames', examesRouter);
app.use('/api/agendamentos', agendamentosRouter);
app.use('/api/medicos', medicoRouter)

// Middleware para tratar rotas não encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// Função para verificar a conexão com o banco de dados
async function checkDatabaseConnection() {
  const { data, error } = await supabase
    .from('agendamentos')
    .select('data_hora')
    .limit(1);

  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1); // Encerra o processo em caso de erro
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  }
}

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
checkDatabaseConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
