import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ExamesList } from '../../components/ExamesList';
import { AgendamentoForm } from '../../components/AgendamentoForm';
import { AgendamentosList } from '../../components/AgendamentoList';
import { Container, Section } from './styles';
import { defaultTheme } from '../../styles/themes/default';

export function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Section>
          <h2>Exames Disponíveis</h2>
          <ExamesList />
        </Section>
        <Section>
          <h2>Agendar Novo Exame</h2>
          <AgendamentoForm />
        </Section>
        <Section>
          <h2>Agendamentos</h2>
          <AgendamentosList />
        </Section>
      </Container>
    </ThemeProvider>
  );
}
