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

interface IFinishedWorkouts {
  isTrained: boolean;
  workoutPlanWorkoutId: number;
}

export const MyWorkouts = ({ navigation, route }: NavigationProps) => {
  const { user } = useContext(AuthContext);
  const { exercisesChecked, prevWorkout, setPrevWorkout } =
    useContext(WorkoutContext);

  const [isSwitcherActive, setIsSwitcherActive] = useState(
    route.params.screen === 'AvailableWorkouts' ? true : false
  );
  const [workouts, setWorkouts] = useState<IWorkoutPlanWorkout[]>([]);
  const [finishedWorkouts, setFinishedWorkouts] = useState<IFinishedWorkouts[]>(
    []
  );

  const [isModalActive, setIsModalActive] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    (async () => {
      try {
        setFinishedWorkouts(
          await MembersService.getWorkoutPlanWorkoutsFinished()
        );
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
                      isActive={finishedWorkouts
                        .map(
                          (finishedWorkout) =>
                            finishedWorkout.isTrained &&
                            finishedWorkout.workoutPlanWorkoutId
                        )
                        .includes(workoutPlanWorkout.id)}
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
            <SliderTitle>Grupos musculares</SliderTitle>
            <Slider
              data={[
                {
                  title: 'Membros Inferiores',
                  url: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
                },
                {
                  title: 'Membros superiores',
                  url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                },
              ]}
            />

            <SliderTitle>Treinos de fortalecimento</SliderTitle>
            <Slider
              data={[
                {
                  title: 'Força',
                  url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                },
                {
                  title: 'Impulsão',
                  url: 'https://i.imgur.com/GklxPuk.png',
                },
                {
                  title: 'Resistência',
                  url: 'https://musculacaoonline.com.br/wp-content/uploads/2016/08/Treino-com-resistência-variável-para-hipertrofia-muscular.jpg',
                },
              ]}
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
