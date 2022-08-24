import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

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
})``;

export const DateWrapper = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  justify-content: center;
`;

export const Day = styled.Text`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  font-size: ${RFValue(12)}px;
`;

export const DayNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  font-size: ${RFValue(12)}px;
`;
