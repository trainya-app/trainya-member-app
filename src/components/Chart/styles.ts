import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface IIndicatorProps {
  opacity: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.text.inverted};
  margin-top: 24px;
  margin-bottom: 32px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  height: 250px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.text.inverted};
`;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  overScrollMode: 'never',
  contentContainerStyle: {
    paddingTop: 32,
  },
})`
  bottom: 0;
  position: absolute;
  margin-left: -64px;
  margin-right: 12px;
  padding-left: 3px;
`;

export const IndicatorWrapper = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
  position: absolute;
  opacity: 0.4;
  z-index: 0;
  margin-left: 13px;
`;

export const Pressable = styled.Pressable`
  z-index: 20;
`;

export const Indicator = styled.View<IIndicatorProps>`
  height: 100%;
  width: ${width / 7.7}px;
  opacity: ${({ opacity }) => opacity};
  background-color: #609dff50;
  align-items: center;
  justify-content: center;
`;

export const IndicatorText = styled.Text`
  color: #2176ff;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  position: absolute;
  bottom: 48px;
`;

export const MonthLabelWrapper = styled.View`
  position: absolute;
  top: 24px;
  flex-direction: row;
`;

export const MonthLabel = styled.Text`
  width: ${width / 7.7}px;
  text-align: center;
  bottom: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text.default};
`;
