import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text.inverted};
  border-radius: ${RFValue(20)}px;
  margin-bottom: 24px;
`;

export const InputText = styled.TextInput`
  height: ${RFValue(56)}px;
  padding-left: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text.default}
`;
