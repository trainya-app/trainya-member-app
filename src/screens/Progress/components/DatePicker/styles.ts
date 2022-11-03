import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface IDateButtonProps {
  isActive: boolean;
}

interface IDropDownButtonProps {
  isTheLast: boolean;
}

export const Container = styled.View``;

export const DateButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<IDateButtonProps>`
  background-color: #99c0ff;
  width: ${width * 0.45}px;
  border-radius: ${({ isActive }) => (isActive ? '0px' : '24px')};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 40px;
`;

export const DateText = styled.Text`
  padding: 8px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #fff;
`;

export const DropDownContainer = styled.View`
  position: absolute;
  margin-top: 40px;
`;

export const DropDownDateButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<IDropDownButtonProps>`
  position: relative;
  background-color: #99c0ff;
  width: ${width * 0.45}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 5;
  height: 40px;
  border-bottom-left-radius: ${({ isTheLast }) => (isTheLast ? '24px' : '0px')};
  border-bottom-right-radius: ${({ isTheLast }) =>
    isTheLast ? '24px' : '0px'};
`;
