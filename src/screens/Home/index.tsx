import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useCustomTheme } from '../../hooks/useCustomTheme';
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
  CardContainerTitle,
  CardContainer,
  CardTitle,
  InfosContainer,
  Infos,
  InfoText,
  ActivityInfoWrapper,
  ActivityProgressBar,
  ActivityUserProgress,
  ActivityGreeting,
} from './styles';

import { ProgressBar } from './components/ProgressBar';
import { Button } from '../../components/Button';

export const Home = () => {
  const image_url = 'https://i.imgur.com/XLcRuY4.png';
  const user = 'Mariana';
  const workout = 'pernas';
  const total_workouts = 16;
  const workouts_finished = 3;
  const capacity = 50;
  const capacity_occupied = Math.round(Math.random() * 50);

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
  const customTheme = useCustomTheme();

  useEffect(() => {
    if (time >= 6 && time < 12) {
      setGreeting(`Bom dia, ${user}`);
    } else if (time >= 12 && time < 18) {
      setGreeting(`Boa tarde, ${user}`);
    } else {
      setGreeting(`Boa noite, ${user}`);
    }
  }, []);

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
            onPress={() => {
              customTheme.handleToggleColorMode();
            }}
            title="Treinar"
            width={50}
            height={40}
            style={{ marginTop: 24 }}
            fontSize={16}
          />
        </HeaderContent>
      </Header>

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
            onPress={() => console.log('fd')}
            title="Ver treinos"
            width={45}
            isRounded
            height={40}
            style={{ marginTop: 24, marginBottom: 24 }}
            fontSize={13}
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
              <InfoText fontSize={10} color={theme.colors.blue[500]}>
                Bom trabalho! Assim você vai longe
              </InfoText>
            </ActivityGreeting>
          </CardContainer>
        </MainContainer>
      </Scroll>
    </Container>
  );
};
