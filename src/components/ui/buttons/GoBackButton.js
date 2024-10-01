import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { height, width } from "../../../utils/dimensions";

const GoBackButton = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleContainer}>
      <TouchableOpacity
        style={styles.imgContainer}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../../../assets/icons/la-fleche.png")}
          style={styles.img}
        />
      </TouchableOpacity>
      <View style={styles.shadowImgContainer} />

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  imgContainer: {
    width: width * 0.15,
    height: height * 0.075,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 10,
    zIndex: 1,
  },
  shadowImgContainer: {
    position: "absolute",
    width: width * 0.15,
    height: width * 0.15,
    backgroundColor: "black",
    borderRadius: 20,
    marginTop: 5,
    marginLeft: 14,
  },
  title: {
    fontFamily: "MuseoModerno",
    fontSize: 44,
    color: "white",
    textShadowOffset: { width: -3, height: 2 },
    textShadowRadius: 1,
    marginLeft: 10,
  },
  img: {
    height: 40,
    width: 40,
  },
});

export default GoBackButton;
