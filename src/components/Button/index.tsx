import { Container, TextButton } from './styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  isRounded?: boolean;
  width: number;
  height: number;
  style?: object;
  fontSize: number;
}

export const Button = ({
  onPress,
  title,
  isRounded,
  width,
  height,
  style,
  fontSize,
}: ButtonProps) => (
  <Container
    onPress={onPress}
    activeOpacity={0.7}
    isRounded={isRounded ? true : false}
    width={width}
    height={height}
    style={style}
  >
    <TextButton fontSize={fontSize}>{title}</TextButton>
  </Container>
);
