import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { getWeatherData } from "../../service/api/weatherService";
import BasicStyles from "../styles/BasicStyles";

const Weather = () => {
  const [weatherData, setWeatherData] = React.useState([]);
  React.useEffect(() => {
    getWeatherDetails();
  }, []);

  const getWeatherDetails = () => {
    getWeatherData()
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{weatherData.name}</Text>
      <Icon name="ios-rainy" size={30} color={BasicStyles.COLORS.BLUE} />
      <Text style={styles.text}>{weatherData?.weather[0]?.main}</Text>
      <Text style={styles.text}>{weatherData?.weather[0]?.description}</Text>
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
