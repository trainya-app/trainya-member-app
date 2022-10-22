import Feather from 'react-native-vector-icons/Feather';
import { useCustomTheme } from '../../hooks/useCustomTheme';

import { Container, IconWrapper, Title } from './styles';

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

  function getFontSize() {
    if (title.length > 24) {
      return 12;
    }
    if (title.length > 20) {
      return 16;
    }
    if (title.length > 15) {
      return 20;
    }
    if (title.length > 10) {
      return 22;
    }
    return 24;
  }

  return (
    <Container b={b}>
      <IconWrapper onPress={onGoBack}>
        <Feather
          name="chevron-left"
          size={48}
          color={colorMode === 'light' ? '#000000' : '#FFFFFF'}
          style={{ right: 16 }}
        />
      </IconWrapper>
      <Title colorMode={colorMode} fontSize={getFontSize()}>
        {title}
      </Title>
      <IconWrapper onPress={onPressConfig}>
        {!hideConfigIcon && (
          <Feather
            name="settings"
            size={36}
            color={colorMode === 'light' ? '#000000' : '#FFFFFF'}
          />
        )}
      </IconWrapper>
    </Container>
  );
};
