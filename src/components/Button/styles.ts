import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

interface ButtonProps {
  isRounded: boolean;
}
export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: #2176ff;

  align-items: center;
  justify-content: center;
  border-radius: ${({ isRounded }) =>
    isRounded ? RFValue(999) : RFValue(20)}px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: #ebf2ff;
`;
