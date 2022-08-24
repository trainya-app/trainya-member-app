import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(24)}px;
  margin: 16px 0;
  flex-direction: row;
  align-items: center;
`;

export const WorkoutSquare = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  height: ${RFValue(60)}px;
  width: ${RFValue(60)}px;
  border-top-left-radius: ${RFValue(24)}px;
  border-bottom-left-radius: ${RFValue(24)}px;
  align-items: center;
  justify-content: center;
`;

export const WorkoutSquareText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const WorkoutName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  margin-left: ${RFValue(16)}px;
  color: #000;
`;
