import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';

const data = [
  {
    img: require('../assets/banner1.png'),
  },
  {
    img: require('../assets/banner2.png'),
  },
  {
    img: require('../assets/banner3.png'),
  },
];

export default function Carousels() {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  return (
    <View>
      <Carousel
        layout={'default'}
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={Dimensions.get('window').width - 40}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={(index: number) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 20,
          height: 5,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#3265CB',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
