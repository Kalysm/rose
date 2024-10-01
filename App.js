import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StackNav from "./src/navigation/StackNav";
import { BoughtPassProvider } from "./provider/BoughtPassProvider";

export default function App() {
  const [fontsLoaded] = useFonts({
    MuseoModerno: require("./assets/fonts/MuseoModerno-Black.ttf"),
  });

  if (!fontsLoaded) {
    // Return a loading indicator or any other component while fonts are loading
    return null;
  }

  return (
    <BoughtPassProvider>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </BoughtPassProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
