import { useState } from 'react';
import { useTheme } from 'styled-components';

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

  const theme = useTheme();

  const workouts = [
    {
      id: 1,
      name: 'Braço',
      exercises: [
        {
          title: 'Barra Fixa',
          comment: 'Cuidado para não bater o queixo na barra',
          sets: 3,
          repetitions: 15,
          duration: 50,
        },
      ],
    },
    {
      id: 2,
      name: 'Abdômen',
      exercises: [
        {
          title: 'Abdominais',
          comment: 'Mantenha o abdômen contraído',
          sets: 5,
          repetitions: 10,
          duration: 30,
        },
        {
          title: 'Prancha',
          comment: 'Mantenha o abdômen contraído',
          sets: 3,
          repetitions: 1,
          duration: 45,
        },
      ],
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
        b={theme.colors.shape.main}
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
                    workoutId={workout.id}
                    isActive={i === 0 && true}
                    onPress={() =>
                      navigation.navigate('ExercisesList', {
                        workoutTitle: workout.name,
                        workoutExercises: workout.exercises,
                      })
                    }
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
            <Slider
              data={home_workouts}
              seeMoreAction={() => navigation.navigate('AvailableWorkouts')}
            />
          </Scroll>
        )}
      </Container>
    </>
  );
};
