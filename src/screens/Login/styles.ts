import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[500]};
`;

export const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.Image`
  width: ${RFValue(170)}px;
  height: ${RFValue(39)}px;
`;

export const LoginContent = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  width: 100%;
  padding: 0 24px;
  height: ${RFPercentage(85)}px;
  border-top-left-radius: ${RFValue(48)}px;
  border-top-right-radius: ${RFValue(48)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.blue[900]};
  font-family: ${({ theme }) => theme.fonts.extrabold};
  font-size: ${RFValue(40)}px;
  margin-bottom: ${RFValue(48)}px;
`;

export const ForgotPasswordWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const ForgotPasswordText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-top: 16px;
  margin-bottom: ${RFValue(32)}px;
`;
