import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { height, width } from "../../../utils/dimensions";

const MainButton = ({ onPress, title, buttonStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonStyle]}
      onPress={onPress}
    >
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDB0D8",
    borderRadius: 20,
    width: width * 0.3,
    height: height * 0.07,
    alignSelf: "center",
    marginTop: 20,
  },
  button: {
    fontFamily: "MuseoModerno",
    fontSize: 18,
    color: "white",
  },
});

export default MainButton;
