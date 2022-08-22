import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface PaymentProps {
  paymentStatus: string;
}

export const Container = styled.View`
  height: ${RFValue(172)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 24px;
  margin-top: 24px;
  elevation: 2;
`;

export const Header = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.blue[500]};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-bottom: 12px;
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const PaymentValue = styled.Text<PaymentProps>`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red.main};
`;

export const PaymentStatus = styled.Text<PaymentProps>`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: 4px;
  color: ${({ theme, paymentStatus }) =>
    paymentStatus === 'paid'
      ? theme.colors.green.main
      : theme.colors.orange.main};
`;

export const BoxRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const Wrapper = styled.View`
  padding: 0 24px;
`;
