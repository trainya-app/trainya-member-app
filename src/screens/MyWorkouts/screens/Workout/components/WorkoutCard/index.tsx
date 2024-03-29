import { Dispatch, SetStateAction, useState, useContext } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Card,
  Top,
  WorkoutVideo,
  CheckboxContainer,
  CheckboxText,
  Checkbox,
  CheckActive,
  WorkoutInfo,
  WorkoutName,
  Details,
  Row,
  Sets,
  Reps,
  Label,
  Text,
} from './styles';

import { WarningModal } from '../WarningModal';
import { WorkoutContext } from '../../../../../../contexts/WorkoutContext';
import { useCustomTheme } from '../../../../../../hooks/useCustomTheme';

export interface IExercises {
  exercise: {
    id: number;
    comment: string;
    name: string;
    video_url?: string;
  };
  repetitions: number;
  sets: number;
}

interface IProps {
  data: IExercises;
  isAlreadyChecked: (exerciseId: number) => boolean;
}

export const WorkoutCard = ({ data, isAlreadyChecked }: IProps) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [finished, setFinished] = useState(isAlreadyChecked(data.exercise.id));

  const {
    exercisesChecked,
    setExercisesChecked,
  }: {
    exercisesChecked: number[];
    setExercisesChecked: Dispatch<SetStateAction<number[]>>;
  } = useContext(WorkoutContext);

  const { colorMode } = useCustomTheme();

  function toggleModalActive() {
    setIsModalActive(!isModalActive);
  }

  function checkExercise() {
    setFinished((prev) => !prev);
    setExercisesChecked((prev) =>
      prev.filter((item) => item !== data.exercise.id)
    );

    if (!exercisesChecked.includes(data.exercise.id)) {
      setExercisesChecked((prev) => [...prev, data.exercise.id]);
    }
  }

  return (
    <Card key={data.exercise.name}>
      <Top>
        <WorkoutVideo
          source={{
            uri: data.exercise?.video_url || 'https://i.imgur.com/b3Gblmw.png',
          }}
        />
        <CheckboxContainer
          onPress={() => checkExercise()}
          disabled={isAlreadyChecked(data.exercise.id)}
        >
          <CheckboxText colorMode={colorMode}>Terminou?</CheckboxText>
          <Checkbox
            isChecked={finished}
            onPress={() => checkExercise()}
            disabled={isAlreadyChecked(data.exercise.id)}
          >
            <CheckActive isChecked />
          </Checkbox>
        </CheckboxContainer>
      </Top>

      <WorkoutInfo colorMode={colorMode}>
        <WorkoutName colorMode={colorMode}>{data.exercise.name}</WorkoutName>

        <Details>
          <Row>
            <Sets>
              <Label>Série</Label>
              <Text>{`${data.sets}x`}</Text>
            </Sets>
            <Reps>
              <Label>Repetições</Label>
              <Text>{data.repetitions}</Text>
            </Reps>
          </Row>
          <Ionicons
            name="newspaper"
            size={24}
            color={colorMode === 'light' ? '#000' : '#FFF'}
            onPress={() => toggleModalActive()}
          />
        </Details>
      </WorkoutInfo>
      <WarningModal
        visible={isModalActive}
        toggleModalActive={toggleModalActive}
        warning={data.exercise.comment}
      />
    </Card>
  );
};
