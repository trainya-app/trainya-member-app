import {
  Container,
  WorkoutSquare,
  WorkoutSquareText,
  WorkoutName,
} from './styles';

interface WorkoutCardProps {
  workoutName: string;
  workoutId: string;
}

export const WorkoutCard = ({ workoutName, workoutId }: WorkoutCardProps) => {
  const a = 'a';
  return (
    <Container>
      <WorkoutSquare>
        <WorkoutSquareText>{workoutId}</WorkoutSquareText>
      </WorkoutSquare>
      <WorkoutName>{workoutName}</WorkoutName>
    </Container>
  );
};
