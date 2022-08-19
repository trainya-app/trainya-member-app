import styled from 'styled-components/native';
import { MotiView } from 'moti';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 42px;
  height: 24px;
  margin: 0 12px;
`;

export const ButtonContainer = styled(MotiView)`
  flex: 1;
  flex-direction: row;
  width: 100%;
  border-radius: 999px;
  align-items: center;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.blue[500] : theme.colors.gray[300]};
`;

export const ButtonIconContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const ButtonIndicator = styled(MotiView)`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 19px;
  height: 19px;
  border-radius: 12px;
  background-color: white;
  margin: 0 4px;
`;

export const ButtonIcon = styled(MotiView)``;
