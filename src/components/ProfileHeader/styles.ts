import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import EditIcon from '../../assets/edit_profile_icon.svg';

interface IModalButtonProps {
  type: 'confirm' | 'cancel';
}

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

export const ConfirmChangePhotoModal = styled.Modal.attrs({
  transparent: true,
})``;

export const Overlay = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const ModalContainer = styled.View`
  background-color: white;
  padding: 24px 48px;
  border-radius: 24px;
`;

export const NewPhoto = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
  align-self: center;
  margin-bottom: 24px;
  border-radius: 999px;
`;

export const ModalContainerText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;

export const ModalContainerSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.red.main};
  font-size: ${RFValue(10)}px;
  text-align: center;
  margin-top: 8px;
`;

export const ModalContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`;

export const ModalButton = styled.TouchableOpacity<IModalButtonProps>`
  width: 45%;
  height: ${RFValue(32)}px;
  align-items: center;
  justify-content: center;
  background: ${({ theme, type }) =>
    type === 'cancel' ? theme.colors.red.bg : theme.colors.blue[500]};
  border-radius: 12px;
`;

export const ModalButtonText = styled.Text<IModalButtonProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === 'cancel' ? theme.colors.red.main : '#FFFFFF'};
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#FFFFFF',
})``;
