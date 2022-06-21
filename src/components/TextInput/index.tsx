import { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import theme from '../../global/styles/theme';
import { Container, InputText } from './styles';
// import { useTheme } from '../../'

interface TextInputProps {
  placeholder: string;
  onChangeText: (inputText: string) => void;
}

export const TextInput = ({ placeholder, onChangeText }: TextInputProps) => {
  // const theme = useContext(ThemeContext);
  // const colorMode = useTheme();


  return (
    <Container>
      <InputText
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray[500]}
        onChangeText={onChangeText}
      />
    </Container>
  );
};
