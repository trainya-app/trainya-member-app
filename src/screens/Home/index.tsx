import { useContext, useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { io } from 'socket.io-client';

import {
  Container,
  Header,
  HeaderImage,
  Title,
  Loading,
  LoadingContainer,
  Subtitle,
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
import MembersService, {
  IWorkoutPlanWorkout,
} from '../../services/MembersService';
import { WorkoutContext } from '../../contexts/WorkoutContext';

const socket = io("http://192.168.15.143:8080");


export const Home = ({ navigation }: Props) => {
  const { user } = useContext(AuthContext);
  const { workoutsFinished, setWorkoutsFinished } = useContext(WorkoutContext);
  const [isLoading, setIsLoading] = useState(true);
  const [memberWorkouts, setMemberWorkouts] = useState<IWorkoutPlanWorkout[]>();
  const [capacity, setCapacity] = useState(null);
  const [capacityOccupied, setCapacityOccupied] = useState(null);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
      socket.emit('join-gym', user?.gymId);

      (async () => {
        const { gym } = await GymServices.getGymData(user.gymId);

        setCapacityOccupied(gym.current_capacity);
        setCapacity(gym.max_capacity);
      })();

      // Getting member workout progress
      (async () => {
        try {
          const data = await MembersService.getAllMemberWorkoutPlans(user.id);
          setWorkoutsFinished(
            await MembersService.getWorkoutPlanWorkoutsFinished()
          );
          setMemberWorkouts(data.workoutPlan.workoutPlanWorkout);
        } catch (error) {
          setMemberWorkouts([]);
        }
      })();
    }
  }, [user]);

  function toggleGymCapacity(isLeaving: boolean) {
    if(isLeaving){
      setGymCapacity({
        currentCapacity: gymCapacity.currentCapacity - 1,
        maxCapacity: gymCapacity.maxCapacity,
        isLoading: false,
      })
    } else {
      setGymCapacity({
        currentCapacity: gymCapacity.currentCapacity + 1,
        maxCapacity: gymCapacity.maxCapacity,
        isLoading: false,
      })
    }
  }

  useEffect(() => {
    socket.on('update-capacity', (data) => {
      toggleGymCapacity(data.isLeaving);
    });
  }, [socket])

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
  const workout = memberWorkouts
    ? memberWorkouts[0]?.workout.title
    : '';
  const total_workouts = memberWorkouts ? memberWorkouts.length : 0;
  const workouts_finished = workoutsFinished.length;

  const progress_percentage = Math.round(
    (workouts_finished * 100) / total_workouts
  );

  const [greeting, setGreeting] = useState('');
  const time = new Date().getHours();

  function capacityColor() {
    if (capacityOccupied === capacity) {
      return '#EF233C';
    }
    if (capacityOccupied >= capacity / 2) {
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

  function getProgressPercentage() {
    if (memberWorkouts?.length === 0) {
      return 'Não há um plano de treino ativo';
    }

    if (progress_percentage < 9 && progress_percentage > 0) {
      return `0${progress_percentage}%`;
    }
    return `${progress_percentage}%`;
  }

  function getUserWorkoutInfo() {
    let workoutFormated = `${
      workout.split(' ')[0] === 'treino' || 'Treino'
        ? `Seu ${workout}`
        : `Seu treino de ${workout}`
    } está te esperando`;

    workoutFormated = workoutFormated.replace('Treino', 'treino');

    return workoutFormated;
  }

  return (
    <Container>
      <Header>
        <HeaderImage source={{ uri: image_url }} />
        {/* <NotificationIcon
          onPress={() => navigation.navigate('Notifications')}
        /> */}

        {!isLoading ? (
          <>
            <ConfigIcon onPress={() => navigation.navigate('Configurations')} />
            <HeaderContent>
              <Title>
                {greeting}, {user.name.split(' ')[0]}
              </Title>
              <Subtitle>
                {memberWorkouts?.length === 0
                  ? 'Você ainda não tem um plano de treino'
                  : getUserWorkoutInfo()}
              </Subtitle>
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
          </>
        ) : (
          <LoadingContainer>
            <Loading size={48} color={theme.colors.gray[100]} />
          </LoadingContainer>
        )}
      </Header>
      {!isLoading ? (
        <Scroll>
          <MainContainer>
            <ProgressSection>
              <Progress>
                <Label>Progresso</Label>
                {memberWorkouts === undefined ? (
                  <Loading size={48} color="#2176ff" style={{alignSelf: 'flex-start'}}/>
                ): (
                  <ProgressPercentage textLength={getProgressPercentage().length}>
                  {/* Adding 0 at the left of the number, in case it's lower than 10 */}
                  {memberWorkouts && getProgressPercentage()}
                </ProgressPercentage>
                )}
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
                  {!capacity && !capacityOccupied ? (
                    <Loading size={48} />
                  ) : (
                    <>
                      <InfoText fontSize={32} color={capacityColor()}>
                        {capacityOccupied}
                      </InfoText>
                      <InfoText color={capacityColor()} fontSize={10}>
                        Pessoas
                      </InfoText>
                    </>
                  )}
                </InfosContainer>

                <InfosContainer>
                  <InfoText fontSize={32}> / </InfoText>
                </InfosContainer>

                <InfosContainer>
                  {!capacity && !capacityOccupied ? (
                    <Loading size={48} color="#6C757D" />
                  ) : (
                    <>
                      <InfoText fontSize={32}>{capacity}</InfoText>
                      <InfoText fontSize={10}>Máximo</InfoText>
                    </>
                  )}
                </InfosContainer>
              </Infos>
            </CardContainer>

            <CardContainerTitle>Sua atividade</CardContainerTitle>
            <ActivityContainer />

            {/* <CardContainerTitle>Aulas Marcadas</CardContainerTitle>
            <Slider data={schedule_classes} /> */}

            <CardContainerTitle>Treinos livres</CardContainerTitle>
            <Slider
              data={home_workouts}
              seeMoreAction={() =>
                navigation.navigate('MyWorkoutsStack', {
                  screen: 'AvailableWorkouts',
                })
              }
            />
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
