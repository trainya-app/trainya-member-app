import { Heading } from '../../components/Heading';
import { NavigationProps } from '../../types/NavigationProps';
import { Container } from './styles';

export const Profile = ({ navigation }: NavigationProps) => (
  <Container>
    <Heading title="Profile" onGoBack={() => navigation.goBack()} />
  </Container>
);
