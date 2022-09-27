import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const WorkoutProgress = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.blue[500]};
  font-size: ${RFValue(16)}px;
`;
