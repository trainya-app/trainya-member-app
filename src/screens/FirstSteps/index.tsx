import { Heading } from '../../components/Heading';
import { Container, Text } from './styles';

export const FirstSteps = () => {
  const user = 'Mariana';

  return (
    <Container>
      <Text>OLÁ, {user.toUpperCase()}</Text>
      <Heading isBlack>VAMOS INICIAR</Heading>
    </Container>
  );
};
