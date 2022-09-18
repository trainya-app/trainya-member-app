import { NavigationProps } from '../../types/NavigationProps';
import { Container } from './styles';

import { Heading } from '../../components/Heading';
import { ProfileHeader } from '../../components/ProfileHeader';

export const Profile = ({ navigation }: NavigationProps) => (
  <>
    <Heading
      title="Profile"
      onGoBack={() => navigation.goBack()}
      onPressConfig={() => navigation.navigate('Configurations')}
    />

    <Container>
      <ProfileHeader onPressChangePhoto={() => navigation.navigate('ChangePhoto')} />
    </Container>
  </>
);
