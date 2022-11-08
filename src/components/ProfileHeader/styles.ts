import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import EditIcon from '../../assets/edit_profile_icon.svg';

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const ProfileImageContainer = styled.View`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: 999px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.colors.blue[600]};
`;

export const ProfilePhoto = styled.Image`
  flex: 1;
  border-radius: 999px;
`;

export const ChangePhotoIconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
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
  font-size: 28px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.default};
`;

export const GymText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  text-transform: uppercase;
  font-size: ${RFValue(8)}px;
  margin-top: 8px;
  color: #6c757d;
`;

export const GymName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  text-transform: uppercase;
  font-size: ${RFValue(16)}px;
  color: #005ef5;
`;
