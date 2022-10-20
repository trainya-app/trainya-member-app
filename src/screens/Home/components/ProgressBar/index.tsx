import { Bar, Progress, ProgressBarProps } from './styles';

export const ProgressBar = ({
  progress_percentage,
  size,
  children,
}: ProgressBarProps) => (
  <Bar size={size}>
    <Progress progress_percentage={progress_percentage} size={size}>
      {children}
    </Progress>
  </Bar>
);
