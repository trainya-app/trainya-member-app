import { Container, Title, Detail } from './styles';

interface IDetailsProps {
  title: string;
  detail: string;
}

export const Details = ({ title, detail }: IDetailsProps) => (
  <Container>
    <Title>{title}</Title>
    <Detail>{detail}</Detail>
  </Container>
);
