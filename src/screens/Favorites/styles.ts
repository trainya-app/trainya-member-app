import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import StarIconSVG from '../../assets/star.svg';
import StarIconDarkSVG from '../../assets/star_dark.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const StarIcon = styled(StarIconSVG)``;

export const StarIconDark = styled(StarIconDarkSVG)``;

export const StrongText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => (theme.title === 'light' ? '#000' : '#FFF')};
  margin-top: 32px;
  text-align: center;
`;

export const Text = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => (theme.title === 'light' ? '#000' : '#FFF')};
  margin-top: 32px;
  text-align: center;
`;
