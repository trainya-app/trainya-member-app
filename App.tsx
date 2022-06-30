import { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

import { ThemeProvider } from 'styled-components/native';
import { ThemeContextProvider } from './src/contexts/ThemeContext';

import theme from './src/global/styles/theme';
import { Login } from './src/screens/Login';

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  // TODO: grab the async storage
  const colorMode = 'dark';

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Montserrat_500Medium,
          Montserrat_600SemiBold,
          Montserrat_700Bold,
          Montserrat_800ExtraBold,
          Montserrat_900Black,
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    })();
  }, []);

  if (!appIsReady) {
    return null;
  }
  return (
    <ThemeContextProvider>
      <StatusBar backgroundColor={theme[colorMode].colors.blue[500]} />
      <ThemeProvider theme={theme[colorMode]}>
        <Login />
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

export default App;
