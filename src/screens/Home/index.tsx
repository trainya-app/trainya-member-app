import { useContext, useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
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

export const Home = ({ navigation }: Props) => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [memberWorkouts, setMemberWorkouts] = useState<IWorkoutPlanWorkout[]>();
  const [finishedWorkouts, setFinishedWorkouts] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [gymCapacity, setGymCapacity] = useState({
    maxCapacity: 0,
    currentCapacity: 0,
    isLoading: true,
  });

  useEffect(() => {
    if (user) {
      setIsLoading(false);

      // Getting gym capacity from api every 20 seconds
      if (isFirstRender) {
        setIsFirstRender(false);
        (async () => {
          const { gym } = await GymServices.getGymData(user.gymId);
          setGymCapacity({
            currentCapacity: gym.current_capacity,
            maxCapacity: gym.max_capacity,
            isLoading: false,
          });
        })();
      }

      const takeGymCapacityEvery20Seconds = setInterval(() => {
        (async () => {
          setGymCapacity({
            currentCapacity: 0,
            maxCapacity: 0,
            isLoading: true,
          });
          const { gym } = await GymServices.getGymData(user.gymId);
          setGymCapacity({
            currentCapacity: gym.current_capacity,
            maxCapacity: gym.max_capacity,
            isLoading: false,
          });
        })();
      }, 20000);

      // Getting member workout progress
      (async () => {
        try {
          const data = await MembersService.getAllMemberWorkoutPlans(user.id);
          setFinishedWorkouts(
            await MembersService.getWorkoutPlanWorkoutsFinished()
          );
          setMemberWorkouts(data.workoutPlan.workoutPlanWorkout);

          console.log(
            data.workoutPlan.workoutPlanWorkout.map((workout) => workout.id)
          );
        } catch (error) {
          setMemberWorkouts([]);
        }
      })();

      return () => {
        clearInterval(takeGymCapacityEvery20Seconds);
      };
    }
  }, [user]);

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
    ? memberWorkouts[0]?.workout.title.toLowerCase()
    : '';
  const total_workouts = memberWorkouts ? memberWorkouts.length : 0;
  const workouts_finished = finishedWorkouts.length;
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
    return `${
      workout.split(' ')[0] === 'treino'
        ? `Seu ${workout}`
        : `Seu treino de ${workout}`
    } está te esperando`;
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
                <ProgressPercentage textLength={getProgressPercentage().length}>
                  {/* Adding 0 at the left of the number, in case it's lower than 10 */}
                  {memberWorkouts && getProgressPercentage()}
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
                  {gymCapacity.isLoading ? (
                    <Loading size={48} />
                  ) : (
                    <>
                      <InfoText fontSize={32} color={capacityColor()}>
                        {capacity_occupied}
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
                  {gymCapacity.isLoading ? (
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
