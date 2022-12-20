import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard title="Turma React Native" />
      <GroupCard title="Turma React" />
      <GroupCard title="Turma Node" />
    </Container>
  );
}
