import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BottomNav from "./BottomNav";
import FoodScreen from "../screens/FoodScreen";
import ArtistsScreen from "../screens/ArtistsScreen";
import PassScreen from "../screens/PassScreen";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomNav} />
      <Stack.Screen name="Food" component={FoodScreen} />
      <Stack.Screen name="Artists" component={ArtistsScreen} />
      <Stack.Screen name="Pass" component={PassScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
