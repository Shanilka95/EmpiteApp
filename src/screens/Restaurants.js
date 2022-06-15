import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BasicStyles from "../styles/BasicStyles";
import MapView, { Marker, MarkerAnimated, PROVIDER_GOOGLE, Circle } from 'react-native-maps';

var mapView = new MapView();

const Restaurants = () => {
  return (
    <View style={styles.container}>

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
        
      // region={{
      //   latitude: 37.78825,
      //   longitude: -122.4324,
      //   latitudeDelta: 0.015,
      //   longitudeDelta: 0.0121,
      // }}
      >
      </MapView>

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
