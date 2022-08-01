import { Container, TextButton } from './styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  isRounded?: boolean;
}

export const Button = ({ onPress, title, isRounded }: ButtonProps) => (
  <Container
    onPress={onPress}
    activeOpacity={0.7}
    isRounded={isRounded ? true : false}
  >
    <TextButton>{title}</TextButton>
  </Container>
);
