import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: #2176ff;

  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(20)}px;

  shadow-color: rgba(0, 0, 0, 0.4);
  elevation: 2;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: #ebf2ff;
`;
