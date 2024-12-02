import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Modal from 'react-modal';
import { ClipLoader } from 'react-spinners'; 
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useAppDispatch } from '../../hooks';
import { setAgendamentos, removerAgendamento } from '../../store/agendamentosSlice';
import {
  ListContainer,
  List,
  ListItem,
  ItemText,
  DeleteButton,
  ModalContent,
  ModalActions,
  ConfirmButton,
  CancelButton,
  NoAgendamentosMessage
} from './styles';

Modal.setAppElement('#root');

export const AgendamentosList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { lista, carregado } = useSelector((state: RootState) => state.agendamentos);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [agendamentoToDelete, setAgendamentoToDelete] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      if (!carregado) {
        try {
          setLoading(true);
          const response = await api.get('/agendamentos');

          dispatch(setAgendamentos(response.data));
        } catch (error) {
          console.error('Erro ao buscar agendamentos:', error);
          toast.error('Erro ao carregar agendamentos');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAgendamentos();
  }, [carregado, dispatch]);

  const openModal = (id: number) => {
    setAgendamentoToDelete(id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setAgendamentoToDelete(null);
  };

  const handleDelete = async () => {
    if (agendamentoToDelete !== null) {
      setLoading(true);
      try {
        await api.delete(`/agendamentos/${agendamentoToDelete}`);
        dispatch(removerAgendamento(agendamentoToDelete));
        toast.success('Agendamento deletado!');
        closeModal();
      } catch (error) {
        console.error('Erro ao excluir agendamento:', error);
        toast.error('Erro ao excluir agendamento');
      } finally {
        setLoading(false);
      }
    }
  };

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options).replace(',', ' às');
  };

  return (
    <ListContainer>
      {loading ? (
        <p>Carregando agendamentos...</p>
      ) : lista.length === 0 ? (
        <NoAgendamentosMessage>
          Não há agendamentos realizados.
        </NoAgendamentosMessage>
      ) : (
        <List>
          {lista.map((agendamento) => (
            <ListItem key={agendamento.id}>
              <div>
                <ItemText>
                  <strong>Exame:</strong> {agendamento.exame.nome || 'Nome do exame não disponível'}
                </ItemText>
                <ItemText>
                  <strong>Data da consulta:</strong> {formatDate(agendamento.data_hora)}
                </ItemText>
                {agendamento.observacoes && (
                  <ItemText>
                    <strong>Observações:</strong> {agendamento.observacoes}
                  </ItemText>
                )}
              </div>
              <DeleteButton onClick={() => openModal(agendamento.id)} disabled={loading}>
                {loading ? <ClipLoader size={20} color="#fff" /> : 'Excluir'}
              </DeleteButton>
            </ListItem>
          ))}
        </List>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmação de Exclusão"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <ModalContent>
          <h2>Confirmação de Exclusão</h2>
          <p>Você tem certeza que deseja excluir este agendamento?</p>
          <ModalActions>
            <ConfirmButton onClick={handleDelete} disabled={loading}>
              {loading ? <ClipLoader size={20} color="#fff" /> : 'Sim'}
            </ConfirmButton>
            <CancelButton onClick={closeModal} disabled={loading}>
              Não
            </CancelButton>
          </ModalActions>
        </ModalContent>
      </Modal>
    </ListContainer>
  );
};
