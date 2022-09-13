import { Heading } from '../../components/Heading';
import { NavigationProps } from '../../types/NavigationProps';
import { Container } from './styles';

export const QRCamera = ({ navigation }: NavigationProps) => (
  <>
    <Heading
      title="QRCamera"
      onGoBack={() => navigation.goBack()}
      onPressConfig={() => navigation.navigate('Configurations')}
    />
    <Container />
  </>
);
