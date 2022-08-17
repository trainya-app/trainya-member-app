import { Dispatch, SetStateAction } from 'react';

export interface ThemeContext {
  colorMode: 'light' | 'dark';
  setColorMode: Dispatch<SetStateAction<'light' | 'dark'>>;
}
