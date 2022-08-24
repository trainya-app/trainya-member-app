import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/routes/app.routes';

import { ThemeContextProvider } from './src/contexts/ThemeContext';

import theme from './src/global/styles/theme';

const App = () => {
  const [colorMode, setColorMode] = useState('light' as 'light' | 'dark');
  const [appIsReady, setAppIsReady] = useState(false);
  // TODO: grab the async storage

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
    <ThemeContextProvider colorMode={colorMode} setColorMode={setColorMode}>
      <ThemeProvider theme={theme[colorMode]}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

export default App;
