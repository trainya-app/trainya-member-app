import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import FavoriteIconSVG from '../../../../../../assets/favorite_icon.svg';

export const CardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  width: 100%;
  height: 128px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Blur = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[500]};
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(28)}px;
`;

export const CardImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  z-index: -3;
`;

export const FavoriteIcon = styled(FavoriteIconSVG)`
  position: absolute;
  right: 16px;
  top: 16px;
`;
