import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { height, width } from "../../../utils/dimensions";

const LeftRectangle = ({ onPress, children, rectangleStyle }) => {
  return (
    <View style={styles.rectangleContainer}>
      <TouchableOpacity
        style={[styles.leftRectangle, rectangleStyle]}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>

      <View style={styles.shadowLeftRectangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  leftRectangle: {
    backgroundColor: "#F60080",
    width: width * 0.9,
    height: height * 0.13,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginVertical: 20,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    right: 15,
  },
  shadowLeftRectangle: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "black",
    width: width * 0.9,
    height: height * 0.13,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 0,
  },
});

export default LeftRectangle;
