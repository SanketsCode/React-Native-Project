import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CardsContainer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you Looking for </Text>
      {/* Main Container  */}
      <View style={styles.mainContainer}>
        {/* First Card  */}
        <View style={styles.bigCard}>
          <Image
            style={styles.image}
            source={require('../assets/headhunting.png')}
          />
          <Text style={[styles.boldText, {marginTop: 20, marginBottom: 20}]}>
            500+
          </Text>
          <Text style={{fontSize: 15, fontWeight: '700'}}>
            Active Recruiters
          </Text>
        </View>
        {/* Second Two Card Container  */}
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '47%',
          }}>
          <View style={styles.smallCard1}>
            <Text style={[styles.boldText]}>Looking for Job</Text>
            <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
              click here
            </Text>
          </View>
          <View style={styles.smallCard2}>
            <Text style={styles.boldText}>Looking for Candidate</Text>
            <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
              click here
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    paddingVertical: 15,
    color: '#140C3A',
  },
  image: {
    height: 60,
    width: 60,
  },
  bigCard: {
    backgroundColor: '#BCEAFC',
    width: '47%',
    borderRadius: 7,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,

    marginRight: 5,
  },
  smallCard1: {
    backgroundColor: '#BBB0F8',
    borderRadius: 7,
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    display: 'flex',
    marginBottom: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallCard2: {
    backgroundColor: '#F8D8B2',
    borderRadius: 7,
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    display: 'flex',
    marginTop: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#140C3A',
  },
});
