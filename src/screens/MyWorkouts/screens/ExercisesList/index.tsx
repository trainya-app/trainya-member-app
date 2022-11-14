import { useContext } from 'react';
import { useTheme } from 'styled-components';
import { useToast } from 'native-base';
import { Button } from '../../../../components/Button';
import { Heading } from '../../../../components/Heading';
import { useCustomTheme } from '../../../../hooks/useCustomTheme';
import MembersService from '../../../../services/MembersService';
import {
  Container,
  Top,
  Description,
  Scroll,
  ExerciseCard,
  Image,
  Wrapper,
  ExerciseName,
  ExerciseSets,
  FinishWorkoutButton,
  FinishWorkoutButtonText,
} from './styles';
import { WorkoutContext } from '../../../../contexts/WorkoutContext';

export interface Exercises {
  exercise: {
    name: string;
  };
  sets: number;
  repetitions: number;
  duration: number;
  comment: string;
}

interface Props {
  route: {
    params: {
      workoutTitle: string;
      workoutDescription: string;
      workoutPlanWorkoutId: number;
      workoutExercises: Exercises[];
    };
  };
  navigation: {
    goBack: () => void;
    navigate: (screen: string, params?: object) => void;
  };
}

export const ExercisesList = ({ navigation, route }: Props) => {
  const theme = useTheme();
  const { colorMode } = useCustomTheme();
  const { setWorkoutsFinished, workoutsFinished } = useContext(WorkoutContext);

  const toast = useToast();

  const { workoutExercises } = route.params;

  function isWorkoutFinished() {
    return workoutsFinished
      .map(
        (finishedWorkout) =>
          finishedWorkout.isTrained && finishedWorkout.workoutPlanWorkoutId
      )
      .includes(route.params.workoutPlanWorkoutId);
  }

  function goToWorkoutScreen(firstItem: number) {
    navigation.navigate('Workout', {
      workoutExercises,
      workoutPlanWorkoutId: route.params.workoutPlanWorkoutId,
      firstItem,
    });
  }

  function showToast(text: string, status: 'success' | 'error') {
    toast.show({
      title: text,
      bgColor: status === 'success' ? 'green.500' : 'red.500',
      duration: 2500,
      placement: 'bottom',
      style: {
        translateY: -90,
      },
    });
  }

  async function handleSetWorkoutPlanWorkoutAsFinished() {
    try {
      if (!isWorkoutFinished()) {
        await MembersService.setWorkoutPlanWorkoutFinished(
          route.params.workoutPlanWorkoutId
        );

        setWorkoutsFinished((prev: any) => [
          ...prev,
          {
            isTrained: true,
            workoutPlanWorkoutId: route.params.workoutPlanWorkoutId,
          },
        ]);

        return showToast('Treino finalizado com sucesso!', 'success');
      }

      return showToast('Treino já finalizado', 'error');
    } catch (error: any) {
      return showToast(error.response.data.message, 'error');
    }
  }

  return (
    <>
      <Heading
        onGoBack={() => navigation.goBack()}
        title={route.params.workoutTitle}
        onPressConfig={() => false}
        hideConfigIcon
        b={theme.colors.shape.main}
      />
      <Container>
        <Top>
          <Description>{route.params.workoutDescription}</Description>
        </Top>
        <Scroll>
          {workoutExercises.map((workoutExercise: Exercises, index) => (
            <ExerciseCard
              key={workoutExercise.exercise.name}
              onPress={() => goToWorkoutScreen(index)}
            >
              <Image source={{ uri: 'https://i.imgur.com/5awFGCT.png' }} />
              <Wrapper>
                <ExerciseName colorMode={colorMode}>
                  {workoutExercise.exercise.name}
                </ExerciseName>
                <ExerciseSets
                  colorMode={colorMode}
                >{`${workoutExercise.sets} x ${workoutExercise.repetitions}`}</ExerciseSets>
              </Wrapper>
            </ExerciseCard>
          ))}
        </Scroll>
        <Button
          title="Começar Treino"
          width={100}
          height={60}
          fontSize={16}
          onPress={() => goToWorkoutScreen(0)}
        />
        <FinishWorkoutButton onPress={handleSetWorkoutPlanWorkoutAsFinished}>
          <FinishWorkoutButtonText>Concluir Treino</FinishWorkoutButtonText>
        </FinishWorkoutButton>
      </Container>
    </>
  );
};
