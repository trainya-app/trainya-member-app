import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-top: 32px;
  margin-bottom: 12px;
`;

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 20px 12px;
  border-radius: 16px;
`;

export const ContainerItem = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-left: 12px;
`;

export const ItemSeparator = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  margin: 12px 0;
  width: 100%;
  height: 1px;
`;
