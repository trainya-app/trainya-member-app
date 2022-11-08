import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export interface BarProps {
  size?: 'sm' | 'md' | 'lg';
}
export interface ProgressBarProps extends BarProps {
  progress_percentage: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

function getSize(size = 'md') {
  switch (size) {
    case 'sm':
      return RFValue(8);
    case 'md':
      return RFValue(16);
    case 'lg':
      return RFValue(20);
    default:
      return RFValue(16);
  }
}

export const Bar = styled.View<BarProps>`
  width: 100%;
  height: ${({ size }) => getSize(size)}px;
  margin-top: 4px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.progressbar};
`;

export const Progress = styled.View<ProgressBarProps>`
  width: ${({ progress_percentage }) => progress_percentage}%;
  height: ${({ size }) => getSize(size)}px;
  border-radius: 30px;
  background-color: '${({ theme }) => theme.colors.blue[500]}';
`;
