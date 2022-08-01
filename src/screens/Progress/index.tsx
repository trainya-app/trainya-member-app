import { Heading } from '../../components/Heading';
import { Container, Image } from './styles';

export const Progress = () => (
  <Container>
    <Heading isBlack>Progress</Heading>
    <Image source={{ uri: 'https://www.w3schools.com/w3css/img_lights.jpg' }} />
  </Container>
);
