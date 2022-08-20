import styled from 'styled-components/native';
import UserIconSVG from '../../../assets/user_icon.svg';
import PaymentsIconSVG from '../../../assets/payments_icon.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 24px;
`;

export const UserIcon = styled(UserIconSVG)`
  margin-right: 12px;
`;

export const PaymentsIcon = styled(PaymentsIconSVG)`
  margin-right: 12px;
`;
