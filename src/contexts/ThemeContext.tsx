/* eslint-disable react/jsx-no-constructed-context-values */
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { ThemeContext as ThemeContextProps } from '../types/ThemeContext';

interface Props {
  children: ReactNode;
  colorMode: 'light' | 'dark';
  setColorMode: Dispatch<SetStateAction<'light' | 'dark'>>;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = ({
  children,
  colorMode,
  setColorMode,
}: Props) => {
  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem('@trainyaapp:theme', colorMode);
    })();
  }, [colorMode]);
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
