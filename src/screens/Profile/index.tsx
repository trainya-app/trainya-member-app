import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
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
  TimeText,
} from './styles';

import { Heading } from '../../components/Heading';
import { ProfileHeader } from '../../components/ProfileHeader';
import { ProgressBar } from '../Home/components/ProgressBar';
import { ActivityContainer } from '../Home/components/ActivityContainer';
import { Slider, SliderProps } from '../../components/Slider';
import { PaymentCard } from '../Configurations/Payments/components/PaymentCard';

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
          onPressEditInfo={() => navigation.navigate('EditProfile')}
        />
        <Scroll>
          <CardLabel>Treino atual</CardLabel>
          <Card>
            <CardImage
              source={{
                uri: 'https://images.unsplash.com/photo-1601113329251-0aebe217bdbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              }}
            />
            <CardInfo>
              <Label>Progresso</Label>
              <StrongText>56%</StrongText>
              <ProgressBar progress_percentage={56} size="sm" />
            </CardInfo>
            <CardTitleContainer>
              <CardTitle>Braço</CardTitle>
            </CardTitleContainer>
          </Card>

          <CardLabel>Sua atividade</CardLabel>
          <ActivityContainer />

          <CardLabel>Favoritados</CardLabel>
          <Slider data={home_workouts} />

          <CardLabel>Suas aulas marcadas</CardLabel>
          <Carousel
            data={home_workouts}
            renderItem={({ item, index }) => (
              <Card>
                <CardImage
                  source={{ uri: item.url }}
                  style={{ opacity: 0.9 }}
                />
                <CardInfo>
                  <Label>Segunda-feira</Label>
                  <StrongText>26/04</StrongText>
                  <TimeText>ás 16:00</TimeText>
                </CardInfo>
                <CardTitleContainer>
                  <CardTitle>{item.title}</CardTitle>
                </CardTitleContainer>
              </Card>
            )}
            sliderWidth={width - 48}
            itemWidth={width - 48}
          />

          <CardLabel>Pagamentos</CardLabel>
          <PaymentCard
            date="25 de setembro de 2022"
            paymentStatus="pending"
            paymentValue={129.9}
          />
        </Scroll>
      </Container>
    </>
  );
};
