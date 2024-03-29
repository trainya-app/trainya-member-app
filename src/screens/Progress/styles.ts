import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 40px;
  padding-bottom: ${RFValue(96)}px;
`;

export const GoalsContainer = styled.View`
  flex: 1;
`;

export const GoalContainerTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.blue[500]};
  margin-bottom: 8px;
`;

export const ProgressBarLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.blue[500]};
  margin: 8px 0;
`;

export const ProgressBarIndicator = styled.Text`
  position: absolute;
  right: 8px;
  font-family: ${({ theme }) => theme.fonts.extrabold};
  font-size: ${RFValue(14)}px;
  color: #fff;
`;

export const PhotoContainer = styled.View`
  background-color: #fff;
  margin-top: 12px;
  flex: 0.95;
  border-radius: 24px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const MemberImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 100%;
  width: 100%;
`;

export const CameraContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: #99c0ff;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 40px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
