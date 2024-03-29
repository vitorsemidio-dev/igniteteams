import AsyncStorage from '@react-native-async-storage/async-storage';
import { playersGetByGroup } from '@storage/player/playersGetByGroup';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  try {
    const storedPlayers = await playersGetByGroup(group);
    const playerAlreadyExists = storedPlayers.some(
      (player) => player.name === newPlayer.name,
    );
    if (playerAlreadyExists) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui.');
    }
    const storage = JSON.stringify([...storedPlayers, newPlayer]);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
