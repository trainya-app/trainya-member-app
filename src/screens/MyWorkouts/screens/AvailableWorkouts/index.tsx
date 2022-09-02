import { Heading } from '../../../../components/Heading';
import { NavigationProps } from '../../../../types/NavigationProps';
import { Container, Card, CardTitle, FavoriteIcon } from './styles';

export const AvailableWorkouts = ({ navigation }: NavigationProps) => {
  console.log('teste');
  return (
    <>
      <Heading title="Aulas Disponíveis" onGoBack={() => navigation.goBack()} onPressConfig={() => navigation.navigate('Configurations')} />
      <Container>
        <Card >
          <CardTitle>Natação</CardTitle>
          <FavoriteIcon />
        </Card>
      </Container>
    </>
  )
}
