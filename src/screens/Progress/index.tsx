import { Chart } from '../../components/Chart';
import { Heading } from '../../components/Heading';
import { NavigationProps } from '../../types/NavigationProps';
import { ProgressBar } from '../Home/components/ProgressBar';
import { ScreenSwitcher } from '../MyWorkouts/components/SwitcherIndicator';
import {
  Container,
  GoalsContainer,
  GoalContainerTitle,
  ProgressBarLabel,
  ProgressBarIndicator,
} from './styles';

export const Progress = ({ navigation }: NavigationProps) => (
  <>
    <Heading
      title="Meu Progresso"
      onGoBack={() => navigation.goBack()}
      onPressConfig={() => navigation.navigate('Configurations')}
    />
    <Container>
      <ScreenSwitcher firstName="Fotos" secondName="Dados" />
      <Chart />
      <GoalsContainer>
        <GoalContainerTitle>Metas</GoalContainerTitle>

        <ProgressBarLabel>Freq. Dias</ProgressBarLabel>
        <ProgressBar progress_percentage={100} size="lg">
          <ProgressBarIndicator>20</ProgressBarIndicator>
        </ProgressBar>

        <ProgressBarLabel>Peso</ProgressBarLabel>
        <ProgressBar progress_percentage={20} size="lg">
          <ProgressBarIndicator>20</ProgressBarIndicator>
        </ProgressBar>

        <ProgressBarLabel>Massa Muscular</ProgressBarLabel>
        <ProgressBar progress_percentage={100} size="lg">
          <ProgressBarIndicator>20</ProgressBarIndicator>
        </ProgressBar>
      </GoalsContainer>
    </Container>
  </>
);
