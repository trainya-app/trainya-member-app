import { useTheme } from '../../hooks/useTheme';
import { Container, InputText } from './styles';

interface TextInputProps {
  placeholder: string;
  // eslint-disable-next-line no-unused-vars
  onChangeText: (input: string) => void;
  hideText?: boolean;
}

export const TextInput = ({
  placeholder,
  onChangeText,
  hideText,
}: TextInputProps) => {
  const { theme } = useTheme();

  return (
    <Container>
      <InputText
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray[500]}
        onChangeText={onChangeText}
        secureTextEntry={hideText}
      />
    </Container>
  );
};
