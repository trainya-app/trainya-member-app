import { Dimensions } from 'react-native';

import { Camera } from 'expo-camera';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #000;
`;

export const BodyImage = styled.Image`
  transform: scale(1.3);
  margin-bottom: 24px;
`;

export const CameraComponent = styled(Camera)`
  width: ${width}px;
  height: ${width * 1.78}px;
  align-items: center;
  justify-content: center;
`;

export const Pressable = styled.TouchableOpacity``;

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 24px;
`;
