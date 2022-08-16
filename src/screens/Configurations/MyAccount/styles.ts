import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import EditIcon from '../../../assets/edit_profile_icon.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 56px 24px 20% 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 32px 0;
`;

export const ProfileImageContainer = styled.View``;

export const ProfilePhoto = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: 999px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.colors.blue[600]};
`;

export const ChangePhotoIconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.95,
})`
  position: absolute;
  background-color: white;
  padding: 10px;
  border-radius: 999px;
  border-color: ${({ theme }) => theme.colors.blue[100]};
  border-width: 2px;
  bottom: 0;
  right: 0;
`;
export const ChangePhotoIcon = styled(EditIcon)``;

export const ProfileInfoContainer = styled.View`
  flex: 1;
  margin-left: 16px;
  justify-content: center;
`;

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  font-size: ${RFValue(20)}px;
  text-transform: uppercase;
`;

export const GymLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-transform: uppercase;
`;

export const GymName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => (theme.title === 'dark' ? '#FFF' : '#000')};
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const BoxDirectionRow = styled.View`
  flex-direction: row;
`;

export const Scroll = styled.ScrollView.attrs({
  overScrollMode: 'never',
  showsVerticalScrollIndicator: false,
})``;
