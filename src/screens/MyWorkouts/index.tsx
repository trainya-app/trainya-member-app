import { useContext, useEffect, useState } from 'react';
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
import MembersService, {
  IWorkoutPlanWorkout,
  IWorkoutExercise,
} from '../../services/MembersService';
import { AuthContext } from '../../contexts/AuthContext';
import { WorkoutContext } from '../../contexts/WorkoutContext';
import { WorkoutAlreadyExistsModal } from './screens/Workout/components/WorkoutAlreadyStartedWarningModal';

export const MyWorkouts = ({ navigation, route }: NavigationProps) => {
  const { user } = useContext(AuthContext);
  const { exercisesChecked, prevWorkout, setPrevWorkout } =
    useContext(WorkoutContext);

  const [isSwitcherActive, setIsSwitcherActive] = useState(
    route.params.screen === 'AvailableWorkouts' ? true : false
  );
  const [workouts, setWorkouts] = useState<IWorkoutPlanWorkout[]>([]);

  const [isModalActive, setIsModalActive] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    (async () => {
      try {
        const memberWorkouts = await MembersService.getAllMemberWorkoutPlans(
          user.id
        );

        setWorkouts(memberWorkouts.workoutPlan.workoutPlanWorkout);
      } catch (error) {
        setWorkouts([]);
      }
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

  function handleGoToExercisesList(
    workoutTitle: string,
    workoutDescription: string,
    workoutExercises: IWorkoutExercise[],
    workoutId: number
  ) {
    if (
      prevWorkout.id &&
      workoutId !== prevWorkout.id &&
      exercisesChecked.length > 0
    ) {
      setIsModalActive(true);
    } else {
      navigation.navigate('ExercisesList', {
        workoutTitle,
        workoutDescription,
        workoutExercises,
      });
      setPrevWorkout({ id: workoutId, title: workoutTitle });
    }
  }

  return (
    <>
      <Heading
        title="Meus treinos"
        b={theme.colors.shape.main}
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <ScreenSwitcher
          firstName="Plano de treino"
          secondName="Treinos Livres"
          toggleIsActive={setIsSwitcherActive}
          isAlreadyActive={isSwitcherActive}
        />
        {!isSwitcherActive ? (
          <>
            <DateScroll />
            <Separator />
            {workouts.length !== 0 ? (
              <WorkoutsContainer>
                <Scroll>
                  {workouts.map((workoutPlanWorkout, i) => (
                    <WorkoutCard
                      key={workoutPlanWorkout.id}
                      workoutName={workoutPlanWorkout.workout.title}
                      workoutId={i + 1}
                      onPress={() =>
                        handleGoToExercisesList(
                          workoutPlanWorkout.workout.title,
                          workoutPlanWorkout.workout.description,
                          workoutPlanWorkout.workout.workoutExercise,
                          workoutPlanWorkout.id
                        )
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
      <WorkoutAlreadyExistsModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
    </>
  );
};
