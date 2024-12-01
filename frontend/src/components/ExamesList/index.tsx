import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { ListContainer, List, ListItem, ItemText, SearchInput } from './styles';

interface Exame {
  id: number;
  nome: string;
  especialidade_medica: string;
}

export const ExamesList: React.FC = () => {
  const [exames, setExames] = useState<Exame[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredExames, setFilteredExames] = useState<Exame[]>([]);

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
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.length >= 3) {
        const fetchFilteredExames = async () => {
          try {
            const response = await api.get(`/exames/search?nome=${searchTerm}`);
            setFilteredExames(response.data);
            console.log(response.data)
          } catch (error) {
            console.error('Erro ao buscar exames filtrados:', error);
          }
        };
        fetchFilteredExames();
      } else {
        setFilteredExames(exames);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, exames]);

  return (
    <ListContainer>
      <SearchInput
        type="text"
        placeholder="Buscar por nome ou especialidade"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <List>
        {filteredExames.map((exame) => (
          <ListItem key={exame.id}>
            <ItemText>
              <strong>{exame.nome}</strong> - {exame.especialidade_medica}
            </ItemText>
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
};
