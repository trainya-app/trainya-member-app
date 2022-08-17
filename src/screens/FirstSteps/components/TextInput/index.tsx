import { useTheme } from '../../../../hooks/useTheme';
import { Container, InputText } from './styles';

interface TextInputProps {
  placeholder: string;
  // eslint-disable-next-line no-unused-vars
  onChangeText: (input: string) => void;
}

export const TextInput = ({ placeholder, onChangeText }: TextInputProps) => {
  const { theme } = useTheme();

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
