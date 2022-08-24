import { RFValue } from 'react-native-responsive-fontsize';
import { MotiView } from 'moti';
import styled from 'styled-components/native';

interface SwitcherProps {
  isBlack?: boolean;
}

export const Switcher = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  height: ${RFValue(36)}px;
  width: 70%;
  border-radius: 999px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 6px;
`;

export const SwitcherButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 50%;
  align-items: center;
`;

export const SwitcherIndicator = styled(MotiView)`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  height: ${RFValue(28)}px;
  width: 50%;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
`;

export const SwitcherText = styled.Text<SwitcherProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(10)}px;
  color: ${({ isBlack }) => (isBlack ? '#000' : '#FFF')};
  padding: 6px;
`;
