import { Groups } from '@screens/Groups';
import theme from '@theme/index';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Groups />
      </ThemeProvider>
    </>
  );
}
