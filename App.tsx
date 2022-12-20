import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Groups } from '@screens/Groups';
import { Loading } from '@screens/Loading';
import theme from '@theme/index';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        {fontsLoaded ? <Groups /> : <Loading />}
      </ThemeProvider>
    </>
  );
}
