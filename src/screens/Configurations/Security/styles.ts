import styled from 'styled-components/native';
import PasswordIconSVG from '../../../assets/password_icon.svg';
import TwoFactorsIconSVG from '../../../assets/twofactors_icon.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 24px;
`;

export const PasswordIcon = styled(PasswordIconSVG)`
  margin-right: 12px;
`;

export const TwoFactorsIcon = styled(TwoFactorsIconSVG)`
  margin-right: 12px;
`;
