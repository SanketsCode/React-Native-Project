import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TopImage() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 5,
      }}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 80,
  },
});
