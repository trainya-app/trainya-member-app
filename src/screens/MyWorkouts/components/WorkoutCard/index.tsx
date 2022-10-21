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
  workoutId: number;
  isActive: boolean;
  onPress: () => void;
}

export const WorkoutCard = ({
  workoutName,
  workoutId,
  isActive,
  onPress,
}: WorkoutCardProps) => {
  const a = 'a';
  return (
    <Container isActive={isActive} onPress={onPress}>
      <WorkoutSquare>
        <WorkoutSquareText>{workoutId}</WorkoutSquareText>
      </WorkoutSquare>
      <WorkoutName numberOfLines={1}>{workoutName}</WorkoutName>
      {isActive && (
        <>
          <WorkoutIndicator>Hoje</WorkoutIndicator>
          <ArrowIcon />
        </>
      )}
    </Container>
  );
};
