import { useContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { KeyboardAvoidingView } from 'react-native';
import { useTheme } from 'styled-components';
import { Heading } from '../../../components/Heading';
import { AuthContext } from '../../../contexts/AuthContext';
import { NavigationProps } from '../../../types/NavigationProps';
import {
  Container,
  Scroll,
  ProfileImageContainer,
  ChangePhotoIcon,
  TextInput,
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
  UserPhoto,
} from './styles';

import MembersService from '../../../services/MembersService';

export const EditProfile = ({ navigation }: NavigationProps) => {
  const theme = useTheme();
  const placeholder = `${theme.colors.text.light}`;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState('');

  const { user } = useContext(AuthContext);

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
    setIsModalVisible(false);
    setIsLoading(false);
  }

  return (
    <>
      <Heading
        title="Editar Perfil"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Scroll>
            <ProfileImageContainer onPress={() => handleChoosePhoto()}>
              <ChangePhotoIcon />
              <UserPhoto source={{ uri: user.avatar_url }} />
            </ProfileImageContainer>
            <TextInput
              placeholder="Nome"
              placeholderTextColor={placeholder}
              defaultValue={user.name}
            />
            <TextInput
              placeholder="Número de Telefone"
              placeholderTextColor={placeholder}
              defaultValue={user.phone}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Data de Nascimento"
              placeholderTextColor={placeholder}
              defaultValue={user.birth_date}
            />

            <TextInput
              placeholder="Altura"
              placeholderTextColor={placeholder}
              defaultValue={user.height}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Peso"
              placeholderTextColor={placeholder}
              defaultValue={`${user.weight}kg`}
              keyboardType="numeric"
            />
          </Scroll>

          <ConfirmChangePhotoModal visible={isModalVisible}>
            <Overlay>
              <ModalContainer>
                <NewPhoto
                  source={{
                    uri: photoPreview,
                  }}
                />
                <ModalContainerText>
                  Confirmar mudança de foto?
                </ModalContainerText>
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
        </KeyboardAvoidingView>
      </Container>
    </>
  );
};
