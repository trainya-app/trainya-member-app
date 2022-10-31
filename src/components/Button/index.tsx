import { TouchableOpacityProps } from 'react-native';
import { Container, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  title: string;
  isRounded?: boolean;
  width: number;
  height: number;
  fontSize: number;
  color?: string
}

export const Button = ({
  onPress,
  title,
  isRounded,
  width,
  height,
  fontSize,
  color,
  ...rest
}: ButtonProps) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <Container<ButtonProps | any>
    onPress={onPress}
    activeOpacity={0.7}
    isRounded={isRounded ? true : false}
    width={width}
    height={height}
    {...rest}
  >
    <TextButton fontSize={fontSize} color={color}>{title}</TextButton>
  </Container>
);
