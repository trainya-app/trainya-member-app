import { useState, useEffect, useContext } from 'react';
import { NavigationProps } from '../../types/NavigationProps';
import {
  Container,
  Scroll,
  CardLabel,
  Card,
  CardImage,
  CardTitleContainer,
  CardTitle,
  CardInfo,
  Label,
  StrongText,
} from './styles';

import { Heading } from '../../components/Heading';
import { ProfileHeader } from '../../components/ProfileHeader';
import { ProgressBar } from '../Home/components/ProgressBar';
import { ActivityContainer } from '../Home/components/ActivityContainer';
import { Chart } from '../../components/Chart';
import MembersService, { IWorkoutPlan } from '../../services/MembersService';
import { AuthContext } from '../../contexts/AuthContext';
import { WorkoutContext } from '../../contexts/WorkoutContext';

export const Profile = ({ navigation }: NavigationProps) => {
  const [memberWorkouts, setMemberWorkouts] = useState<IWorkoutPlan>();
  const { user } = useContext(AuthContext);
  const { workoutsFinished } = useContext(WorkoutContext);

  useEffect(() => {
    (async () => {
      try {
        const data = await MembersService.getAllMemberWorkoutPlans(user.id);
        setMemberWorkouts(data.workoutPlan);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, []);

  const finished_workouts = workoutsFinished.length;
  const total_workouts = memberWorkouts?.workoutPlanWorkout.length || 0;

  const workoutPlanName = memberWorkouts?.goal;

  const progress_percentage = Math.round(
    (finished_workouts * 100) / total_workouts
  );

  return (
    <>
      <Heading
        title="Perfil"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />

      <Container>
        <ProfileHeader
          onPressEditInfo={() => navigation.navigate('EditProfile')}
          type="profile"
        />
        <Scroll>
          <CardLabel>Treino atual</CardLabel>
          {memberWorkouts ? (
            <Card>
              <CardImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1601113329251-0aebe217bdbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                }}
              />
              <CardInfo>
                <Label>Progresso</Label>
                <StrongText>{progress_percentage || 0}%</StrongText>
                <ProgressBar
                  progress_percentage={progress_percentage || 0}
                  size="sm"
                />
              </CardInfo>
              <CardTitleContainer>
                <CardTitle>{workoutPlanName}</CardTitle>
              </CardTitleContainer>
            </Card>
          ) : (
            <Card style={{ alignItems: 'center', paddingHorizontal: 20 }}>
              <Label style={{ textAlign: 'center' }}>
                Ainda não há nenhum plano de treino definido para você, entre em
                contato com a sua academia
              </Label>
            </Card>
          )}
          <CardLabel>Sua atividade</CardLabel>
          <ActivityContainer />

          {/* <CardLabel>Favoritados</CardLabel>
          <Slider data={home_workouts} /> */}

          {/* {memberClasses.length !== 0 && (
            <>
              <CardLabel>Suas aulas marcadas</CardLabel>
              <Carousel<any>
                data={memberClasses || []}
                renderItem={({ item }) => (
                  <Card>
                    <CardImage
                      source={{ uri: 'https://i.imgur.com/JLiVcK8.jpeg' }}
                      style={{ opacity: 0.9 }}
                    />
                    <CardInfo>
                      <Label>{item.class.classWeekDay[0].weekDay.name}</Label>
                      <StrongText>Horário</StrongText>
                      <TimeText>
                        ás {String(item.class.hour).replace('.', ':')}
                      </TimeText>
                    </CardInfo>
                    <CardTitleContainer>
                      <CardTitle>{item.class.title}</CardTitle>
                    </CardTitleContainer>
                  </Card>
                )}
                sliderWidth={width - 48}
                itemWidth={width - 48}
              />
            </>
          )} */}

          <CardLabel>Sua frequência de dias</CardLabel>
          <Chart />
          {/* <CardLabel>Pagamentos</CardLabel>
          <PaymentCard
            date="25 de setembro de 2022"
            paymentStatus="pending"
            paymentValue={129.9}
          /> */}
        </Scroll>
      </Container>
    </>
  );
};
