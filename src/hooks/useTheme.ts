import { useContext, useCallback } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import theme from '../global/styles/theme';

export const useTheme = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  const handleToggleColorMode = useCallback(() => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return { colorMode, theme: theme[colorMode], handleToggleColorMode };
};
