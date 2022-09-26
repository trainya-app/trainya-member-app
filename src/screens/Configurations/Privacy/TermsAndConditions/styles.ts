import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 24px 128px 24px;
`;

export const PrivacyPolicyContent = styled.View`
  flex: 1;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px 24px;
  justify-content: center;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  overScrollMode: 'never',
})``;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const PrivacyPolicyContentText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: justify;
`;
