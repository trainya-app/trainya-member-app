import { useEffect, useState } from 'react';
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
  WarningContainer,
  WarningText,
  Scroll,
  SliderTitle,
} from './styles';
import { ScreenSwitcher } from './components/SwitcherIndicator';
import MembersService from '../../services/MembersService';
import { IExercises } from './screens/Workout/components/WorkoutCard';

interface IWorkouts {
  workout: {
    duration: string;
    id: number;
    title: string;
    workoutExercise: IExercises[];
  };
}

export const MyWorkouts = ({ navigation }: NavigationProps) => {
  const [isSwitcherActive, setIsSwitcherActive] = useState(false);
  const [workouts, setWorkouts] = useState<IWorkouts[]>([]);

  const theme = useTheme();

  useEffect(() => {
    (async () => {
      const memberWorkouts = await MembersService.getAllMemberWorkouts();
      setWorkouts(memberWorkouts);
    })();
  }, []);

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
            {workouts.length !== 0 ? (
              <WorkoutsContainer>
                <Scroll>
                  {workouts.map(({ workout }, i) => (
                    <WorkoutCard
                      key={workout.id}
                      workoutName={workout.title}
                      workoutId={i + 1}
                      isActive={i === 0 && true}
                      onPress={() =>
                        navigation.navigate('ExercisesList', {
                          workoutTitle: workout.title,
                          workoutExercises: workout.workoutExercise,
                        })
                      }
                    />
                  ))}
                </Scroll>
              </WorkoutsContainer>
            ) : (
              <WarningContainer>
                <WarningText>
                  Não há treinos para exibir, tente novamente mais tarde ou
                  entre em contato com a sua academia
                </WarningText>
              </WarningContainer>
            )}
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
              seeMoreAction={() => navigation.navigate('AvailableClasses')}
            />
          </Scroll>
        )}
      </Container>
    </>
  );
};
