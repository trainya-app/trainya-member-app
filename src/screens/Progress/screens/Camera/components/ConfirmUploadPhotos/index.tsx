import Swiper from 'react-native-swiper';

import Entypo from 'react-native-vector-icons/Entypo';

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
}

export const ConfirmUploadPhotos = ({
  visible,
  memberPhotos,
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
        </ConfirmPhotosContainer>
      </Overlay>
    </Modal>
  );
};
