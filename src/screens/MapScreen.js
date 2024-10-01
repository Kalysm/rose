import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/ui/Header";

const MapScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <Header />
      <View style={styles.mapContainer}>
        <Image
          source={require("../../assets/icons/map.png")}
          style={styles.mapImg}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 10,
  },
  mapImg: {
    transform: [{ rotate: "-20deg" }],
    width: 500,
    height: 500,
  },
});

export default MapScreen;
