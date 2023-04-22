import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

//Just some Raw Data
const data = [
  {
    title: 'Product Designer',
    company: 'Persistant',
    address: 'Hinjewadi Phase 1',
    path: require('../assets/cardImg.png'),
  },
  {
    title: 'Basic Job Fo',
    company: 'Persistant',
    address: 'Hinjewadi Phase 1',
    path: require('../assets/cardImg.png'),
  },
  {
    title: 'Product Designer',
    company: 'Persistant',
    address: 'Hinjewadi Phase 1',
    path: require('../assets/cardImg.png'),
  },
];

interface item {
  title: string;
  company: string;
  address: string;
  path: any;
}

interface prop {
  item: item;
}

const DataCard = ({item}: prop) => {
  return (
    <View style={styles.card}>
      <View style={styles.dataSection}>
        <Image style={styles.img} source={item.path} />
        <View style={styles.textSection}>
          <Text style={[styles.boldText]}>{item.title}</Text>
          <Text style={{marginTop: 2, fontFamily: 'Poppins'}}>
            {item.company}
          </Text>
          <Text style={{marginVertical: 2, fontFamily: 'Poppins'}}>
            {item.address}
          </Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity>
          <View style={styles.basicButton}>
            <Text style={[styles.boldText, {color: '#3265CB', fontSize: 15}]}>
              Apply Now
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{fontFamily: 'Poppins'}}>2 days ago</Text>
      </View>
    </View>
  );
};

export default function JobsCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Job List</Text>
      <View style={styles.mainContainer}>
        <FlatList
          horizontal
          data={data}
          renderItem={({item, index}) => <DataCard item={item} />}
          showsHorizontalScrollIndicator={false}
        />
        {/* <ScrollView horizontal>
          <DataCard item={data[0]} />
          <DataCard item={data[0]} />
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: -10,
    marginBottom: 10,
  },
  mainContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    paddingVertical: 10,
    color: '#140C3A',
    paddingLeft: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 3,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    marginLeft: 20,
    width: width - 70,
  },
  dataSection: {
    flexDirection: 'row',
  },
  textSection: {
    marginLeft: 10,
  },
  img: {
    height: 50,
    width: 50,
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: 'normal',
    color: '#140C3A',
    fontSize: 20,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  basicButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#F5F4F6',
  },
});
