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
  padding: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  margin-bottom: 16px;
`;

export const Photo = styled.Image.attrs({})`
  flex: 1;
  border-radius: 24px;
`;

export const IconWrapper = styled.View`
  background-color: #2176ff;
  border-radius: 999px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
`;
