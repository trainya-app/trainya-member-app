import { useState } from 'react';

import { NavigationProps } from '../../types/NavigationProps';

import { Heading } from '../../components/Heading';
import { DateScroll } from './components/DateScroll';
import { WorkoutCard } from './components/WorkoutCard';
import { SliderProps, Slider } from '../../components/Slider';

import {
  Container,
  Separator,
  WorkoutsContainer,
  Scroll,
  SliderTitle,
} from './styles';
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

  const home_workouts: SliderProps[] = [
    {
      title: 'Cardio',
      url: 'https://i.imgur.com/kvD2fSZ.jpg',
    },
    {
      title: 'Força',
      url: 'https://i.imgur.com/M4n35v8.png',
    },
    {
      title: 'Flexibilidade',
      url: 'https://i.imgur.com/uoQYf1c.jpg',
    },
    {
      title: 'Pilates',
      url: 'https://i.imgur.com/JLiVcK8.jpeg',
    },
    {
      title: 'Pilates',
      url: 'https://i.imgur.com/JLiVcK8.jpeg',
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
          <Scroll>
            <SliderTitle>Favoritados</SliderTitle>
            <Slider data={home_workouts} />

            <SliderTitle>Favoritados</SliderTitle>
            <Slider data={home_workouts} />

            <SliderTitle>Favoritados</SliderTitle>
            <Slider data={home_workouts} />

            <SliderTitle>Aulas</SliderTitle>
            <Slider data={home_workouts} seeMoreAction={() => navigation.navigate('AvailableWorkouts')}/>
          </Scroll>
        )}
      </Container>
    </>
  );
};
