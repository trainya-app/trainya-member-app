import { StatusBar } from 'react-native';
import { NavigationProps } from '../../types/NavigationProps';

import { Heading } from '../../components/Heading';
import { DateScroll } from './components/DateScroll';
import { WorkoutCard } from './components/WorkoutCard';

import { Container, Separator } from './styles';
import { ScreenSwitcher } from './components/SwitcherIndicator';

export const MyWorkouts = ({ navigation }: NavigationProps) => (
  // if active, free workouts is showing, else, workouts plan is showing

  <>
    <StatusBar backgroundColor="#FFF" />
    <Heading
      title="Meus treinos"
      b="#FFF"
      onGoBack={() => navigation.goBack()}
      onPressConfig={() => navigation.navigate('Configurations')}
    />
    <Container>
      <ScreenSwitcher />
      <DateScroll />
      <Separator />
      <WorkoutCard />
    </Container>
  </>
);
