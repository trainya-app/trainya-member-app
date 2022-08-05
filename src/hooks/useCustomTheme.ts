import { useContext, useCallback } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const useCustomTheme = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  const handleToggleColorMode = useCallback(() => {
    // TODO: save in async storage
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return { colorMode, handleToggleColorMode };
};
