import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import LogoSvgLight from '../../assets/logo_light.svg';
import LogoSvgDark from '../../assets/logo_dark.svg';

export const LogoLight = styled(LogoSvgLight).attrs({
  width: `${RFValue(195)}`,
})`
  position: absolute;
  opacity: ${({ theme }) => (theme.title === 'light' ? 1 : 0)};
`;

export const LogoDark = styled(LogoSvgDark).attrs({
  width: `${RFValue(195)}`,
})`
  position: absolute;
  opacity: ${({ theme }) => (theme.title === 'dark' ? 1 : 0)};
`;
