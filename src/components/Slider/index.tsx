/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import {
  Container,
  SlideContainer,
  SwiperWrapper,
  Slide,
  SlideImage,
  SeeMoreSlideContainer,
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

export const Slider = ({ data }: Props) => {
  const [dotActive, setDotActive] = useState(false);
  return (
    <Container>
      <SlideContainer>
        <SwiperWrapper
          activeDotColor={dotActive ? '#2176FF' : 'white'}
          onIndexChanged={(index) =>
            index === 3 ? setDotActive(true) : setDotActive(false)
          }
          dotStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            borderColor: dotActive ? '#2176FF' : 'white',
            width: 10,
            height: 10,
            borderRadius: 999,
            marginBottom: 16,
          }}
          activeDotStyle={{
            width: 10,
            height: 10,
            borderRadius: 999,
            marginBottom: 16,
          }}
        >
          {data.map((item: SliderProps, index: number) =>
            index <= 2 ? (
              <Slide key={index} onPress={() => console.log(item.title)}>
                <SlideImage source={{ uri: item.url }} />
                <Title>{item.title}</Title>
                <Blur />
              </Slide>
            ) : (
              index === 3 && (
                <Slide key="4" onPress={() => console.log('Ver mais +')}>
                  <SeeMoreSlideContainer>
                    <Title isActive>Ver mais +</Title>
                  </SeeMoreSlideContainer>
                </Slide>
              )
            )
          )}
        </SwiperWrapper>
      </SlideContainer>
    </Container>
  );
};
