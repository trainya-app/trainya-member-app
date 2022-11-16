import { useState, useRef, useEffect } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Camera, CameraType, FlashMode } from 'expo-camera';
import {
  CameraComponent,
  Container,
  BodyImage,
  Pressable,
  Bottom,
} from './styles';
import { ConfirmUploadPhotos } from './components/ConfirmUploadPhotos';
import { NavigationProps } from '../../../../types/NavigationProps';

import bodyFrontImg from '../../../../assets/body-front.png';
import bodyBackImg from '../../../../assets/body-back.png';
import bodyAsideImg from '../../../../assets/body-aside.png';

export const CameraScreen = ({ navigation }: NavigationProps) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [flash, setFlash] = useState(FlashMode.off);
  const [memberPhotos, setMemberPhotos] = useState<string[]>([]);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    if (memberPhotos.length === 3) {
      setIsModalActive(true);
    }
  }, [memberPhotos]);

  const cameraRef = useRef();

  if (!permission) {
    requestPermission();
  }

  function toggleCameraMode() {
    setType((prev) =>
      prev === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  function toggleFlashMode() {
    setFlash((prev) =>
      prev === FlashMode.off ? FlashMode.torch : FlashMode.off
    );
  }

  async function takePicture() {
    const { uri }: { uri: string } = await cameraRef.current.takePictureAsync({
      base64: true,
      quality: 0,
      skipProcessing: true,
    });
    setMemberPhotos((prev) => [...prev, uri]);
  }

  function getBodyImage() {
    switch (memberPhotos.length) {
      case 0:
        return bodyFrontImg;
      case 1:
        return bodyBackImg;
      default:
        return bodyAsideImg;
    }
  }

  return (
    <Container>
      <CameraComponent
        flashMode={flash}
        ratio="16:9"
        type={type}
        ref={cameraRef}

      >
        <BodyImage source={getBodyImage()} />
        <Bottom>
          <Pressable onPress={() => toggleFlashMode()}>
            <Ionicons
              name={flash === FlashMode.off ? 'flash' : 'flash-off'}
              size={32}
              color="#2176ff"
            />
          </Pressable>
          <Pressable onPress={() => takePicture()}>
            <Ionicons name="camera" size={48} color="#2176ff" />
          </Pressable>
          <Pressable onPress={() => toggleCameraMode()}>
            <Ionicons name="camera-reverse" size={32} color="#2176ff" />
          </Pressable>
        </Bottom>
      </CameraComponent>
      <ConfirmUploadPhotos
        visible={isModalActive}
        memberPhotos={memberPhotos}
        setMemberPhotos={setMemberPhotos}
        setVisibility={setIsModalActive}
        navigate={(screen) => navigation.replace(screen)}
      />
    </Container>
  );
};
