import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ProgressBarProps {
  progress_percentage: number;
}

export const Bar = styled.View`
  width: 100%;
  height: ${RFValue(16)}px;
  margin-top: 4px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.progressbar};
`;

export const Progress = styled.View<ProgressBarProps>`
  width: ${({ progress_percentage }) => progress_percentage}%;
  height: ${RFValue(16)}px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.blue[500]};
`;
