import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { StatusBar } from 'react-native';

import NotificationIconSVG from '../../assets/notification_icon.svg';
import ConfigIconSVG from '../../assets/config_icon.svg';

const StatusBarHeight = StatusBar.currentHeight;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
`;
export const HeaderImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.extrabold};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
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
