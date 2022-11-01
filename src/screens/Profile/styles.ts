import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding-bottom: ${RFValue(96)}px;
`;

export const Scroll = styled.ScrollView.attrs({
  overScrollMode: 'never',
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 8,
  },
})`
  width: 100%;
`;

export const CardLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${RFValue(16)}px;
`;

export const Card = styled.View`
  height: ${RFValue(154)}px;
  margin-top: 16px;
  background-color: #99c0ff;
  border-radius: 24px;
  overflow: hidden;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 40px;
`;

export const CardImage = styled.Image`
  width: 50%;
  height: 100%;
`;

export const CardTitleContainer = styled.View`
  height: 25%;
  padding: 0 24px;
  min-width: 196px;
  background-color: #fff;
  position: absolute;
  right: 12px;
  top: 12px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.Text`
  color: #99c0ff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const CardInfo = styled.View`
  height: 60%;
  width: 50%;
  padding: 0 16px;
`;

export const Label = styled.Text`
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;

export const StrongText = styled.Text`
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  margin: 3px 0;
`;

export const TimeText = styled.Text`
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  margin-top: -4px;
`;
