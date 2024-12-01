import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Skeleton from '@mui/material/Skeleton';
import { Container, List, ListItem, ItemText, SearchInput } from './styles';

interface Exame {
  id: number;
  nome: string;
  especialidade_medica: string;
}

export const ExamesList: React.FC = () => {
  const [exames, setExames] = useState<Exame[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredExames, setFilteredExames] = useState<Exame[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchExames = async () => {
      try {
        const response = await api.get('/exames');
        setExames(response.data);
        setFilteredExames(response.data);
      } catch (error) {
        console.error('Erro ao buscar exames:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchExames();
  }, []);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const fetchFilteredExames = async () => {
        try {
          setLoading(true);
          const response = await api.get(`/exames/search?nome=${searchTerm}`);
          setFilteredExames(response.data);
        } catch (error) {
          console.error('Erro ao buscar exames filtrados:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchFilteredExames();
    } else {
      setFilteredExames(exames);
    }
  }, [searchTerm, exames]);

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Buscar por nome ou especialidade"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <List>
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <ListItem key={index}>
              <Skeleton variant="text" animation="wave" height={40} width="80%" />
            </ListItem>
          ))
        ) : (
          filteredExames.map((exame) => (
            <ListItem key={exame.id}>
              <ItemText>
                <strong>{exame.nome}</strong> - {exame.especialidade_medica}
              </ItemText>
            </ListItem>
          ))
        )}
      </List>
    </Container>
  );
};
