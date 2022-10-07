import {
  Container,
  IconContainer,
  NotificationTextContainer,
  Title,
  Description,
} from './styles';

export const NotificationCard = () => (
  <Container>
    <IconContainer />
    <NotificationTextContainer>
      <Title>Treino renovado</Title>
      <Description>Seu treino foi renovado com sucesso!</Description>
    </NotificationTextContainer>
  </Container>
);
