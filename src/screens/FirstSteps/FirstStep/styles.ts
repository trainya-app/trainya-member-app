import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import ProgressBarSVG from '../assets/progressbar.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 48px 24px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const ProgressBar = styled(ProgressBarSVG)`
  margin-top: 32px;
  margin-bottom: 56px;
  align-self: center;
`;

export const Label = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.extrabold};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(48)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue[500]};
  border-radius: 12px;
  top: 12px;
  align-self: center;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.blue[100]};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
