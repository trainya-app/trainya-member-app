import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 24px;
  padding-bottom: ${RFValue(96)}px;
`;

export const GymLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-transform: uppercase;
`;

export const GymName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => (theme.title === 'dark' ? '#FFF' : '#000')};
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const BoxDirectionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Scroll = styled.ScrollView.attrs({
  overScrollMode: 'never',
  showsVerticalScrollIndicator: false,
})``;
