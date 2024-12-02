import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setExames } from '../../store/examesSlice';
import api from '../../services/api';
import Skeleton from '@mui/material/Skeleton';
import { Container, List, ListItem, ItemText, SearchInput } from './styles';

interface Exame {
  id: number;
  nome: string;
  especialidade_medica: string;
}

export const ExamesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { lista, carregado } = useAppSelector((state) => state.exames);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredExames, setFilteredExames] = useState<Exame[]>([]);
  const [loading, setLoading] = useState<boolean>(!carregado); // Inicializa com base em `carregado`
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Evita duplicação do fetch ao carregar a lista
  useEffect(() => {
    console.log('Carregado:', carregado);
    console.log('Lista de exames:', lista);

    const fetchExames = async () => {
      if (!carregado) {
        try {
          setLoading(true);
          const response = await api.get('/exames');
          dispatch(setExames(response.data));
          console.log('Exames carregados com sucesso');
        } catch (error) {
          console.error('Erro ao buscar exames:', error);
        } finally {
          setLoading(false);
        }
      } else {
        // Atualiza os exames filtrados caso já estejam carregados
        setFilteredExames(lista);
        setLoading(false); // Certifica-se de que o Skeleton não é exibido
      }
    };

    fetchExames();
  }, [carregado, lista, dispatch]);

  // Filtra os exames com base no termo de busca
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
      setFilteredExames(lista);
    }
  }, [searchTerm, lista]);

  // Coloca o foco no input ao carregar o componente
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <Container>
      <SearchInput
        ref={searchInputRef}
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
