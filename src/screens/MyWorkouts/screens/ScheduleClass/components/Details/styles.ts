import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.blue[500]};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Detail = styled.Text`
  color: ${({ theme }) => theme.colors.blue[500]};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
`;
