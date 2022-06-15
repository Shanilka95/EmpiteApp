import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BasicStyles from "../styles/BasicStyles";
import { requestPermission } from "../../service/permissionServise";

requestPermission();

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: BasicStyles.COLORS.BLUE,
    padding: 15,
    borderRadius: 10,
  },
  text: {
    fontFamily: BasicStyles.FONT_FAMILY.EXTRA_BOLD,
    color: BasicStyles.COLORS.WHITE,
    fontSize: 15,
  },
});

export default Login;
