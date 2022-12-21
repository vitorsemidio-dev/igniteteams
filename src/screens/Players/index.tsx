import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { HeaderList, NumberOfPlayers } from '@components/Filter/styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { PlayerCard } from '@components/PlayerCard';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Form } from './styles';

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState<string>('Time A');
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayer, setNewPlayer] = useState<string>('');

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const handleNewPlayer = () => {
    if (newPlayer === '') return;
    if (players.includes(newPlayer)) return;
    setPlayers([...players, newPlayer]);
    setNewPlayer('');
  };

  const removePlayer = (player: string) => {
    setPlayers(players.filter((item) => item !== player));
  };

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayer}
          value={newPlayer}
        />
        <ButtonIcon icon="add" onPress={handleNewPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => removePlayer(item)} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
    </Container>
  );
}
