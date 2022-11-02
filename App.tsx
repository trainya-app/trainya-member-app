import { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components/native';
import { AuthContextProvider } from './src/contexts/AuthContext';
import { ThemeContextProvider } from './src/contexts/ThemeContext';

import theme from './src/global/styles/theme';
import { Routes } from './src/routes';
import { Splash } from './src/screens/Splash';
import { WorkoutContextProvider } from './src/contexts/WorkoutContext';

const App = () => {
  const [colorMode, setColorMode] = useState('light' as 'light' | 'dark');
  const [appIsReady, setAppIsReady] = useState(false);
  // TODO: grab the async storage

  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <Splash />;
  }
  return (
    <AuthContextProvider>
      <ThemeContextProvider colorMode={colorMode} setColorMode={setColorMode}>
        <ThemeProvider theme={theme[colorMode]}>
          <WorkoutContextProvider>
            <StatusBar backgroundColor="#000" translucent />
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </WorkoutContextProvider>
        </ThemeProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};

export default App;
