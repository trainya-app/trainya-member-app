import { Dispatch, SetStateAction, useState } from 'react';

import Swiper from 'react-native-swiper';

import Entypo from 'react-native-vector-icons/Entypo';
import { Button } from '../../../../../../components/Button';
import MemberProgressPhotosService from '../../../../../../services/MemberProgressPhotosService';

import {
  Modal,
  Overlay,
  ConfirmPhotosContainer,
  Title,
  Photo,
  IconWrapper,
} from './styles';

interface IConfirmUploadPhotosProps {
  visible: boolean;
  memberPhotos: string[];
  setMemberPhotos: Dispatch<SetStateAction<string[]>>;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  navigate: (screen: string) => void;
}

export const ConfirmUploadPhotos = ({
  visible,
  memberPhotos,
  setMemberPhotos,
  setVisibility,
  navigate,
}: IConfirmUploadPhotosProps) => {
  const [isUploading, setIsUploading] = useState(false);

  async function uploadPhotos() {
    setIsUploading(true);
    await MemberProgressPhotosService.uploadPhotos(
      memberPhotos[0],
      memberPhotos[1],
      memberPhotos[2]
    );
    setVisibility(false);
    navigate('Progress');
  }

  return (
    <Modal transparent visible={visible}>
      <Overlay>
        <ConfirmPhotosContainer>
          <Title>Deseja enviar essas fotos?</Title>
          <Swiper
            style={{ height: '100%' }}
            loop={false}
            showsButtons
            showsPagination={false}
            nextButton={
              <IconWrapper>
                <Entypo name="chevron-right" size={32} color="#fff" />
              </IconWrapper>
            }
            prevButton={
              <IconWrapper>
                <Entypo name="chevron-left" size={32} color="#fff" />
              </IconWrapper>
            }
          >
            {memberPhotos.map((photo) => (
              <Photo
                key={photo}
                source={{
                  uri: photo,
                }}
              />
            ))}
          </Swiper>
          <Button
            title={isUploading ? 'Enviando...' : 'Enviar'}
            fontSize={12}
            height={32}
            width={45}
            onPress={() => {
              uploadPhotos();
            }}
          />
          <Button
            title="Descartar"
            fontSize={12}
            height={32}
            width={45}
            color="#EF233C"
            style={{ backgroundColor: '#FFF5F5' }}
            onPress={() => {
              setVisibility(false);
              setMemberPhotos([]);
            }}
          />
        </ConfirmPhotosContainer>
      </Overlay>
    </Modal>
  );
};
