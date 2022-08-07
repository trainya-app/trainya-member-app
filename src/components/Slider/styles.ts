import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Swiper from 'react-native-swiper';

import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const SlideContainer = styled.View`
  height: ${RFValue(200)}px;
  margin-left: -24px;
  width: ${width}px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
`;

export const SwiperWrapper = styled(Swiper).attrs({
  loop: false,
  overScrollMode: 'never',
  dotStyle: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 999,
    marginBottom: 16,
  },
  activeDotStyle: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 999,
    marginBottom: 16,
  },
})``;

export const Slide = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 24px solid transparent;
`;

export const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: white;
  position: absolute;
`;
