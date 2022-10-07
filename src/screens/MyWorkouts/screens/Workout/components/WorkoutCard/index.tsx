import { useState } from 'react';

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
  PaperIcon,
  Reps,
  Label,
  Text,
} from './styles';

import { WarningModal } from '../WarningModal';

export interface IExercises {
  exercise: {
    comment: string;
    name: string;
  };
  repetitions: number;
  sets: number;
}

interface IProps {
  data: IExercises;
}

export const WorkoutCard = ({ data }: IProps) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [finished, setFinished] = useState(false);

  function toggleModalActive() {
    setIsModalActive(!isModalActive);
  }

  return (
    <Card key={data.exercise.name}>
      <Top>
        <WorkoutVideo source={{ uri: 'https://i.imgur.com/b3Gblmw.png' }} />
        <CheckboxContainer>
          <CheckboxText>Terminou?</CheckboxText>
          <Checkbox
            isChecked={finished}
            onPress={() => setFinished((prev) => !prev)}
          >
            <CheckActive isChecked />
          </Checkbox>
        </CheckboxContainer>
      </Top>

      <WorkoutInfo>
        <WorkoutName>{data.exercise.name}</WorkoutName>

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
          <PaperIcon onPress={() => toggleModalActive()} />
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
