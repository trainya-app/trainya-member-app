/* eslint-disable react/no-array-index-key */
import {
  Container,
  SlideContainer,
  SwiperWrapper,
  Slide,
  SlideImage,
  Blur,
  Title,
} from './styles';

export interface SliderProps {
  title: string;
  url: string;
}

interface Props {
  data: SliderProps[];
}

export const Slider = ({ data }: Props) => (
  <Container>
    <SlideContainer>
      <SwiperWrapper>
        {data.map((item: SliderProps, index: number) => (
          <Slide key={index} onPress={() => console.log(item.title)}>
            <SlideImage source={{ uri: item.url }} />
            <Title>{item.title}</Title>
            <Blur />
          </Slide>
        ))}
      </SwiperWrapper>
    </SlideContainer>
  </Container>
);
