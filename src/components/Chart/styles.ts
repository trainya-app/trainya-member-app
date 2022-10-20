import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IVerticalBar {
  progress: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: white;
  height: 250px;
  margin-top: 24px;
  margin-bottom: 32px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`;

export const ChartContainer = styled.View`
  width: 90%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  overScrollMode: 'never',
  contentContainerStyle: {
    alignItems: 'flex-end',
    padding: 24,
    paddingRight: 12,
  },
})``;

export const BarContainer = styled.View`
  width: 48px;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-right: 16px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  font-size: 12px;
  margin-top: 12px;
`;

export const VerticalBarWrapper = styled.View`
  flex: 1;
`;

export const VerticalBarShadow = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[100]}BB;
  flex: 1;
  border-radius: 12px;
  justify-content: flex-end;
`;

export const VerticalBar = styled.View<IVerticalBar>`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  border-radius: 12px;
  height: ${({ progress }) => progress * 10}%;
  width: 48px;
`;
