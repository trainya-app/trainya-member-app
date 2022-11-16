import { useContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { VStack, useToast } from 'native-base';

import { KeyboardAvoidingView } from 'react-native';
import { useTheme } from 'styled-components';
import { Heading } from '../../../components/Heading';
import { AuthContext } from '../../../contexts/AuthContext';
import { NavigationProps } from '../../../types/NavigationProps';
import {
  Container,
  Scroll,
  ProfileImageContainer,
  ChangePhotoIconContainer,
  ChangePhotoIcon,
  TextInput,
  TextInputMasked,
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
  InputContainer,
  LabelInput,
  DefaultPhoto,
  Username
} from './styles';

import MembersService from '../../../services/MembersService';
import { Button } from '../../../components/Button';

export const EditProfile = ({ navigation }: NavigationProps) => {
  const theme = useTheme();
  const placeholder = `${theme.colors.text.light}`;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState('');

  const toast = useToast();

  const { user, setUser } = useContext(AuthContext);

  const [inputName, setInputName] = useState(user.name);
  const [inputPhone, setInputPhone] = useState(user.phone);
  const [inputHeight, setInputHeight] = useState(user.height);
  const [inputWeight, setInputWeight] = useState(user.weight);

  const [error, setError] = useState(false);

  const [requestSended, setRequestSended] = useState(false);

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
    setUser({ ...user, avatar_url: photoPreview });
    setIsModalVisible(false);
    setIsLoading(false);
  }

  async function handleEditProfile() {
    if (inputPhone.length < 15) {
      setError(true);
      toast.show({
        title: 'Telefone inválido',
        placement: 'bottom',
        style: {
          marginBottom: 90,
        },
        bgColor: 'red.500',
        duration: 2500,
      });
      return;
    }

    setRequestSended(true);
    const data = await MembersService.editMemberProfileInfo(
      user.id,
      inputName,
      user.email,
      inputPhone,
      inputWeight,
      inputHeight
    );

    if (data.message === 'Dados atualizados!') {
      setRequestSended(false);
      setUser({
        ...user,
        name: inputName,
        phone: inputPhone,
        weight: inputWeight,
        height: inputHeight,
      });

      toast.show({
        title: 'Dados atualizados!',
        placement: 'bottom',
        style: {
          marginBottom: 90,
        },
        bgColor: 'green.500',
        duration: 2500,
      });

      navigation.goBack();
    }
  }

  const username = user.name.split(' ');

  return (
    <>
      <Heading
        title="Editar Perfil"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Scroll keyboardShouldPersistTaps="always">
            <ProfileImageContainer>
              <ChangePhotoIconContainer onPress={() => handleChoosePhoto()}>
                <ChangePhotoIcon />
              </ChangePhotoIconContainer>


            {user.avatar_url ? (
              <UserPhoto source={{ uri: user.avatar_url }} />
            ) : (
              <DefaultPhoto>
                <Username style={{fontSize: 40, color: '#2176ff'}}>{username[0].charAt(0) + username[username.length - 1].charAt(0)}</Username>
              </DefaultPhoto>
            )}
            </ProfileImageContainer>
            <TextInput
              placeholder="Nome"
              placeholderTextColor={placeholder}
              onChangeText={(text) => setInputName(text)}
              defaultValue={inputName}
            />
            <TextInputMasked
              placeholder="Número de Telefone"
              placeholderTextColor={placeholder}
              value={inputPhone}
              onChangeText={(text: string) => setInputPhone(text)}
              error={error}
              keyboardType="numeric"
              type="cel-phone"
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) ',
              }}
            />
            <InputContainer>
              <TextInput
                placeholder="Altura"
                placeholderTextColor={placeholder}
                defaultValue={inputHeight}
                onChangeText={(text) => setInputHeight(text)}
                keyboardType="numeric"
              />
              <LabelInput>cm</LabelInput>
            </InputContainer>
            <InputContainer>
              <TextInput
                placeholder="Peso"
                placeholderTextColor={placeholder}
                defaultValue={inputWeight}
                onChangeText={(text) => setInputWeight(text)}
                keyboardType="numeric"
              />
              <LabelInput>kg</LabelInput>
            </InputContainer>
            <Button
              fontSize={12}
              height={48}
              title="Salvar edição"
              width={100}
              style={{ marginTop: 24 }}
              onPress={() => handleEditProfile()}
              disabled={requestSended}
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
