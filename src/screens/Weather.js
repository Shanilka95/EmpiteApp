import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BasicStyles from "../styles/BasicStyles";

const Weather = () => {
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
