import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const DateButton = styled.TouchableOpacity`
  background-color: #99c0ff;
  width: 50%;
  border-radius: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const DateText = styled.Text`
  padding: 8px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #fff;
`;
