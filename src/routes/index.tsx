import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

export function Routes() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
