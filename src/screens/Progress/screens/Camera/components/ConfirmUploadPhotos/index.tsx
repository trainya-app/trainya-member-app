import { Dispatch, SetStateAction } from 'react';

import Swiper from 'react-native-swiper';

import Entypo from 'react-native-vector-icons/Entypo';
import { Button } from '../../../../../../components/Button';

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
}

export const ConfirmUploadPhotos = ({
  visible,
  memberPhotos,
  setMemberPhotos,
  setVisibility,
}: IConfirmUploadPhotosProps) => {
  const a = 'a';
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
            title="Descartar"
            fontSize={12}
            height={32}
            width={45}
            color="#EF233C"
            style={{ marginTop: 12, backgroundColor: '#FFF5F5' }}
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
