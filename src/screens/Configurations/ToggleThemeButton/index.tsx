import { useState } from 'react';
import { Dimensions } from 'react-native';
import { useCustomTheme } from '../../../hooks/useCustomTheme';
import LightThemeIcon from '../../../assets/light_theme_icon.svg';
import DarkThemeIcon from '../../../assets/dark_theme_icon.svg';

import {
  Container,
  ButtonContainer,
  ButtonIndicator,
  ButtonIcon,
  ButtonIconContainer,
} from './styles';

export const ToggleThemeButton = ({ size, onPress, isActive }) => {
  const { colorMode, handleToggleColorMode } = useCustomTheme();
  const [theme, setTheme] = useState(colorMode);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
    handleToggleColorMode();
  }

  function getSpacingLeft() {
    const spacingLeft = Dimensions.get('window').width;
    return spacingLeft > 400 ? '43%' : '39%';
  }

  return (
    <Container onPress={handleToggleTheme}>
      <ButtonContainer>
        <ButtonIndicator
          from={{ left: theme === 'light' ? getSpacingLeft() : '0%' }}
          animate={{ left: theme === 'light' ? '0%' : getSpacingLeft() }}
          transition={{
            type: 'timing',
            duration: 200,
          }}
        >
          {colorMode === 'light' ? <LightThemeIcon /> : <DarkThemeIcon />}
        </ButtonIndicator>
        <ButtonIconContainer>
          {colorMode !== 'light' && <LightThemeIcon />}
        </ButtonIconContainer>
        <ButtonIconContainer>
          {colorMode !== 'dark' && <DarkThemeIcon />}
        </ButtonIconContainer>
      </ButtonContainer>
    </Container>
  );
};
