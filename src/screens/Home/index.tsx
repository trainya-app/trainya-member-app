import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  HeaderImage,
  Title,
  Subtitle,
  NotificationIcon,
  ConfigIcon,
} from './styles';

export const Home = () => {
  const image_url = 'https://i.imgur.com/XLcRuY4.png';
  const user = 'Mariana';
  const workout = 'pernas';

  return (
    <Container>
      <StatusBar translucent />
      <Header>
        <HeaderImage source={{ uri: image_url }} />
        <NotificationIcon />
        <ConfigIcon />
        <Title>Bom dia, {user}</Title>
        <Subtitle>Seu treino de {workout} está te esperando</Subtitle>
      </Header>
    </Container>
  );
};
