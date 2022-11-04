import { useState } from 'react';
import Swiper from 'react-native-swiper';
import { Chart } from '../../components/Chart';
import { Heading } from '../../components/Heading';
import { NavigationProps } from '../../types/NavigationProps';
import { ProgressBar } from '../Home/components/ProgressBar';
import { ScreenSwitcher } from '../MyWorkouts/components/SwitcherIndicator';
import { DatePicker } from './components/DatePicker';
import {
  Container,
  GoalsContainer,
  GoalContainerTitle,
  ProgressBarLabel,
  ProgressBarIndicator,
  PhotoContainer,
  Row,
  BodyIcon,
  CameraContainer,
} from './styles';

import CameraIcon from '../../assets/camera-icon.svg';

import bodyAsideImg from '../../assets/body-aside.png';
import bodyFrontImg from '../../assets/body-front.png';
import bodyBackImg from '../../assets/body-back.png';

export const Progress = ({ navigation }: NavigationProps) => {
  const [isScreenSwitched, setIsScreenSwitched] = useState(false);

  const images = [
    {
      id: 1,
      image: bodyFrontImg,
    },
    {
      id: 2,
      image: bodyBackImg,
    },
    {
      id: 3,
      image: bodyAsideImg,
    },
  ];
  return (
    <>
      <Heading
        title="Meu Progresso"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <ScreenSwitcher
          firstName="Fotos"
          secondName="Dados"
          toggleIsActive={setIsScreenSwitched}
        />
        {isScreenSwitched ? (
          <>
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
          </>
        ) : (
          <>
            <Row>
              <DatePicker />
              <CameraContainer>
                <CameraIcon />
              </CameraContainer>
            </Row>

            <PhotoContainer>
              <Swiper loop={false}>
                <BodyIcon source={images[2].image} />
                <BodyIcon source={bodyFrontImg} />
                <BodyIcon source={bodyAsideImg} />
              </Swiper>
            </PhotoContainer>
          </>
        )}
      </Container>
    </>
  );
};
