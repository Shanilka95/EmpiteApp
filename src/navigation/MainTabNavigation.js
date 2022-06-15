/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, View } from "react-native";

import Restaurants from "../screens/Restaurants";
import Weather from "../screens/Weather";

import Icon from "react-native-vector-icons/Ionicons";
import BasicStyles from "../styles/BasicStyles";

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Weather"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: BasicStyles.COLORS.WHITE,
        // tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontFamily: BasicStyles.FONT_FAMILY.MEDIUM,
          color: BasicStyles.COLORS.WHITE,
          fontSize: 12,
          bottom: 5,
        },
        tabBarStyle: {
          backgroundColor: BasicStyles.COLORS.BLUE,
          height: 70,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Icon
                name="ios-rainy"
                size={30}
                color={BasicStyles.COLORS.WHITE}
              />
            ) : (
              <View style={{ opacity: 0.5 }}>
                <Icon
                  name="ios-rainy"
                  size={25}
                  color={BasicStyles.COLORS.WHITE}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Icon
                name="fast-food"
                size={30}
                color={BasicStyles.COLORS.WHITE}
              />
            ) : (
              <View style={{ opacity: 0.5 }}>
                <Icon
                  name="fast-food"
                  size={25}
                  color={BasicStyles.COLORS.WHITE}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
