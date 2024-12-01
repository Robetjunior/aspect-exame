import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Exame {
  id: number;
  nome: string;
  especialidadeMedica: string;
}

const ListaExames: React.FC = () => {
  const [exames, setExames] = useState<Exame[]>([]);

  useEffect(() => {
    const fetchExames = async () => {
      const response = await api.get('/exames');
      setExames(response.data);
    };
    fetchExames();
  }, []);

  return (
    <ul>
      {exames.map(exame => (
        <li key={exame.id}>
          {exame.nome} - {exame.especialidadeMedica}
        </li>
      ))}
    </ul>
  );
};

export default ListaExames;
