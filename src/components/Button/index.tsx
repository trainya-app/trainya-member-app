import { TouchableOpacityProps } from 'react-native';
import { Container, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  title: string;
  isRounded?: boolean;
  width: number;
  height: number;
  fontSize: number;
}

export const Button = ({
  onPress,
  title,
  isRounded,
  width,
  height,
  fontSize,
  ...rest
}: ButtonProps) => (
  <Container<JSX.Element<ButtonProps>>
    onPress={onPress}
    activeOpacity={0.7}
    isRounded={isRounded ? true : false}
    width={width}
    height={height}
    {...rest}
  >
    <TextButton fontSize={fontSize}>{title}</TextButton>
  </Container>
);
