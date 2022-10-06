import { Heading } from '../../components/Heading';
import { NavigationProps } from '../../types/NavigationProps';
import { Container, Image } from './styles';

export const Progress = ({ navigation }: NavigationProps) => (
  <>
    <Heading
      title="Meu Progresso"
      onGoBack={() => navigation.goBack()}
      onPressConfig={() => navigation.navigate('Configurations')}
    />
    <Container />
  </>
);
