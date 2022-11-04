import { useState, useEffect } from 'react';
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
  MemberImage,
  CameraContainer,
} from './styles';

import CameraIcon from '../../assets/camera-icon.svg';
import MembersService from '../../services/MembersService';

export const Progress = ({ navigation }: NavigationProps) => {
  const [isScreenSwitched, setIsScreenSwitched] = useState(false);
  const [memberPhotosProgress, setMemberPhotosProgress] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await MembersService.listAllMemberPhotoProgress();
      setMemberPhotosProgress(data);
      setIsLoading(false);
    })();
  }, []);

  console.log(memberPhotosProgress);

  const firstPhoto = isLoading ? '' : memberPhotosProgress[0].firstPhoto_url;
  const secondPhoto = isLoading ? '' : memberPhotosProgress[0].secondPhoto_url;
  const thirdPhoto = isLoading ? '' : memberPhotosProgress[0].thirdPhoto_url;

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
              <CameraContainer onPress={() => navigation.navigate('Camera')}>
                <CameraIcon />
              </CameraContainer>
            </Row>

            <PhotoContainer>
              <Swiper loop={false}>
                <MemberImage
                  source={{
                    uri: firstPhoto,
                  }}
                />
                <MemberImage
                  source={{
                    uri: secondPhoto,
                  }}
                />
                <MemberImage
                  source={{
                    uri: thirdPhoto,
                  }}
                />
              </Swiper>
            </PhotoContainer>
          </>
        )}
      </Container>
    </>
  );
};
