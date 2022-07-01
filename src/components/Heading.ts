import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface HeadingProps {
  isBlack?: boolean;
}

export const Heading = styled.Text<HeadingProps>`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.extrabold};
`;
