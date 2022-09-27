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

import { Exercises } from '../../../ExercisesList';

interface Props {
  data: Exercises;
}

export const WorkoutCard = ({ data }: Props) => {
  const [finished, setFinished] = useState(false);

  return (
    <Card key={data.title}>
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
          <PaperIcon />
        </Details>
      </WorkoutInfo>
    </Card>
  );
};
