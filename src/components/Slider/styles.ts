import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

interface TitleProps {
  isActive?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const SlideContainer = styled.View`
  margin-top: 16px;
  margin-bottom: 32px;
  height: ${RFValue(150)}px;
  width: ${width}px;
`;

export const Slide = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

export const SeeMoreSlideContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`;

export const Blur = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  position: absolute;
  background-color: black;
  opacity: 0.2;
`;

export const Title = styled.Text<TitleProps>`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ isActive }) => (isActive ? '#2176FF' : 'white')};
  position: absolute;
  z-index: 1;
`;
