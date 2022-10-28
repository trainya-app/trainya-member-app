import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ThemeProps {
  colorMode: 'light' | 'dark';
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape.main};
  padding: 0 24px;
`;

export const Top = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.blue[500]};
  margin-bottom: 12px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.blue[500]};
  margin-bottom: 24px;
  text-align: center;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  overScrollMode: 'never',
})`
  margin-bottom: 16px;
`;

export const ExerciseCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 20px 16px;
  flex-direction: row;
  border-radius: 24px;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  height: 64px;
  width: 30%;
`;

export const Wrapper = styled.View`
  padding: 0 96px 0 16px;
  justify-content: center;
`;

export const ExerciseName = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ colorMode }) => (colorMode === 'light' ? '#2176FF' : '#fff')};
  font-size: ${RFValue(14)}px;
`;

export const ExerciseSets = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ colorMode }) => (colorMode === 'light' ? '#00378F' : '#6C757D')};
  font-size: ${RFValue(12)}px;
`;

export const FinishWorkoutButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  margin-bottom: 12px;
`;

export const FinishWorkoutButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.blue[500]};
  padding: 24px;
`;
