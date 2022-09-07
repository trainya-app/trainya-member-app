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
  b?: string;
}

export const Heading = ({
  title,
  onGoBack,
  onPressConfig,
  b,
}: HeadingProps) => {
  const { colorMode } = useCustomTheme();

  return (
    <Container b={b}>
      <IconWrapper onPress={onGoBack}>
        {colorMode === 'light' ? <BackIcon /> : <BackIconDark />}
      </IconWrapper>
      <Title colorMode={colorMode}>{title}</Title>
      <IconWrapper onPress={onPressConfig}>
        {colorMode === 'light' ? <ConfigIcon /> : <ConfigIconDark />}
      </IconWrapper>
    </Container>
  );
};
