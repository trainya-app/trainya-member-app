import styled from 'styled-components/native';
import CloseIconSVG from '../../../../../../assets/close-icon.svg';

export const Modal = styled.Modal.attrs({
  transparent: true,
})``;

export const Background = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 1;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  border-radius: 24px;
  width: 100%;
  overflow: hidden;
  align-self: center;
`;

export const Top = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  padding: 12px 24px;
  flex-direction: row;
  justify-content: center;
`;

export const CloseIcon = styled(CloseIconSVG)`
  position: absolute;
  align-self: center;
  right: 24px;
  padding: 8px;
`;

export const Bottom = styled.View`
  background-color: #fff;
  padding: 24px 24px 0px 24px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  color: #fff;
`;

export const WarningText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
`;
