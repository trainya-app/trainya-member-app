import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  HeaderImage,
  Title,
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
} from './styles';

import { ProgressBar } from './components/ProgressBar';
import { Button } from '../../components/Button';

export const Home = () => {
  const image_url = 'https://i.imgur.com/XLcRuY4.png';
  const user = 'Danielle';
  const workout = 'pernas';
  const total_workouts = 24;
  const workouts_finished = 9;
  const progress_percentage = Math.round(
    (workouts_finished * 100) / total_workouts
  );

  const [greeting, setGreeting] = useState('');
  const time = new Date().getHours();

  useEffect(() => {
    if (time >= 6 && time < 12) {
      setGreeting(`Bom dia, ${user}`);
    } else if (time >= 12 && time < 18) {
      setGreeting(`Boa tarde, ${user}`);
    } else {
      setGreeting(`Boa noite, ${user}`);
    }
  });

  return (
    <Container>
      <StatusBar translucent />
      <Header>
        <HeaderImage source={{ uri: image_url }} />
        <NotificationIcon />
        <ConfigIcon />
        <HeaderContent>
          <Title>{greeting}</Title>
          <Subtitle>Seu treino de {workout} está te esperando</Subtitle>
          <Button
            onPress={() => console.log('a')}
            title="Treinar"
            width={50}
            height={40}
            style={{ marginTop: 24 }}
          />
        </HeaderContent>
      </Header>
      <Scroll>
        <MainContainer>
          <ProgressSection>
            <Progress>
              <Label>Progresso</Label>
              <ProgressPercentage>{progress_percentage}%</ProgressPercentage>
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
        </MainContainer>
      </Scroll>
    </Container>
  );
};
