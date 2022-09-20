import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

const { height } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape.main};
  padding: 0 24px;
  padding-bottom: ${RFValue(96)}px;
`;

export const Separator = styled.View`
  background-color: #99C0FF;
  height: 1px;
  width: 100%;
  margin-bottom: 16px;
`;

export const WorkoutsContainer = styled.View`
  width: 100%;
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  overScrollMode: 'never',
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const SliderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${RFValue(16)}px;
  margin-right: auto;
`;
