import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { useCustomTheme } from '../../hooks/useCustomTheme';

import {
  Container,
  IconWrapper,
  BackIcon,
  BackIconDark,
  Title,
  ConfigIcon,
  ConfigIconDark,
} from './styles';

interface HeadingProps {
  title: string;
  onGoBack: () => void;
  onPressConfig: () => void;
  hideConfigIcon?: boolean;
  b?: string;
}

export const Heading = ({
  title,
  onGoBack,
  onPressConfig,
  hideConfigIcon,
  b,
}: HeadingProps) => {
  const { colorMode } = useCustomTheme();

  return (
    <Container b={b}>
      <IconWrapper onPress={onGoBack}>
        <Feather
          name="chevron-left"
          size={48}
          color="#000000"
          style={{ right: 16 }}
        />
      </IconWrapper>
      <Title colorMode={colorMode}>{title}</Title>
      <IconWrapper onPress={onPressConfig}>
        {!hideConfigIcon && (
          <Feather name="settings" size={36} color="#000000" />
        )}
      </IconWrapper>
    </Container>
  );
};
