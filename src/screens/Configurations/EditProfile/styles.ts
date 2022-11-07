import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import EditIcon from '../../../assets/edit_profile_icon.svg';

interface IModalButtonProps {
  type: 'confirm' | 'cancel';
}

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
  align-self: center;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  margin-bottom: 16px;
`;

export const ChangePhotoIconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  background-color: #fff;
  padding: 12px;
  right: 0;
  bottom: 0;
  border-radius: 999px;
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

export const UserPhoto = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  z-index: -5;
  background-color: #2176ff;
  position: absolute;
  border-radius: 999px;
`;

export const InputContainer = styled.View`
  justify-content: center;
`;

export const LabelInput = styled.Text`
  position: absolute;
  right: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #2176ff;
`;
