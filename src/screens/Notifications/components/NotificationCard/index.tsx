import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  IconContainer,
  NotificationTextContainer,
  Title,
  Description,
} from './styles';

export const NotificationCard = () => (
  <Container>
    <IconContainer>
      <MaterialIcons name="weight-lifter" color="#2176FF" size={56} />
    </IconContainer>
    <NotificationTextContainer>
      <Title>Treino renovado</Title>
      <Description>Seu treino foi renovado com sucesso!</Description>
    </NotificationTextContainer>
  </Container>
);
