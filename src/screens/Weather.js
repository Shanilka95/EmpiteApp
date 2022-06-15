import React,{useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { getWeatherData } from "../../service/api/weatherService";
import BasicStyles from "../styles/BasicStyles";

const Weather = () => {

const[weatherData,setWeatherData]=useState([])

  const getWeatherDetails=()=>{

    getWeatherData().then(
      response => {

        this.setState({ spinner: false });
        console.log('reaponse data: ', response);

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
      <Icon name="ios-rainy" size={30} color={BasicStyles.COLORS.BLUE} />
      <Text style={styles.text}>Weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: BasicStyles.FONT_FAMILY.EXTRA_BOLD,
    color: BasicStyles.COLORS.BLACK,
    fontSize: 20,
  },
});

export default Weather;
