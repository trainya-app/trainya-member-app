import { useTheme } from 'styled-components';
import { Button } from '../../../../components/Button';
import { Heading } from '../../../../components/Heading';
import { useCustomTheme } from '../../../../hooks/useCustomTheme';
import {
  Container,
  Scroll,
  ExerciseCard,
  Image,
  Wrapper,
  ExerciseName,
  ExerciseSets,
  FinishWorkoutButton,
  FinishWorkoutButtonText,
} from './styles';

export interface Exercises {
  title: string;
  sets: number;
  repetitions: number;
  duration: number;
  comment: string;
}

interface Props {
  route: {
    params: {
      workoutTitle: string;
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

  const { workoutExercises } = route.params;

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
        <Scroll>
          {workoutExercises.map((workoutExercise: Exercises) => (
            <ExerciseCard key={workoutExercise.exercise.name}>
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
          onPress={() =>
            navigation.navigate('Workout', {
              workoutExercises,
            })
          }
        />
        <FinishWorkoutButton>
          <FinishWorkoutButtonText>Concluir Treino</FinishWorkoutButtonText>
        </FinishWorkoutButton>
      </Container>
    </>
  );
};
