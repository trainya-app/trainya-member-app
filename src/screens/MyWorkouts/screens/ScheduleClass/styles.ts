import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 24px;
  padding-bottom: ${RFValue(96)}px;
`;

export const ClassContainer = styled.View`
  background-color: white;
  flex: 1;
  border-radius: 24px;
  overflow: hidden;
`;

export const Top = styled.View``;

export const ClassImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const ClassTitleContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  position: absolute;
  align-self: center;
  bottom: -26px;
  padding: 12px 56px;
  border-radius: 16px;
`;

export const ClassTitle = styled.Text`
  color: ${({ theme }) => theme.colors.blue[500]};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
`;

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`;
