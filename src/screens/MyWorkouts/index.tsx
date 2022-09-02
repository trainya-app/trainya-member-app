import { useState } from 'react';

import { NavigationProps } from '../../types/NavigationProps';

import { Heading } from '../../components/Heading';
import { DateScroll } from './components/DateScroll';
import { WorkoutCard } from './components/WorkoutCard';

import { Container, Separator, WorkoutsContainer, Scroll } from './styles';
import { ScreenSwitcher } from './components/SwitcherIndicator';

export const MyWorkouts = ({ navigation }: NavigationProps) => {
  const [isSwitcherActive, setIsSwitcherActive] = useState(false);

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

  return (
    <>
      <Heading
        title="Meus treinos"
        b="#FFF"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <ScreenSwitcher toggleIsActive={setIsSwitcherActive} />
        {!isSwitcherActive ? (
          <>
            <DateScroll />
            <Separator />
            <WorkoutsContainer>
              <Scroll>
                {workouts.map((workout, i) => (
                  <WorkoutCard
                    key={workout.id}
                    workoutName={workout.name}
                    workoutId={alphabet[i]}
                    isActive={i === 0 && true}
                  />
                ))}
              </Scroll>
            </WorkoutsContainer>
          </>
        ) : (
          <Separator />
        )}
      </Container>
    </>
  );
};
