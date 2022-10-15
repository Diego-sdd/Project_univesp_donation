import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  // Alert,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import IconHelp from '../../assets/iconHelp.png';
import IconInstitution from '../../assets/iconInstit.png';
import {UserMapApp} from '../../api/map';
// import {SvgUri} from 'react-native-svg';
// import * as Location from 'expo-location';
// import api from '../../services/api';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface Point {
  id: number;
  name: string;
  image: string;
  image_url: string;
  latitude: number;
  longitude: number;
}

interface Params {
  uf: string;
  city: string;
}

const Map = (props: any) => {
  const {userReducer} = props;
  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    -23.964962, -46.391733,
  ]);

  const navigation = useNavigation();
  console.log(points);
  const handlerUsers = async () => {
    try {
      const result = await UserMapApp(userReducer.profile);

      if (result.status === 200) {
        let arrayValue: any = [];
        result.data.resultData.map((e: any, k: number) => {
          arrayValue.push({
            id: k,
            latitude: Number(e.latitude),
            longitude: Number(e.longitude),
            userType: e.profile,
            name: e.name,
            image_url:
              'https://st4.depositphotos.com/1000975/24254/i/450/depositphotos_242548520-stock-photo-concept-of-charity-with-donated.jpg',
          });
        });
        setPoints(arrayValue);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handlerUsers();
  }, []);
  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail(id: number) {
    navigation.navigate('Profile', {point_id: id});
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          {initialPosition[0] !== 0 && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 5.114,
                longitudeDelta: 5.114,
              }}>
              {/*  {selectedItems[0] !== undefined &&*/}
              {console.log(points)}
              {points.map(point => (
                <Marker
                  key={String(point.id)}
                  style={styles.mapMarker}
                  onPress={() => handleNavigateToDetail(point.id)}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}>
                  {point.userType === 'needHelp' && (
                    <Image
                      style={styles.mapMarkerImageHelp}
                      source={IconHelp}
                    />
                  )}
                  {point.userType === 'pointDonation' && (
                    <Image
                      style={styles.mapMarkerImageHelp}
                      source={IconHelp}
                    />
                  )}
                  {point.userType === 'institution' && (
                    <Image
                      style={styles.mapMarkerImageHelp}
                      source={IconInstitution}
                    />
                  )}
                </Marker>
              ))}
              {/*  } */}
            </MapView>
          )}
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}>
          {items.map(item => (
            <TouchableOpacity
              key={String(item.id)}
              style={[
                styles.item,
                selectedItems.includes(item.id) ? styles.selectedItem : {},
              ]}
              onPress={() => handleSelectItem(item.id)}
              activeOpacity={0.6}>
              {/* <SvgUri width={42} height={42} uri={item.image_url} /> */}
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userReducer: state.userReducer?.data,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = () => {
  // Action
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
