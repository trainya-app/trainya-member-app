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
        {colorMode === 'light' ? <BackIcon /> : <BackIconDark />}
      </IconWrapper>
      <Title colorMode={colorMode}>{title}</Title>
      <IconWrapper onPress={onPressConfig}>
        {!hideConfigIcon && (
          colorMode === 'light' ? <ConfigIcon /> : <ConfigIconDark />
        )}
      </IconWrapper>
    </Container>
  );
};
