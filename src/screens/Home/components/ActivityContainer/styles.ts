import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TextProps {
  color?: string;
  fontSize: number;
}

export const CardContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape.dark};
  padding: 24px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  margin: 16px 0 32px;
  elevation: 2;
`;

export const Infos = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const InfoText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ fontSize }) => RFValue(fontSize)}px;
  text-align: center;
  color: ${({ color, theme }) => (color ? color : theme.colors.gray[500])};
`;

export const ActivityInfoWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export const ActivityInfo = styled.View`
  width: 100%;
`;

export const ActivityProgressBar = styled.View`
  width: 10px;
  height: 100%;
  margin: 0 24px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.progressbar};
`;

export const ActivityUserProgress = styled.View`
  width: 10px;
  height: 75%;
  margin-right: 20px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.blue[500]};
  position: absolute;
  bottom: 0;
`;

export const ActivityGreeting = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  width: 100%;
  border-radius: 999px;
  margin-top: 20px;
  padding: 12px 0;
  align-items: center;
`;
