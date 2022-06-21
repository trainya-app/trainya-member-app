import { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeContext as ThemeContextProps } from '../types/ThemeContext';

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState('light' as 'light' | 'dark');

  useEffect(() => {
    // Grab the color mode of async storage
  }, []);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  )

}