/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, Dispatch, SetStateAction } from 'react';
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
}: Props) => (
  <ThemeContext.Provider value={{ colorMode, setColorMode }}>
    {children}
  </ThemeContext.Provider>
);
