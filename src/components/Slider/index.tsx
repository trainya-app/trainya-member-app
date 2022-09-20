/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  Container,
  SlideContainer,
  Slide,
  SlideImage,
  SeeMoreSlideContainer,
  Blur,
  Title,
} from './styles';

const { width } = Dimensions.get('window');

export interface SliderProps {
  title: string;
  url: string;
}

interface Props {
  data: SliderProps[];
  seeMoreAction?: () => void;
}

export const Slider = ({ data, seeMoreAction }: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = (item: SliderProps, index: number) =>
    index <= 2 ? (
      <Slide key={index} onPress={() => console.log(item.title)}>
        <SlideImage source={{ uri: item.url }} />
        <Title>{item.title}</Title>
        <Blur />
      </Slide>
    ) : (
      index === 3 && (
        <Slide key="4" onPress={seeMoreAction}>
          <SeeMoreSlideContainer>
            <Title isActive>Ver mais +</Title>
          </SeeMoreSlideContainer>
        </Slide>
      )
    );

  return (
    <Container>
      <SlideContainer>
        <Carousel
          data={data}
          renderItem={({ item, index }) => renderItem(item, index)}
          sliderWidth={width - 48}
          itemWidth={width - 48}
          onSnapToItem={(index: number) => setActiveSlide(index)}
        />
      </SlideContainer>

      <Pagination
        dotsLength={data.length < 4 ? data.length : 4}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 20,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 99,
          borderWidth: 1.7,
          borderColor: activeSlide === 3 ? '#2176FF' : 'white',
          marginHorizontal: -5,
          backgroundColor: activeSlide === 3 ? '#2176FF' : 'white',
        }}
        inactiveDotStyle={{
          backgroundColor: 'transparent',
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </Container>
  );
};
