import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

interface Agendamento {
  id: number;
  exame_id: number;
  medico_id: number;
  data_hora: string;
  observacoes: string;
}

interface AgendamentosContextData {
  agendamentos: Agendamento[];
  adicionarAgendamento: (agendamento: Omit<Agendamento, 'id'>) => Promise<void>;
  removerAgendamento: (id: number) => Promise<void>;
}

const AgendamentosContext = createContext<AgendamentosContextData | undefined>(undefined);

export const AgendamentosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

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

  const adicionarAgendamento = async (novoAgendamento: Omit<Agendamento, 'id'>) => {
    try {
      const response = await api.post('/agendamentos', novoAgendamento);
      setAgendamentos((prev) => [...prev, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar agendamento:', error);
    }
  };

  const removerAgendamento = async (id: number) => {
    try {
      await api.delete(`/agendamentos/${id}`);
      setAgendamentos((prev) => prev.filter((agendamento) => agendamento.id !== id));
    } catch (error) {
      console.error('Erro ao remover agendamento:', error);
    }
  };

  useEffect(() => {
    console.log('Updated agendamentos:', agendamentos);
  }, [agendamentos]);

  return (
    <AgendamentosContext.Provider value={{ agendamentos, adicionarAgendamento, removerAgendamento }}>
      {children}
    </AgendamentosContext.Provider>
  );
};

export const useAgendamentos = (): AgendamentosContextData => {
  const context = useContext(AgendamentosContext);
  if (!context) {
    throw new Error('useAgendamentos deve ser usado dentro de um AgendamentosProvider');
  }
  return context;
};
