import { useTheme } from 'styled-components';
import {
  CardContainer,
  Infos,
  ActivityInfoWrapper,
  InfoText,
  ActivityProgressBar,
  ActivityUserProgress,
  ActivityGreeting,
} from './styles';

export const ActivityContainer = () => {
  const theme = useTheme();

  return (
    <CardContainer>
      <Infos>
        <ActivityInfoWrapper>
          <InfoText color={theme.colors.blue[900]} fontSize={24}>
            01
          </InfoText>
          <InfoText fontSize={8}>Semanas de treino consecutivas</InfoText>
        </ActivityInfoWrapper>

        <ActivityProgressBar>
          <ActivityUserProgress />
        </ActivityProgressBar>

        <ActivityInfoWrapper>
          <InfoText color={theme.colors.blue[900]} fontSize={24}>
            Alto
          </InfoText>
          <InfoText fontSize={8}>Engajamento com a academia</InfoText>
        </ActivityInfoWrapper>
      </Infos>

      <ActivityGreeting>
        <InfoText fontSize={10} color="#2176ff">
          Bom trabalho! Assim você vai longe
        </InfoText>
      </ActivityGreeting>
    </CardContainer>
  );
};
