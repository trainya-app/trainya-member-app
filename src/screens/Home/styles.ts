import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { StatusBar } from 'react-native';

import NotificationIconSVG from '../../assets/notification_icon.svg';
import ConfigIconSVG from '../../assets/config_icon.svg';

const StatusBarHeight = StatusBar.currentHeight;

interface TextProps {
  color?: string;
  fontSize: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding-bottom: ${RFValue(96)}px;
`;

export const Header = styled.View`
  width: 100%;
  height: 40%;
  align-items: center;
`;
export const HeaderImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const HeaderContent = styled.View`
  align-items: center;
  position: absolute;
  bottom: 15%;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(26)}px;
  font-family: ${({ theme }) => theme.fonts.extrabold};
`;

export const Subtitle = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  text-align: center;
  margin-top: 5px;
  padding: 0 14%;
`;

export const NotificationIcon = styled(NotificationIconSVG)`
  position: absolute;
  left: 24px;
  top: 24px;
`;

export const ConfigIcon = styled(ConfigIconSVG)`
  position: absolute;
  right: 24px;
  top: 24px;
`;

export const Scroll = styled.ScrollView.attrs({
  overScrollMode: 'never',
})``;

export const MainContainer = styled.View`
  padding: 12px 24px;
`;

export const ProgressSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Progress = styled.View``;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const ProgressPercentage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.blue[900]};
`;

export const Workouts = styled.View``;

export const WorkoutsProgress = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.blue[900]};
`;

export const CardContainerTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${RFValue(16)}px;
`;

export const CardContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 24px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  margin: 16px 0 32px;
  elevation: 2;
`;

export const InfosContainer = styled.View`
  align-items: center;
`;

export const Infos = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 8px;
`;

export const InfoText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ fontSize }) => RFValue(fontSize)}px;
  text-align: center;
  color: ${({ color, theme }) => (color ? color : theme.colors.gray[500])};
`;

export const ActivityInfoWrapper = styled.View`
  /* width: ${RFPercentage(18)}px; */
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
