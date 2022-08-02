import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { StatusBar } from 'react-native';

import NotificationIconSVG from '../../assets/notification_icon.svg';
import ConfigIconSVG from '../../assets/config_icon.svg';

const StatusBarHeight = StatusBar.currentHeight;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
`;

export const Header = styled.View`
  width: 100%;
  height: 40%;
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
  left: 32px;
  top: ${18 + Number(StatusBarHeight)}px;
`;

export const ConfigIcon = styled(ConfigIconSVG)`
  position: absolute;
  right: 32px;
  top: ${18 + Number(StatusBarHeight)}px;
`;

export const Scroll = styled.ScrollView``;

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

export const ProgressBar = styled.View``;
