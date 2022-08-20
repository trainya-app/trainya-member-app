import styled from 'styled-components/native';
import { MotiView } from 'moti';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex: 0.6;
  align-items: flex-end;
  margin-left: 12px;
`;

export const ButtonContainer = styled(MotiView)`
  flex: 1;
  flex-direction: row;
  width: 100%;
  border-radius: 999px;
  align-items: center;
  background-color: #e2e8f0;
`;

export const ButtonIconContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const ButtonIndicator = styled(MotiView)`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 70%;
  border-radius: 12px;
  background-color: white;
  margin: 0 8px;
`;

export const ButtonIcon = styled(MotiView)``;
