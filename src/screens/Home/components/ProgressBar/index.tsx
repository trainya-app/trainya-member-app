import { Bar, Progress } from './styles';

interface ProgressBarProps {
  progress_percentage: number;
}

export const ProgressBar = ({ progress_percentage }: ProgressBarProps) => (
  <Bar>
    <Progress progress_percentage={progress_percentage} />
  </Bar>
);
