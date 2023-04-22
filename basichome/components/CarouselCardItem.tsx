import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width - 200;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

interface prop {
  item: {
    img: any;
  };
  index: number;
}

const CarouselCardItem = ({item, index}: prop) => {
  return (
    <View style={styles.container} key={index}>
      <Image resizeMode="contain" source={item.img} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: '90%',
    height: 180,
  },
});

export default CarouselCardItem;
