import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removerAgendamento } from '../../store/agendamentosSlice';
import api from '../../services/api';
import { Button, Container } from './styles';

interface Agendamento {
  id: number;
  exame: {
    nome: string;
  };
  data_hora: string;
  observacoes?: string;
}

export const AgendamentosList: React.FC = () => {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const response = await api.get('/agendamentos');
        setAgendamentos(response.data);
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
    };
    fetchAgendamentos();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/agendamentos/${id}`);
      setAgendamentos(agendamentos.filter((agendamento) => agendamento.id !== id));
      dispatch(removerAgendamento(id));
    } catch (error) {
      console.error('Erro ao excluir agendamento:', error);
    }
  };

  return (
    <Container>
      <ul>
        {agendamentos.map((agendamento) => (
          <li key={agendamento.id}>
            <p>
              <strong>Exame:</strong> {agendamento.exame.nome}
            </p>
            <p>
              <strong>Data e Hora:</strong> {new Date(agendamento.data_hora).toLocaleString()}
            </p>
            {agendamento.observacoes && (
              <p>
                <strong>Observações:</strong> {agendamento.observacoes}
              </p>
            )}
            <Button onClick={() => handleDelete(agendamento.id)}>Excluir</Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};
