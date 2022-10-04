import { useState } from 'react';
import { Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { Heading } from '../../../../components/Heading';
import { WorkoutCard } from './components/WorkoutCard';
import { WarningModal } from './components/WarningModal';

import { Exercises } from '../ExercisesList';

import { Container, WorkoutProgress } from './styles';

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

export const Workout = ({ navigation, route }: Props) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const exercises = route.params.workoutExercises;

  const { width } = Dimensions.get('window');

  function toggleModalActive() {
    setIsModalActive(!isModalActive);
  }

  return (
    <>
      <Heading
        title="Treino Atual"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => false}
        hideConfigIcon
      />
      <Container>
        <WorkoutProgress>{`0 de ${exercises.length} concluídos`}</WorkoutProgress>

        <Carousel<Exercises>
          data={exercises}
          renderItem={({ item }) => (
            <WorkoutCard data={item} toggleModalActive={toggleModalActive} />
          )}
          sliderWidth={width - 48}
          itemWidth={width - 48}
        />
      </Container>
      <WarningModal
        visible={isModalActive}
        toggleModalActive={toggleModalActive}
      />
    </>
  );
};
