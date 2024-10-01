import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { height, width } from "../../utils/dimensions";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/icons/LogoRoseFestival.png")}
        style={styles.logo}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Rose{"\n"}Festival</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 30,
    justifyContent: "center",
  },
  logo: {
    height: height * 0.1,
    width: width * 0.2,
    marginRight: 10,
  },
  textContainer: {
    width: width * 0.5,
    justifyContent: "center",
  },
  text: {
    fontFamily: "MuseoModerno",
    color: "white",
    fontSize: 39,
    textShadowOffset: { width: -3, height: 5 },
    textShadowRadius: 10,
    lineHeight: 50,
  },
});

export default Header;
