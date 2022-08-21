import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 48px 24px 0 24px;
`;

export const TextInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.shape};
  height: ${RFValue(52)}px;
  border-radius: 16px;
  elevation: 2;
  margin: 8px 0;
  padding: 16px 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;
