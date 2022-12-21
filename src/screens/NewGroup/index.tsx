import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/createGroup';
import { AppError } from '@utils/AppError';
import { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  const handleNew = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Nova Turma', 'Informe o nome da turma.');
      }
      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Turma', error.message);
      } else {
        Alert.alert('Nova Turma', 'Não foi possível criar uma nova turma.');
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button
          title="Criar"
          style={{
            marginTop: 16,
          }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}
