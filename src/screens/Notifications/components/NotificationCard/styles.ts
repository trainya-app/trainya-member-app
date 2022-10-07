import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 128px;
  background-color: ${({ theme }) => theme.colors.blue[500]};
  border-radius: 24px;
  overflow: hidden;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  background-color: #fff;
  width: 40%;
`;

export const NotificationTextContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 12px 4px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;

export const Description = styled.Text`
  color: #fff;
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;
