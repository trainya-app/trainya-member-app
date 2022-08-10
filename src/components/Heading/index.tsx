import { Container, IconWrapper, BackIcon, Title, ConfigIcon } from './styles';

interface HeadingProps {
  title: string;
  onGoBack: () => void;
}

export const Heading = ({ title, onGoBack }: HeadingProps) => (
  <Container>
    <IconWrapper onPress={onGoBack}>
      <BackIcon />
    </IconWrapper>
    <Title>{title}</Title>
    <IconWrapper>
      <ConfigIcon />
    </IconWrapper>
  </Container>
);
