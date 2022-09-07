import {
  Container,
  WorkoutSquare,
  WorkoutSquareText,
  WorkoutName,
  WorkoutIndicator,
  ArrowIcon,
} from './styles';

interface WorkoutCardProps {
  workoutName: string;
  workoutId: string;
  isActive: boolean;
}

export const WorkoutCard = ({
  workoutName,
  workoutId,
  isActive,
}: WorkoutCardProps) => {
  const a = 'a';
  return (
    <Container isActive={isActive}>
      <WorkoutSquare>
        <WorkoutSquareText>{workoutId}</WorkoutSquareText>
      </WorkoutSquare>
      <WorkoutName>{workoutName}</WorkoutName>
      {isActive && (
        <>
          <WorkoutIndicator>Hoje</WorkoutIndicator>
          <ArrowIcon />
        </>
      )}
    </Container>
  );
};
