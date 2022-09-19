import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
`;

export const CardLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${RFValue(16)}px;
`;

export const CurrentWorkoutCard = styled.View`
  height: ${RFValue(154)}px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.blue[300]};
  border-radius: 24px;
  overflow: hidden;
  flex-direction: row;
  align-items: flex-end;
`;

export const CurrentWorkoutImage = styled.Image`
  width: 50%;
  height: 100%;
`;

export const CurrentWorkoutTitleContainer = styled.View`
  height: 25%;
  width: 55%;
  background-color: #fff;
  position: absolute;
  right: 12px;
  top: 12px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const CurrentWorkoutTitle = styled.Text`
  color: ${({ theme }) => theme.colors.blue[300]};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const WorkoutProgress = styled.View`
  height: 60%;
  width: 50%;
  padding: 0 16px;
`;

export const Label = styled.Text`
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;

export const ProgressText = styled.Text`
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  margin: 3px 0;
`;
