import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ExamesList } from '../../components/ExamesList';
import { AgendamentoForm } from '../../components/AgendamentoForm';
import { AgendamentosList } from '../../components/AgendamentoList';
import { Container, Section, Card, BackButton } from './styles';
import { defaultTheme } from '../../styles/themes/default';
import { FaArrowLeft } from 'react-icons/fa';

export function Home() {
  const [visibleSection, setVisibleSection] = useState<'exames' | 'form' | 'agendamentos' | null>(null);

  const renderContent = () => {
    switch (visibleSection) {
      case 'exames':
        return <ExamesList />;
      case 'form':
        return <AgendamentoForm />;
      case 'agendamentos':
        return <AgendamentosList />;
      default:
        return (
          <div>
            <Card onClick={() => setVisibleSection('exames')}>Exames Disponíveis</Card>
            <Card onClick={() => setVisibleSection('form')}>Agendar Novo Exame</Card>
            <Card onClick={() => setVisibleSection('agendamentos')}>Agendamentos</Card>
          </div>
        );
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        {visibleSection && (
          <BackButton onClick={() => setVisibleSection(null)}>
            <FaArrowLeft />
            Voltar
          </BackButton>
        )}
        <Section>{renderContent()}</Section>
      </Container>
    </ThemeProvider>
  );
}
