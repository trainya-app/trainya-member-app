import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Modal = styled.Modal``;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

export const ConfirmPhotosContainer = styled.View`
  background-color: #fff;
  width: 90%;
  height: 70%;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`;

export const Photo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
`;

export const IconWrapper = styled.View`
  background-color: #2176ff;
  border-radius: 999px;
`;
