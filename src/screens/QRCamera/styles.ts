import styled from 'styled-components/native';
import QRCode from 'react-native-qrcode-svg';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  padding: 48px 24px 0 24px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
`;

export const QRContainer = styled.View`
  background-color: #ffffff;
  width: ${RFValue(300)}px;
  height: ${RFValue(300)}px;
  align-items: center;
  justify-content: center;
  border-width: 4px;
  border-radius: 24px;
  margin-top: 32px;
`;

export const QR = styled(QRCode)``;
