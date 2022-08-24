import {
  Container,
  WorkoutSquare,
  WorkoutSquareText,
  WorkoutName,
} from './styles';

interface WorkoutCardProps {
  workoutname: string;
}

export const WorkoutCard = () => {
  const a = 'a';
  return (
    <Container>
      <WorkoutSquare>
        <WorkoutSquareText>A</WorkoutSquareText>
      </WorkoutSquare>
      <WorkoutName>Braço</WorkoutName>
    </Container>
  );
};
