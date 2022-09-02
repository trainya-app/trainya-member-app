import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isActive: boolean;
}

export const Container = styled.View`
  height: ${RFValue(96)}px;
  width: 100%;
  margin-top: ${RFValue(24)}px;
  align-items: center;
  flex-direction: row;
`;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  overScrollMode: 'never',
})``;

export const DateWrapper = styled.View<Props>`
  width: 60px;
  height: 60px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.blue[500] : theme.colors.shape};
  border-radius: 14px;
  align-items: center;
  justify-content: center;
`;

export const Day = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  font-size: ${RFValue(12)}px;
  color: ${({ isActive }) => (isActive ? '#FFF' : '#000')};
`;

export const DayNumber = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  font-size: ${RFValue(12)}px;
  color: ${({ isActive }) => (isActive ? '#FFF' : '#000')};
`;
