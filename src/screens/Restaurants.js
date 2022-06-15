import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform, PermissionsAndroid, ToastAndroid, Linking, Alert, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BasicStyles from "../styles/BasicStyles";
import MapView, { Marker, MarkerAnimated, Callout, PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { getGoogleData } from "../../service/api/googleService";
const { width, height } = Dimensions.get('screen');
const height2 = Dimensions.get('window').height;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


var mapView = new MapView();

const Restaurants = () => {

  const [currentLocation_loaded, setCurrentLocation_loaded] = useState(false);
  const [currernt_location, setCurrernt_location] = useState();
  const [pickupLatLng, setPickupLatLng] = useState();
  const [resturentData, setResturentData] = useState([]);

  useEffect(() => {
    findCoordinates();

  }, [])

  const findCoordinates = async () => {
    if (!currentLocation_loaded) {
      // const hasPermission = await hasLocationPermission();

      // if (!hasPermission) {
      //   return;
      // }
      Geolocation.getCurrentPosition(
        async (position) => {

          console.log("............", position);
          getNearResturentDetails(position?.coords?.latitude, position?.coords?.longitude);

          setCurrernt_location({
            coords: {
              accuracy: position?.coords?.accuracy,
              altitude: position?.coords?.altitude,
              altitudeAccuracy: position?.coords?.altitudeAccuracy,
              heading: position?.coords?.heading,
              latitude: position?.coords?.latitude,
              longitude: position?.coords?.longitude,
              speed: position?.coords?.speed,
            },
            timestamp: position?.timestamp,
          }
          );
          setCurrentLocation_loaded(true);
          setPickupLatLng({
            latitude: position?.coords?.latitude,
            longitude: position?.coords?.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          });

        },
        (error) => {
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 0,
          forceRequestLocation: true,
          accuracy: { android: "high", ios: "bestForNavigation" }
        }
      );
    }
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await this.hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow Hola Rider to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => { } },
        ],
      );
    }

    return false;
  };

  const getNearResturentDetails = (lat, lang) => {

    getGoogleData(lat, lang).then(
      response => {
        console.log("...............", response.data);
        setResturentData(response.data.results);

      }
    ).catch(error => {
      if (error.message == "Request failed with status code 404") {
        showError("Connection error! Please try again.");
      } else {
        showError(error.message);
      }
    })
  }


  return (
    <View style={styles.container}>

      {currentLocation_loaded ?
        <MapView
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}
          provider={PROVIDER_GOOGLE}
          showsIndoors={true}
          zoomEnabled={true}
          zoomTapEnabled={true}
          showsScale={true}
          showsBuildings={true}
          showsCompass={true}
          initialRegion={{
            latitude: currernt_location?.coords?.latitude,
            longitude: currernt_location?.coords?.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}

        >
          {
            resturentData?.map((i, index) => {

              return (
                <Marker
                  key={index}
                  coordinate={{ "latitude": i.geometry?.location?.lat, "longitude": i.geometry?.location?.lng }}
                  title={i.name}
                >
                  <Callout
                    style={{ "width": 100, "height": 50 }}>
                    <View>
                      <Text>{i.vicinity}</Text>
                    </View>
                  </Callout>
                </Marker>);
            })
          }
        </MapView>
        : <>
        </>
      }

      {/* <MapView
        // onPress={() => Keyboard.dismiss()}
        rorateEnabled={false}
        provider={PROVIDER_GOOGLE}
        ref={(ref) => {
          mapView = ref;
        }}
        rotateEnabled={false}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        // style={_Style.map}
        // initialRegion={this.state.initialReigion}
        >
      </MapView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red',
  },
  text: {
    fontFamily: BasicStyles.FONT_FAMILY.EXTRA_BOLD,
    color: BasicStyles.COLORS.BLACK,
    fontSize: 20,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Restaurants;
