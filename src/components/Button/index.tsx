import { Container, TextButton } from './styles';

interface ButtonProps {
  onPress: () => void;
}

export const Button = ({ onPress }: ButtonProps) => (
  <Container onPress={onPress} activeOpacity={0.7}>
    <TextButton>Entrar</TextButton>
  </Container>
);
