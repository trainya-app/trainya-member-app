import { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { Container, InputText } from './styles';

interface TextInputProps {
  placeholder: string;
}

export const TextInput = ({ placeholder }: TextInputProps) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <InputText
        placeholder={placeholder}
        placeholderTextColor={theme.light.colors.gray[500]}
      />
    </Container>
  );
};
