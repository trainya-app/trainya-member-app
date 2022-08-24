import { Heading } from '../../components/Heading';
import { NavigationProps } from '../../types/NavigationProps';
import { Container } from './styles';

export const MyWorkouts = ({ navigation }: NavigationProps) => (
  <>
    <Heading
      title="Meus treinos"
      onGoBack={() => navigation.goBack()}
      onPressConfig={() => navigation.navigate('Configurations')}
    />
    <Container />
  </>
);
