import { useContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
  Header,
  ProfileImageContainer,
  ProfilePhoto,
  ChangePhotoIconContainer,
  ChangePhotoIcon,
  ProfileInfoContainer,
  Username,
  ConfirmChangePhotoModal,
  Overlay,
  ModalContainer,
  NewPhoto,
  ModalContainerText,
  ModalContainerSubtitle,
  ModalContainerButtons,
  ModalButton,
  ModalButtonText,
  Loading,
} from './styles';

import { Button } from '../Button';
import { AuthContext } from '../../contexts/AuthContext';
import MembersService from '../../services/MembersService';

interface ProfileHeaderProps {
  onPressEditInfo: () => void;
}
export const ProfileHeader = ({ onPressEditInfo }: ProfileHeaderProps) => {
  const { user } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState('');
  const [photo, setPhoto] = useState('');

  async function handleChoosePhoto() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhotoPreview(result.uri);
      setIsModalVisible(true);
    }
  }

  async function uploadPhoto() {
    setIsLoading(true);
    await MembersService.updateAvatar(photoPreview);
    setPhoto(photoPreview);
    setIsModalVisible(false);
    setIsLoading(false);
  }

  function getPhoto() {
    return photo !== '' ? photo : user.avatar_url;
  }

  return (
    <Header>
      <ProfileImageContainer>
        <ProfilePhoto source={{ uri: getPhoto() }} />
        {/* <ChangePhotoIconContainer onPress={handleChoosePhoto}>
          <ChangePhotoIcon />
        </ChangePhotoIconContainer> */}
      </ProfileImageContainer>
      <ProfileInfoContainer>
        <Username>{user.name}</Username>
        <Button
          title="Editar informações"
          width={70}
          height={36}
          style={{ marginTop: 12 }}
          fontSize={11}
          onPress={onPressEditInfo}
        />
      </ProfileInfoContainer>

      <ConfirmChangePhotoModal visible={isModalVisible}>
        <Overlay>
          <ModalContainer>
            <NewPhoto
              source={{
                uri: photoPreview,
              }}
            />
            <ModalContainerText>Confirmar mudança de foto?</ModalContainerText>
            <ModalContainerSubtitle>
              Você só poderá alterar novamente daqui a 15 dias
            </ModalContainerSubtitle>

            <ModalContainerButtons>
              <ModalButton type="confirm" onPress={() => uploadPhoto()}>
                <ModalButtonText type="confirm">
                  {isLoading ? <Loading /> : 'Confirmar'}
                </ModalButtonText>
              </ModalButton>
              <ModalButton
                type="cancel"
                onPress={() => setIsModalVisible(false)}
                disabled={isLoading}
              >
                <ModalButtonText type="cancel">Cancelar</ModalButtonText>
              </ModalButton>
            </ModalContainerButtons>
          </ModalContainer>
        </Overlay>
      </ConfirmChangePhotoModal>
    </Header>
  );
};
