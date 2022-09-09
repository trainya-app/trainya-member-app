import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import ArrowIconSVG from '../../../../assets/arrow_icon.svg';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape.light};
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(24)}px;
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  elevation: 1;
  border: ${({ theme, isActive }) =>
    isActive
      ? `2px solid #2176FF`
      : `0px solid ${theme.colors.shape.light}`};
`;

export const WorkoutSquare = styled.View`
  background-color: #2176FF;
  height: ${RFValue(60)}px;
  width: ${RFValue(60)}px;
  elevation: 1;
  border-top-left-radius: ${RFValue(24)}px;
  border-bottom-left-radius: ${RFValue(24)}px;
  align-items: center;
  justify-content: center;
`;

export const WorkoutSquareText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: #FFFFFF;
`;

export const WorkoutName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  margin-left: ${RFValue(16)}px;
  color: ${({ theme })=> theme.colors.text.default};
`;

export const WorkoutIndicator = styled.Text`
  position: absolute;
  right: 56px;
  top: -12px;
  color: ${({ theme }) => theme.colors.text.inverted};
  background-color: #2176FF;
  padding: 3px 24px;
  border-radius: 999px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(10)}px;
`;

export const ArrowIcon = styled(ArrowIconSVG)`
  margin-left: auto;
  margin-right: 20px;
`;
