import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { height, width } from "../../../utils/dimensions";

const RightRectangle = ({ onPress, children, rectangleStyle }) => {
  return (
    <View style={styles.rectangleContainer}>
      <TouchableOpacity
        style={[styles.rightRectangle, rectangleStyle]}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
      <View style={styles.shadowRightRectangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  rightRectangle: {
    backgroundColor: "#FF73BC",
    width: width * 0.9,
    height: height * 0.13,

    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    left: 50,
  },
  shadowRightRectangle: {
    position: "absolute",
    top: 10,
    backgroundColor: "black",
    width: width * 0.9,
    height: height * 0.13,
    alignSelf: "flex-end",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    zIndex: 0,
    left: 50,
  },
});

export default RightRectangle;
