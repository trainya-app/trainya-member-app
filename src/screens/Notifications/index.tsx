import { Heading } from '../../components/Heading';
import { NavigationProps } from '../../types/NavigationProps';
import { NotificationCard } from './components/NotificationCard';
import { Container } from './styles';

export const Notifications = ({ navigation }: NavigationProps) => (
  <>
    <Heading
      title="Notificações"
      onPressConfig={() => navigation.navigate('Configurations')}
      onGoBack={() => navigation.goBack()}
    />

    <Container>
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </Container>
  </>
);
