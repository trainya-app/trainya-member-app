import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface CardContainerProps {
  half?: boolean;
}

export const Container = styled.View<CardContainerProps>`
  width: ${({ half }) => (half ? '47%' : '100%')};
  padding: 24px 28px;
  background-color: ${({ theme }) => theme.colors.text.inverted};
  border-radius: 24px;
  margin: 8px 0;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.blue[500]};
`;

export const CardText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-top: 2px;
`;
