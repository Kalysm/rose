import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const QuantityButton = ({ onDecrease, onIncrease, selectedQuantity }) => {
  return (
    <View style={styles.quantitySelector}>
      <TouchableOpacity onPress={onDecrease} style={styles.quantityContainer}>
        <Text style={styles.quantityButton}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{selectedQuantity}</Text>
      <TouchableOpacity onPress={onIncrease} style={styles.quantityContainer}>
        <Text style={styles.quantityButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quantitySelector: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: 50,
    width: 100,
    borderRadius: 10,
  },
  quantityContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 30,
  },
  quantityButton: {
    fontFamily: "MuseoModerno",
    fontSize: 24,
    color: "white",
  },
  quantityText: {
    fontFamily: "MuseoModerno",
    fontSize: 23,
    marginHorizontal: 10,
    color: "white",
  },
});

export default QuantityButton;
