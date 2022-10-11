import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import EditIcon from '../../../assets/edit_profile_icon.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 24px;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 32,
  },
  showsVerticalScrollIndicator: false,
  overScrollMode: 'never',
})``;

export const ProfileImageContainer = styled.View`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;

export const ChangePhotoIcon = styled(EditIcon)``;

export const BoxRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxColumn = styled.View`
  flex-direction: column;
  flex: 1;
  padding-left: 24px;
`;

export const TextInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.text.inverted};
  color: ${({ theme }) => theme.colors.text.default};
  height: 52px;
  border-radius: 16px;
  elevation: 2;
  margin: 8px 0;
  padding: 16px 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
`;
