import { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Camera, CameraType, FlashMode } from 'expo-camera';
import { CameraComponent, Container, Pressable, Bottom } from './styles';

export const CameraScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [flash, setFlash] = useState(FlashMode.off);

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

  console.log(Camera.Constants);

  return (
    <Container>
      <CameraComponent flashMode={flash} ratio="16:9" type={type}>
        <Bottom>
          <Pressable onPress={() => toggleFlashMode()}>
            <Ionicons
              name={flash === FlashMode.off ? 'flash' : 'flash-off'}
              size={32}
              color="#2176ff"
            />
          </Pressable>
          <Pressable>
            <Ionicons name="camera" size={48} color="#2176ff" />
          </Pressable>
          <Pressable onPress={() => toggleCameraMode()}>
            <Ionicons name="camera-reverse" size={32} color="#2176ff" />
          </Pressable>
        </Bottom>
      </CameraComponent>
    </Container>
  );
};
