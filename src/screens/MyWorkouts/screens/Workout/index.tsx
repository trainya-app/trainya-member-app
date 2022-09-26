import { useState } from 'react';
import { Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { Heading } from '../../../../components/Heading';

import { NavigationProps } from '../../../../types/NavigationProps';
import {
  Container,
  WorkoutProgress,
  WorkoutCard,
  Top,
  WorkoutVideo,
  CheckboxContainer,
  CheckboxText,
  Checkbox,
  CheckActive,
  WorkoutInfo,
  WorkoutName,
  Row,
  Sets,
  Reps,
  Label,
  Text,
  CounterContainer,
  CurrentTitle,
  Timer,
  PlayContainer,
} from './styles';

import PlayIcon from '../../../../assets/play.svg';

interface Props {
  route: {
    params: {
      workoutTitle: string;
      workoutExercises: Exercises[];
    };
  };
  navigation: {
    goBack: () => void;
    navigate: (screen: string) => void;
  };
}

export const Workout = ({ navigation, route }: Props) => {
  const [finished, setFinished] = useState(false);

  const exercises = route.params.workoutExercises;

  const { width } = Dimensions.get('window');

  return (
    <>
      <Heading
        title="Treino Atual"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => false}
        hideConfigIcon
      />
      <Container>
        <WorkoutProgress>0 de 6 concluidos</WorkoutProgress>
        {/* {exercises.map((exercise, i) => (
          <WorkoutCard key={i}>
            <Top>
              <WorkoutVideo
                source={{ uri: 'https://i.imgur.com/b3Gblmw.png' }}
              />
              <CheckboxContainer>
                <CheckboxText>Terminou?</CheckboxText>
                <Checkbox
                  isChecked={finished}
                  onPress={() => setFinished((prev) => !prev)}
                />
              </CheckboxContainer>
            </Top>

            <WorkoutInfo>
              <WorkoutName>{exercise.title}</WorkoutName>
              <Row>
                <Sets>
                  <Label>Série</Label>
                  <Text>{`${exercise.sets}x`}</Text>
                </Sets>
                <Reps>
                  <Label>Repetições</Label>
                  <Text>{exercise.repetitions}</Text>
                </Reps>
              </Row>
              <CounterContainer>
                <CurrentTitle>Repouso</CurrentTitle>
                <Timer>{`00:${exercise.duration}`}</Timer>
                <PlayContainer>
                  <PlayIcon />
                </PlayContainer>
              </CounterContainer>
            </WorkoutInfo>
          </WorkoutCard>
        ))} */}

        <Carousel
          data={exercises}
          renderItem={({ item, index }) => (
            <WorkoutCard key={index}>
              <Top>
                <WorkoutVideo
                  source={{ uri: 'https://i.imgur.com/b3Gblmw.png' }}
                />
                <CheckboxContainer>
                  <CheckboxText>Terminou?</CheckboxText>
                  <Checkbox
                    isChecked={finished}
                    onPress={() => setFinished((prev) => !prev)}
                  />
                </CheckboxContainer>
              </Top>

              <WorkoutInfo>
                <WorkoutName>{item.title}</WorkoutName>
                <Row>
                  <Sets>
                    <Label>Série</Label>
                    <Text>{`${item.sets}x`}</Text>
                  </Sets>
                  <Reps>
                    <Label>Repetições</Label>
                    <Text>{item.repetitions}</Text>
                  </Reps>
                </Row>
                <CounterContainer>
                  <CurrentTitle>Repouso</CurrentTitle>
                  <Timer>{`00:${item.duration}`}</Timer>
                  <PlayContainer>
                    <PlayIcon />
                  </PlayContainer>
                </CounterContainer>
              </WorkoutInfo>
            </WorkoutCard>
          )}
          sliderWidth={width - 48}
          itemWidth={width - 48}
        />
      </Container>
    </>
  );
};
