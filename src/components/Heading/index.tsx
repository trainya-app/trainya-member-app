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
}

export const Heading = ({ title, onGoBack }: HeadingProps) => {
  const { colorMode } = useCustomTheme();

  return (
    <Container>
      <IconWrapper onPress={onGoBack}>
        {colorMode === 'light' ? <BackIcon /> : <BackIconDark />}
      </IconWrapper>
      <Title colorMode={colorMode}>{title}</Title>
      <IconWrapper>
        {colorMode === 'light' ? <ConfigIcon /> : <ConfigIconDark />}
      </IconWrapper>
    </Container>
  );
};
