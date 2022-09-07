import { Heading } from '../../components/Heading';
import { NavigationProps } from '../../types/NavigationProps';
import { Container } from './styles';

export const Profile = ({ navigation }: NavigationProps) => (
  <>
    <Heading
      title="Profile"
      onGoBack={() => navigation.goBack()}
      onPressConfig={() => navigation.navigate('Configurations')}
    />
    <Container />
  </>
);
