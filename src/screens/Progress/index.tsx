import { useState, useEffect } from 'react';
import { useToast } from 'native-base';

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
import MembersService, {
  IMemberPhotosProgress,
} from '../../services/MembersService';

export const Progress = ({ navigation }: NavigationProps) => {
  const [isScreenSwitched, setIsScreenSwitched] = useState(false);
  const [memberPhotosProgress, setMemberPhotosProgress] = useState<
    IMemberPhotosProgress[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const toast = useToast();

  function showToast(text: string, sucess: 'succes' | 'error') {
    toast.show({
      title: text,
      placement: 'bottom',
      bgColor: sucess === 'succes' ? 'green.500' : 'red.500',
      duration: 2500,
      style: {
        marginBottom: 64,
      },
    });
  }

  useEffect(() => {
    (async () => {
      const data = await MembersService.listAllMemberPhotoProgress();
      setMemberPhotosProgress(data);
      setIsLoading(false);
    })();
  }, []);

  const firstPhoto = isLoading
    ? ''
    : memberPhotosProgress[selectedMonth].firstPhoto_url;

  const secondPhoto = isLoading
    ? ''
    : memberPhotosProgress[selectedMonth].secondPhoto_url;

  const thirdPhoto = isLoading
    ? ''
    : memberPhotosProgress[selectedMonth].thirdPhoto_url;

  const isImagesLoaded = firstPhoto && secondPhoto && thirdPhoto;

  return (
    <>
      <Heading
        title="Meu Progresso"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        {/* <ScreenSwitcher
          firstName="Fotos"
          secondName="Dados"
          toggleIsActive={setIsScreenSwitched}
        /> */}
        {/* {isScreenSwitched ? (
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
        ) : ( */}
        <>
          <Row>
            <DatePicker
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
            />
            <CameraContainer
              onPress={() =>
                !memberPhotosProgress[new Date().getMonth()].firstPhoto_url &&
                selectedMonth === new Date().getMonth() &&
                memberPhotosProgress.length > 0
                  ? navigation.navigate('Camera')
                  : showToast(
                      'Não é possível alterar as imagens do mês atual',
                      'error'
                    )
              }
            >
              <CameraIcon />
            </CameraContainer>
          </Row>

          <PhotoContainer>
            {isImagesLoaded ? (
              <Swiper loop={false} index={0}>
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
            ) : (
              <ProgressBarLabel>
                Sem fotos para o mês selecionado
              </ProgressBarLabel>
            )}
          </PhotoContainer>
        </>
        {/* )} */}
      </Container>
    </>
  );
};
