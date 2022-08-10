import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import BackIconSVG from '../../assets/back_icon_black.svg';
import ConfigIconSVG from '../../assets/config_icon_black.svg';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.extrabold};
`;

export const BackIcon = styled(BackIconSVG)``;

export const ConfigIcon = styled(ConfigIconSVG)``;
