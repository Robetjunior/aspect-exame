import React, { useState } from 'react';
import api from '../../services/api';
import Modal from 'react-modal';
import { useAgendamentos } from '../../contexts/AgendamentosContext';
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
  const { agendamentos, removerAgendamento } = useAgendamentos();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [agendamentoToDelete, setAgendamentoToDelete] = useState<number | null>(null);

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
      try {
        await api.delete(`/agendamentos/${agendamentoToDelete}`);
        removerAgendamento(agendamentoToDelete);
        closeModal();
      } catch (error) {
        console.error('Erro ao excluir agendamento:', error);
      }
    }
  };

  const formatDate = (dateString: string) => {
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
      {agendamentos.length === 0 ? (
        <NoAgendamentosMessage>
          Não há agendamentos realizados.
        </NoAgendamentosMessage>
      ) : (
        <List>
          {agendamentos.map((agendamento) => (
            <ListItem key={agendamento.id}>
              <div>
                <ItemText>
                  <strong>Exame:</strong> {agendamento.exame?.nome || 'Nome do exame não disponível'}
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
              <DeleteButton onClick={() => openModal(agendamento.id)}>Excluir</DeleteButton>
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
            <ConfirmButton onClick={handleDelete}>Sim</ConfirmButton>
            <CancelButton onClick={closeModal}>Não</CancelButton>
          </ModalActions>
        </ModalContent>
      </Modal>
    </ListContainer>
  );
};
