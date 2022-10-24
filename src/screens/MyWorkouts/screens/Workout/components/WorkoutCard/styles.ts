import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import CheckActiveIcon from '../../../../../../assets/checkicon.svg';
import PaperIconSVG from '../../../../../../assets/papericon.svg';

interface CheckboxProps {
  isChecked: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Card = styled.View`
  width: 100%;
  margin-top: 48px;
  margin-bottom: 256px;
`;

export const Top = styled.View`
  justify-content: flex-end;
`;

export const WorkoutVideo = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  height: 150px;
`;

export const CheckboxContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  flex-direction: row;
  position: absolute;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 50%;
  border-radius: 16px;
  bottom: -24px;
  z-index: 10;
`;

export const CheckboxText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.blue[500]};
`;

export const Checkbox = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<CheckboxProps>`
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.blue[500] : 'white'};
  height: 28px;
  width: 28px;
  margin-left: 12px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.blue[500]};
  align-items: center;
  justify-content: center;
`;

export const CheckActive = styled(CheckActiveIcon)<CheckboxProps>`
  opacity: ${({ isChecked }) => (isChecked ? '1' : '0')};
`;

export const WorkoutInfo = styled.View`
  background-color: white;
  padding: 48px 24px 24px 24px;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  z-index: -5;
`;

export const WorkoutName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.blue[500]};
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const Sets = styled.View``;

export const Reps = styled.View`
  margin-left: 12px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text.default};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text.default};
`;

export const CounterContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 12px;
  margin-top: 20px;
  padding: 0 24px;
  height: 48px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const CurrentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text.default};
`;

export const Timer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text.default};
  margin-right: 36px;
`;

export const PlayContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  width: 48px;
  height: 48px;
  position: absolute;
  right: 0;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const PaperIcon = styled(PaperIconSVG)``;
