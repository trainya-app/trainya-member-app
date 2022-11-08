import styled from 'styled-components/native';
import QRCode from 'react-native-qrcode-svg';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  align-items: center;
  justify-content: center;
  padding-bottom: ${RFValue(126)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  height: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text.default};
`;

export const QRContainer = styled.View`
  background-color: #ffffff;
  width: ${RFValue(300)}px;
  height: ${RFValue(300)}px;
  align-items: center;
  justify-content: center;
  border-width: 4px;
  border-radius: 24px;
  border-color: ${({ theme }) => theme.colors.text.default};
  margin-top: 32px;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const QR = styled(QRCode as any)``;
