import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.light.colors.blue[500]};

  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(20)}px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.light.colors.white};
`;
