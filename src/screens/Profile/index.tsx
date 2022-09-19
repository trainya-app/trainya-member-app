import { NavigationProps } from '../../types/NavigationProps';
import {
  Container,
  Scroll,
  CardLabel,
  CurrentWorkoutCard,
  CurrentWorkoutImage,
  CurrentWorkoutTitleContainer,
  CurrentWorkoutTitle,
  WorkoutProgress,
  Label,
  ProgressText
} from './styles';

import { Heading } from '../../components/Heading';
import { ProfileHeader } from '../../components/ProfileHeader';
import { ProgressBar } from '../Home/components/ProgressBar';
import { ActivityContainer } from '../Home/components/ActivityContainer';

export const Profile = ({ navigation }: NavigationProps) => (
  <>
    <Heading
      title="Perfil"
      onGoBack={() => navigation.goBack()}
      onPressConfig={() => navigation.navigate('Configurations')}
    />

    <Container>
      <ProfileHeader onPressChangePhoto={() => navigation.navigate('ChangePhoto')} />
        <Scroll>
          <CardLabel>Treino atual</CardLabel>
          <CurrentWorkoutCard>
            <CurrentWorkoutImage source={{ uri: 'https://images.unsplash.com/photo-1601113329251-0aebe217bdbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }} />
            <WorkoutProgress>
              <Label>Progresso</Label>
              <ProgressText>56%</ProgressText>
              <ProgressBar progress_percentage={56} size='sm'/>
            </WorkoutProgress>
            <CurrentWorkoutTitleContainer>
              <CurrentWorkoutTitle>Braço</CurrentWorkoutTitle>
            </CurrentWorkoutTitleContainer>
          </CurrentWorkoutCard>

          <CardLabel>Sua atividade</CardLabel>
          <ActivityContainer />
        </Scroll>
    </Container>
  </>
);
