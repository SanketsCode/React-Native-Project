import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="home-outline" size={25} />
        <Text style={styles.iconText}>Home</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcons name="work-outline" size={25} />
        <Text style={styles.iconText}>Jobs</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name="user" size={35} />
        <Text style={styles.iconText}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 40,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 50,
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontWeight: '500',
    fontFamily: 'Poppins',
  },
});
