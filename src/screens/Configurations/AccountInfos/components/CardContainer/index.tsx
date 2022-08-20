import { Container, CardTitle, CardText } from './styles';

interface CardContainerProps {
  title: string;
  value: string;
  half?: boolean;
}

export const CardContainer = ({ title, value, half }: CardContainerProps) => (
  <Container half={half}>
    <CardTitle>{title}</CardTitle>
    <CardText>{value}</CardText>
  </Container>
);
