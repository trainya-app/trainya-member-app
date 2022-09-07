import { Heading } from '../../../../components/Heading';
import { NavigationProps } from '../../../../types/NavigationProps';
import { Card } from './components/Card';
import { Container, Scroll } from './styles';

export const AvailableWorkouts = ({ navigation }: NavigationProps) => {
  console.log('teste');
  return (
    <>
      <Heading
        title="Aulas Disponíveis"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <Scroll>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Scroll>
      </Container>
    </>
  );
};
