import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import BackIconSVGDark from '../../assets/back_icon_black.svg';
import ConfigIconSVGDark from '../../assets/config_icon_black.svg';
import BackIconSVG from '../../assets/back_icon.svg';
import ConfigIconSVG from '../../assets/config_icon.svg';

interface TitleProps {
  colorMode: string;
}

interface ContainerProps {
  b?: string | undefined;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding: 32px 24px;
  background-color: ${({ theme, b }) => (b ? b : theme.colors.blue[100])};
  z-index: 999;
`;

export const Title = styled.Text<TitleProps>`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.extrabold};
  color: ${({ colorMode }) => (colorMode === 'light' ? '#000' : '#FFF')};
`;

export const IconWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 0 4px;
`;

export const BackIcon = styled(BackIconSVGDark)``;

export const ConfigIcon = styled(ConfigIconSVGDark)``;

export const BackIconDark = styled(BackIconSVG)``;

export const ConfigIconDark = styled(ConfigIconSVG)``;
