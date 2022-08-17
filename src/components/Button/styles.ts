import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

interface ButtonProps {
  isRounded: boolean;
  width: number;
  height: number;
}

interface TextProps {
  fontSize: number;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: ${({ width }) => width}%;
  height: ${({ height }) => RFValue(height)}px;
  background-color: #2176ff;

  align-items: center;
  justify-content: center;
  border-radius: ${({ isRounded, width }) =>
    isRounded ? RFValue(999) : RFValue(width * 0.2)}px;
`;

export const TextButton = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ fontSize }) => RFValue(fontSize)}px;
  color: #ebf2ff;
`;
