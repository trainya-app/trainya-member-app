import { Bar, Progress, ProgressBarProps } from './styles';

export const ProgressBar = ({ progress_percentage, size }: ProgressBarProps) => (
  <Bar size={size}>
    <Progress progress_percentage={progress_percentage} size={size}/>
  </Bar>
);
