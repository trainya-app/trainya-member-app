import { useContext, useState } from 'react';
import { Dimensions } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Heading } from '../../../../components/Heading';
import { WorkoutContext } from '../../../../contexts/WorkoutContext';
import { IExercises, WorkoutCard } from './components/WorkoutCard';

import { Container, WorkoutProgress } from './styles';

interface Props {
  route: {
    params: {
      workoutTitle: string;
      workoutExercises: IExercises[];
      firstItem: number;
    };
  };
  navigation: {
    goBack: () => void;
    navigate: (screen: string, params?: object) => void;
  };
}

export const Workout = ({ navigation, route }: Props) => {
  const { workoutExercises: exercises, firstItem } = route.params;
  const { exercisesChecked } = useContext(WorkoutContext);
  const [activeSlide, setActiveSlide] = useState(0);

  const { width } = Dimensions.get('window');

  function isExerciseChecked(exerciseId: number) {
    return exercisesChecked.includes(exerciseId);
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
        <WorkoutProgress>{`${exercisesChecked.length} de ${exercises.length} concluídos`}</WorkoutProgress>

        <Carousel
          firstItem={firstItem}
          data={exercises}
          renderItem={({ item }) => (
            <WorkoutCard data={item} isAlreadyChecked={isExerciseChecked} />
          )}
          sliderWidth={width}
          itemWidth={width - 64}
          onSnapToItem={(index: number) => setActiveSlide(index)}
        />
        <Pagination
          activeDotIndex={activeSlide}
          dotsLength={exercises.length}
          containerStyle={{
            position: 'absolute',
            alignSelf: 'center',
            bottom: 24,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 99,
            borderWidth: 1.7,
            marginHorizontal: -5,
            backgroundColor: '#2176FF',
            borderColor: '#2176FF',
          }}
          inactiveDotStyle={{
            backgroundColor: 'transparent',
          }}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </Container>
    </>
  );
};
