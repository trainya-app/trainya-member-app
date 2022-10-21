import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import {
  Container,
  Header,
  HeaderImage,
  Title,
  Loading,
  LoadingContainer,
  Subtitle,
  NotificationIcon,
  ConfigIcon,
  HeaderContent,
  Scroll,
  MainContainer,
  ProgressSection,
  Progress,
  Label,
  ProgressPercentage,
  Workouts,
  WorkoutsProgress,
  CardContainerTitle,
  CardContainer,
  CardTitle,
  InfosContainer,
  Infos,
  InfoText,
} from './styles';

import { NavigationProps as Props } from '../../types/NavigationProps';

import { SliderProps, Slider } from '../../components/Slider';

import { ProgressBar } from './components/ProgressBar';
import { Button } from '../../components/Button';
import { AuthContext } from '../../contexts/AuthContext';
import { ActivityContainer } from './components/ActivityContainer';
import GymServices from '../../services/GymServices';

export const Home = ({ navigation }: Props) => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [gymCapacity, setGymCapacity] = useState({
    maxCapacity: 0,
    currentCapacity: 0,
  });

  useEffect(() => {
    if (user) {
      setIsLoading(false);

      // Taking gym capacity from api
      (async () => {
        const { gym } = await GymServices.getGymData(user.gymId);
        setGymCapacity({
          currentCapacity: gym.current_capacity,
          maxCapacity: gym.max_capacity,
        });
      })();
    }
  }, [user]);

  const schedule_classes: SliderProps[] = [
    {
      title: 'Natação',
      url: 'https://i.imgur.com/1gCjdZo.jpeg',
    },
    {
      title: 'Boxe',
      url: 'https://i.imgur.com/pil1SdG.jpeg',
    },
    {
      title: 'Pilates',
      url: 'https://i.imgur.com/JLiVcK8.jpeg',
    },
  ];

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

  const image_url = 'https://i.imgur.com/XLcRuY4.png';
  const workout = 'pernas';
  const total_workouts = 16;
  const workouts_finished = 9;
  const capacity = gymCapacity.maxCapacity;
  const capacity_occupied = gymCapacity.currentCapacity;

  const progress_percentage = Math.round(
    (workouts_finished * 100) / total_workouts
  );

  const [greeting, setGreeting] = useState('');
  const time = new Date().getHours();

  function capacityColor() {
    if (capacity_occupied === capacity) {
      return '#EF233C';
    }
    if (capacity_occupied >= capacity / 2) {
      return '#F4A52D';
    }
    return '#05CA77';
  }

  const theme = useTheme();

  useEffect(() => {
    if (time >= 6 && time < 12) {
      setGreeting(`Bom dia`);
    } else if (time >= 12 && time < 18) {
      setGreeting(`Boa tarde`);
    } else {
      setGreeting(`Boa noite`);
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderImage source={{ uri: image_url }} />
        <NotificationIcon
          onPress={() => navigation.navigate('Notifications')}
        />
        <ConfigIcon onPress={() => navigation.navigate('Configurations')} />
        <HeaderContent>
          {!isLoading ? (
            <Title>
              {greeting}, {user.name.split(' ')[0]}
            </Title>
          ) : (
            <Loading size={48} color={theme.colors.gray[100]} />
          )}
          <Subtitle>Seu treino de {workout} está te esperando</Subtitle>
          <Button
            title="Treinar"
            width={50}
            height={40}
            style={{ marginTop: 24 }}
            fontSize={16}
            onPress={() =>
              navigation.navigate('MyWorkoutsStack', {
                screen: 'AvailableWorkouts',
              })
            }
          />
        </HeaderContent>
      </Header>
      {!isLoading ? (
        <Scroll>
          <MainContainer>
            <ProgressSection>
              <Progress>
                <Label>Progresso</Label>
                <ProgressPercentage>
                  {/* Adding 0 at the left of the number, in case it's lower than 10 */}
                  {progress_percentage.toString().length === 1
                    ? `0${progress_percentage}`
                    : progress_percentage}
                  %
                </ProgressPercentage>
              </Progress>
              <Workouts>
                <Label>
                  Treinos:
                  <WorkoutsProgress>
                    {` ${workouts_finished}/${total_workouts}`}
                  </WorkoutsProgress>
                </Label>
              </Workouts>
            </ProgressSection>

            <ProgressBar progress_percentage={progress_percentage} />

            <Button
              title="Ver treinos"
              width={45}
              isRounded
              height={40}
              style={{ marginTop: 24, marginBottom: 24 }}
              fontSize={13}
              onPress={() =>
                navigation.navigate('MyWorkoutsStack', {
                  screen: 'WorkoutsPlans',
                })
              }
            />

            <CardContainer>
              <CardTitle>Agora na academia</CardTitle>
              <Infos>
                <InfosContainer>
                  <InfoText color={capacityColor()} fontSize={32}>
                    {capacity_occupied}
                  </InfoText>
                  <InfoText color={capacityColor()} fontSize={10}>
                    Pessoas
                  </InfoText>
                </InfosContainer>

                <InfosContainer>
                  <InfoText fontSize={32}> / </InfoText>
                </InfosContainer>

                <InfosContainer>
                  <InfoText fontSize={32}>{capacity}</InfoText>
                  <InfoText fontSize={10}>Máximo</InfoText>
                </InfosContainer>
              </Infos>
            </CardContainer>

            <CardContainerTitle>Sua atividade</CardContainerTitle>
            <ActivityContainer />

            <CardContainerTitle>Aulas Marcadas</CardContainerTitle>
            <Slider data={schedule_classes} />
            <CardContainerTitle>Treinos para fazer em casa</CardContainerTitle>
            <Slider data={home_workouts} />
          </MainContainer>
        </Scroll>
      ) : (
        <LoadingContainer>
          <Loading size={64} color={theme.colors.blue[300]} />
        </LoadingContainer>
      )}
    </Container>
  );
};
