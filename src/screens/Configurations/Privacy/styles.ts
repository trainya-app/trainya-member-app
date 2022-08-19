import styled from 'styled-components/native';

import ShareIconSVG from '../../../assets/share_icon.svg';
import TermsIconSVG from '../../../assets/terms_icon.svg';
import PrivacyPolicyIconSVG from '../../../assets/privacypolicy_icon.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 24px;
`;

export const ShareIcon = styled(ShareIconSVG)`
  margin-right: 12px;
`;

export const TermsIcon = styled(TermsIconSVG)`
  margin-right: 12px;
`;

export const PrivacyPolicyIcon = styled(PrivacyPolicyIconSVG)`
  margin-right: 12px;
`;
