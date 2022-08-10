import { StatusBar } from 'react-native';
import { Container, BackIcon, Title, ConfigIcon } from './styles';

interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: HeadingProps) => (
  <Container>
    <BackIcon />
    <Title>{title}</Title>
    <ConfigIcon />
  </Container>
);
