import {
  Container,
  SlideContainer,
  SwiperWrapper,
  Slide,
  SlideImage,
  Title,
} from './styles';

// interface SliderProps {
//   onPress: () => void;
// }

// interface Props {
//   data: SliderProps;
// }

export const Slider = () => (
  <Container>
    <SlideContainer>
      <SwiperWrapper>
        <Slide>
          <SlideImage
            source={{
              uri: 'https://i.imgur.com/1gCjdZo.jpg',
            }}
          />
          <Title>Natação</Title>
        </Slide>
        <Slide>
          <SlideImage
            source={{
              uri: 'https://i.imgur.com/pil1SdG.jpg',
            }}
          />
          <Title>Boxe</Title>
        </Slide>
        <Slide>
          <SlideImage
            source={{
              uri: 'https://i.imgur.com/JLiVcK8.jpg',
            }}
          />
          <Title>Pilates</Title>
        </Slide>
      </SwiperWrapper>
    </SlideContainer>
  </Container>
);
