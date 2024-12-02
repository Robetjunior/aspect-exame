import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, Form, FormGroup, Button, CalendarContainer, TimeSlotsContainer } from './styles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useAgendamentos } from '../../contexts/AgendamentosContext';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';

interface Exame {
  id: number;
  nome: string;
  especialidade: string;
  especialidade_medica: string;
}

interface Medico {
  id: number;
  nome: string;
  especialidade: string;
}

interface Disponibilidade {
  data_hora_inicio: string;
  data_hora_fim: string;
}

export const AgendamentoForm: React.FC = () => {
  const [exames, setExames] = useState<Exame[]>([]);
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [disponibilidades, setDisponibilidades] = useState<Disponibilidade[]>([]);
  const [exameId, setExameId] = useState<number | ''>('');
  const [medicoId, setMedicoId] = useState<number | ''>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [observacoes, setObservacoes] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { adicionarAgendamento } = useAgendamentos();
  
  useEffect(() => {
    const fetchExames = async () => {
      try {
        const response = await api.get('/exames');
        setExames(response.data);
      } catch (error) {
        console.error('Erro ao buscar exames:', error);
      }
    };
    fetchExames();
  }, []);

  useEffect(() => {
    if (exameId) {
      const exameSelecionado = exames.find((exame) => exame.id === Number(exameId));
      if (exameSelecionado) {
        const fetchMedicos = async () => {
          try {
            const response = await api.get(
              `/medicos/especialidade/${encodeURIComponent(exameSelecionado.especialidade_medica)}`
            );
            setMedicos(response.data);
          } catch (error) {
            console.error('Erro ao buscar médicos por especialidade:', error);
          }
        };
        fetchMedicos();
      }
    } else {
      setMedicos([]);
    }
  }, [exameId, exames]);

  useEffect(() => {
    if (medicoId) {
      const fetchDisponibilidades = async () => {
        try {
          const response = await api.get(`/medicos/${medicoId}/disponibilidades`);
          const disponibilidadesData = response.data;
          setDisponibilidades(disponibilidadesData);
          if (disponibilidadesData.length > 0) {
            const today = new Date();
            const closestDate = disponibilidadesData
              .map((disp) => new Date(disp.data_hora_inicio))
              .filter((date) => date >= today)
              .sort((a, b) => a.getTime() - b.getTime())[0];
            if (closestDate) {
              setSelectedDate(closestDate);
            }
          }
        } catch (error) {
          console.error('Erro ao buscar disponibilidades:', error);
        }
      };
      fetchDisponibilidades();
    } else {
      setDisponibilidades([]);
      setSelectedDate(null);
    }
  }, [medicoId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!exameId || !medicoId || !selectedDate || !selectedTime) {
        toast.info('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    setLoading(true);
    try {
        const data_hora = new Date(selectedDate);
        const [hours, minutes] = selectedTime.split(':').map(Number);
        data_hora.setHours(hours, minutes);

        const novoAgendamento = {
            exame_id: exameId,
            medico_id: medicoId,
            data_hora: data_hora.toISOString(),
            observacoes,
        };

        await adicionarAgendamento(novoAgendamento);
        toast.success('Agendamento criado com sucesso!');
        setExameId('');
        setMedicoId('');
        setSelectedDate(null);
        setSelectedTime('');
        setObservacoes('');
    } catch (error) {
        console.error('Erro ao criar agendamento:', error);
        toast.error('Erro ao criar agendamento. Tente novamente.');
    } finally {
      setLoading(false);
    }
};

  const handleExameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedExameId = Number(e.target.value);
    setExameId(selectedExameId);
    setMedicoId('');
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const isDateAvailable = (date: Date) => {
    const normalizedDate = date.toISOString().split('T')[0];
    return disponibilidades.some((disp) => {
      const start = new Date(disp.data_hora_inicio).toISOString().split('T')[0];
      const end = new Date(disp.data_hora_fim).toISOString().split('T')[0];
      return normalizedDate >= start && normalizedDate <= end;
    });
  };

  const getAvailableTimes = (date: Date) => {
    const normalizedDate = date.toISOString().split('T')[0];
    const today = new Date().toISOString().split('T')[0];
    return disponibilidades
      .filter((disp) => {
        const start = new Date(disp.data_hora_inicio);
        const startDate = start.toISOString().split('T')[0];
        if (startDate !== normalizedDate) return false;
        if (startDate === today) {
          const now = new Date();
          return start.getTime() > now.getTime();
        }
        return true;
      })
      .map((disp) => {
        const start = new Date(disp.data_hora_inicio);
        return start.toTimeString().split(' ')[0].substring(0, 5);
      });
  };

  const tileDisabled = ({ date }: { date: Date }) => {
    const today = new Date();
    return date < today || !isDateAvailable(date);
  };

  const tileClassName = ({ date }: { date: Date }) => {
    return isDateAvailable(date) ? 'available' : '';
  };
  
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="exame">Tipo de Exame:</label>
          <select
            id="exame"
            value={exameId}
            onChange={handleExameChange}
            required
          >
            <option value="">Selecione um exame</option>
            {exames.map((exame) => (
              <option key={exame.id} value={exame.id}>
                {exame.nome}
              </option>
            ))}
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="medico">Médico:</label>
          <select
            id="medico"
            value={medicoId}
            onChange={(e) => setMedicoId(Number(e.target.value))}
            required
          >
            <option value="">Selecione um médico</option>
            {medicos.map((medico) => (
              <option key={medico.id} value={medico.id}>
                {medico.nome}
              </option>
            ))}
          </select>
        </FormGroup>
        <FormGroup>
          <label>Data Disponível:</label>
          <CalendarContainer>
            <Calendar
              value={selectedDate}
              onChange={(date) => setSelectedDate(date as Date)}
              tileDisabled={tileDisabled}
              tileClassName={tileClassName}
            />
          </CalendarContainer>
        </FormGroup>
        {selectedDate && (
          <FormGroup>
            <label>Horários Disponíveis:</label>
            <TimeSlotsContainer>
              {getAvailableTimes(selectedDate).map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => handleTimeSelection(time)}
                  className={selectedTime === time ? 'selected' : ''}
                >
                  {time}
                </button>
              ))}
            </TimeSlotsContainer>
          </FormGroup>
        )}
        <FormGroup>
          <label htmlFor="observacoes">Observações:</label>
          <textarea
            id="observacoes"
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" disabled={loading}>
          {loading ? <ClipLoader size={20} color="#fff" /> : 'Agendar Exame'}
        </Button>      
      </Form>
    </Container>
  );
};
