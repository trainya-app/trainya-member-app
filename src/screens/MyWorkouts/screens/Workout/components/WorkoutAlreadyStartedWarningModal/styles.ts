import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Modal = styled.Modal.attrs({
    transparent: true,
    animationType: 'fade',
})``;

export const Overlay = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const NestedModal = styled.Modal.attrs({
    transparent: true,
    visible: true,
    animationType: 'slide',
})``;

export const ModalContainer = styled.View`
    width: 100%;
    height: 75%;
    background-color: ${({ theme }) => theme.colors.text.inverted};
    position: absolute;
    bottom: 0;
    padding: 48px 24px;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    text-transform: uppercase;
`;

export const Subtitle = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.gray[700]};
    text-transform: uppercase;
    margin-top: 12px;
`;

export const WorkoutName = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.blue[500]};
    text-transform: uppercase;
    margin-top: 12px;
`;