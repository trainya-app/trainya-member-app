import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import FavoriteIconSVG from '../../../../assets/favorite_icon.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 24px;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  width: 100%;
  height: 128px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold}
  font-size: ${RFValue(28)}px;
`;

export const FavoriteIcon = styled(FavoriteIconSVG)`
  position: absolute;
  right: 16px;
  top: 16px;
`;
