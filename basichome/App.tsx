/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import BottomBar from './components/BottomBar';
import TopImage from './components/topImage';
import CardsContainer from './components/CardsContainer';
import JobsCards from './components/JobsCards';
import Carousel from './components/Carousel';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={{paddingHorizontal: 20}}>
          <TopImage />
          <Carousel />
          <CardsContainer />
        </View>

        <JobsCards />
      </ScrollView>

      <BottomBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F8',
    fontFamily: 'Poppins-Regular',
  },
  scrollContainer: {
    marginBottom: 50,
  },
});

export default App;
