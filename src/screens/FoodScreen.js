import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/ui/Header";
import LeftRectangle from "../components/ui/buttons/LeftRectangle";
import RightRectangle from "../components/ui/buttons/RightRectangle";
import GoBackButton from "../components/ui/buttons/GoBackButton";
import { height, width } from "../utils/dimensions";

const FoodScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <GoBackButton title="À table" />

      <LeftRectangle>
        <View style={styles.txtContainer}>
          <Text style={[styles.title, { fontSize: 38 }]}>Pink Food</Text>
          <Text style={[styles.title, { fontSize: 18, marginTop: -10 }]}>
            Hot-dogs, Burgers, gauffres...
          </Text>
        </View>
      </LeftRectangle>

      <RightRectangle
        rectangleStyle={{
          backgroundColor: "#7BFCCF",
          left: 45,
        }}
      >
        <View style={styles.txtContainer}>
          <Text style={[styles.title, { fontSize: 38 }]}>Monster truck</Text>
          <Text style={[styles.title, { fontSize: 18, marginTop: -10 }]}>
            Viandes, Tenders, Fish & Chips...
          </Text>
        </View>
      </RightRectangle>
      <LeftRectangle
        rectangleStyle={{ backgroundColor: "#3F8CEE", width: width * 1 }}
      >
        <View style={styles.txtContainer}>
          <Text style={[styles.title, { fontSize: 38 }]}>
            Le petit Français
          </Text>
          <Text style={[styles.title, { fontSize: 18, marginTop: -10 }]}>
            Cassoulets, Poulets rôtis, Tartares...
          </Text>
        </View>
      </LeftRectangle>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDB0D8",
  },
  rectangleContainer: {
    flexDirection: "row",
  },
  imgContainer: {
    height: 60,
    width: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    zIndex: 1,
  },
  shadowImgContainer: {
    height: 60,
    width: 60,
    backgroundColor: "black",
    borderRadius: 20,
    right: 65,
    marginTop: 5,
  },
  img: {
    height: 40,
    width: 40,
  },
  title: {
    fontFamily: "MuseoModerno",
    fontSize: 44,
    color: "white",
    textShadowOffset: { width: -3, height: 2 },
    textShadowRadius: 1,
  },
  txtContainer: {
    flexDirection: "column",
  },
});

export default FoodScreen;
