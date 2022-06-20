import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface HeadingProps {
  isBlack?: boolean;
  themePreference: 'light' | 'dark';
}

export const Heading = styled.Text<HeadingProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ isBlack, themePreference, theme }) =>
    theme[themePreference].colors.blue[isBlack ? 900 : 100]};
  font-family: ${({ theme }) => theme.fonts.extrabold};
`;
