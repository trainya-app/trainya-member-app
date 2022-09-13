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

export const Scroll = styled.ScrollView`
   
`;

export const ExerciseCard = styled.View`
    background-color: ${({ theme }) => theme.colors.blue[100]};
    padding: 20px 16px;
    flex-direction: row;
    border-radius: 24px;
`;

export const Image = styled.Image`
    height: 64px;
    width: 30%;
`;

export const Wrapper = styled.View`
    margin-left: 16px;
    justify-content: center;
`;

export const ExerciseName = styled.Text<ThemeProps>`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ colorMode }) => colorMode === 'light' ? '#2176FF' : '#fff'};
    font-size: ${RFValue(16)}px;
`;

export const ExerciseSets = styled.Text<ThemeProps>`
    font-family: ${({ theme }) => theme.fonts.semibold};
    color: ${({ colorMode }) => colorMode === 'light' ? '#00378F' : '#6C757D'};
    font-size: ${RFValue(12)}px;
`;
