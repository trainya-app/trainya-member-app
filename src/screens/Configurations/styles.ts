import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 24px;
  padding-bottom: 96px;
`;

export const LogoutButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background-color: ${({ theme }) => theme.colors.red.bg};
  width: 40%;
  align-items: center;
  justify-content: center;
  padding: 8px;

  margin-top: 32px;
  margin-bottom: 2px;
  border-radius: 12px;
  elevation: 1;
`;

export const LogoutButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.red.main};
  opacity: 0.6;
`;

export const Scroll = styled.ScrollView.attrs({
  overScrollMode: 'never',
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;
