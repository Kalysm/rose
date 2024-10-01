import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import CashlessScreen from "../screens/CashlessScreen";
import BottomTabView from "./view/BottomTabView";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
      }}
      tabBar={(props) => <BottomTabView {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: { icon: require("../../assets/icons/date.png") },
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: { icon: require("../../assets/icons/Pin_Alt.png") },
        }}
      />
      <Tab.Screen
        name="Cashless"
        component={CashlessScreen}
        options={{
          tabBarIcon: { icon: require("../../assets/icons/nfc.png") },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomNav;
