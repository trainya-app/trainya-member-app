import { NavigationProps } from '../../types/NavigationProps';

import { Heading } from '../../components/Heading';
import { DateScroll } from './components/DateScroll';
import { WorkoutCard } from './components/WorkoutCard';

import { Container, Separator, WorkoutsContainer, Scroll } from './styles';
import { ScreenSwitcher } from './components/SwitcherIndicator';

export const MyWorkouts = ({ navigation }: NavigationProps) => {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const workouts = [
    {
      id: 1,
      name: 'Braço',
    },
    {
      id: 2,
      name: 'Abdômen',
    },
    {
      id: 3,
      name: 'Peito',
    },
    {
      id: 4,
      name: 'Pernas',
    },
    {
      id: 5,
      name: 'Costas',
    },
    {
      id: 6,
      name: 'Ombro',
    },
  ];

  const dayNumber = new Date().getDay();
  const weekDayNumber = new Date().getDate();

  function daysInMonth() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    return new Date(currentYear, currentMonth, 0);
  }

  return (
    <>
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
        <WorkoutsContainer>
          <Scroll>
            {workouts.map((workout, i) => (
              <WorkoutCard
                key={workout.id}
                workoutName={workout.name}
                workoutId={alphabet[i]}
              />
            ))}
          </Scroll>
        </WorkoutsContainer>
      </Container>
    </>
  );
};
