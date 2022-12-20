import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function Groups() {
  return (
    <View style={styles.container}>
      <Text>Groups</Text>
      <StatusBar style="auto" />
    </View>
  );
}
