import { Loading } from '@components/Loading';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import theme from '@theme/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <NewGroup /> : <Loading />}
      </ThemeProvider>
    </>
  );
}
