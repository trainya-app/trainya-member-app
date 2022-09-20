import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
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
  ProgressText,
} from './styles';

import { Heading } from '../../components/Heading';
import { ProfileHeader } from '../../components/ProfileHeader';
import { ProgressBar } from '../Home/components/ProgressBar';
import { ActivityContainer } from '../Home/components/ActivityContainer';
import { Slider, SliderProps } from '../../components/Slider';

const { width } = Dimensions.get('window');

export const Profile = ({ navigation }: NavigationProps) => {
  const home_workouts: SliderProps[] = [
    {
      title: 'Cardio',
      url: 'https://i.imgur.com/kvD2fSZ.jpg',
    },
    {
      title: 'Força',
      url: 'https://i.imgur.com/M4n35v8.png',
    },
    {
      title: 'Flexibilidade',
      url: 'https://i.imgur.com/uoQYf1c.jpg',
    },
    {
      title: 'Pilates',
      url: 'https://i.imgur.com/JLiVcK8.jpeg',
    },
    {
      title: 'Pilates',
      url: 'https://i.imgur.com/JLiVcK8.jpeg',
    },
  ];

  return (
    <>
      <Heading
        title="Perfil"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />

      <Container>
        <ProfileHeader
          onPressChangePhoto={() => navigation.navigate('ChangePhoto')}
        />
        <Scroll>
          <CardLabel>Treino atual</CardLabel>
          <CurrentWorkoutCard>
            <CurrentWorkoutImage
              source={{
                uri: 'https://images.unsplash.com/photo-1601113329251-0aebe217bdbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              }}
            />
            <WorkoutProgress>
              <Label>Progresso</Label>
              <ProgressText>56%</ProgressText>
              <ProgressBar progress_percentage={56} size="sm" />
            </WorkoutProgress>
            <CurrentWorkoutTitleContainer>
              <CurrentWorkoutTitle>Braço</CurrentWorkoutTitle>
            </CurrentWorkoutTitleContainer>
          </CurrentWorkoutCard>

          <CardLabel>Sua atividade</CardLabel>
          <ActivityContainer />

          <CardLabel>Favoritados</CardLabel>
          <Slider data={home_workouts} />
        </Scroll>
      </Container>
    </>
  );
};
