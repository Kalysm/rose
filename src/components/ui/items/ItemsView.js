import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { height, width } from "../../../utils/dimensions";

const ItemsView = ({
  title,
  highlightedTitle,
  img,
  surroundedTitle,
  isTouchable = true,
  onPress,
}) => {
  const content = (
    <>
      <Image source={img} style={styles.img} />
      <View style={styles.bannerContainer}>
        <View style={styles.txtContainer}>
          <Text style={[styles.txt, { marginLeft: 15 }]}>{title}</Text>
          <Text style={[styles.txt, { marginLeft: 15, color: "#FF73BC" }]}>
            {highlightedTitle}
          </Text>
        </View>
        <View style={styles.categorieStyle}>
          <Text style={styles.txt}>{surroundedTitle}</Text>
        </View>
      </View>
      <View style={[styles.shadowContainer]} />
    </>
  );

  // Utiliser TouchableOpacity si isTouchable est vrai, sinon utiliser une View
  return isTouchable ? (
    <TouchableOpacity style={styles.artistContainer} onPress={onPress}>
      {content}
    </TouchableOpacity>
  ) : (
    <View style={styles.artistContainer}>{content}</View>
  );
};

const styles = StyleSheet.create({
  artistContainer: {
    height: height * 0.42,
    marginLeft: 15,
    marginBottom: 15,
  },
  img: {
    height: height * 0.31,
    width: width * 0.85,
    zIndex: 1,
  },
  bannerContainer: {
    flexDirection: "row",
  },
  txtContainer: {
    backgroundColor: "#161616",
    width: width * 0.85,
    height: height * 0.1,
    justifyContent: "center",
    zIndex: 1,
  },
  categorieStyle: {
    backgroundColor: "black",
    height: height * 0.04,
    width: width * 0.2,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 25,
    right: 100,
    zIndex: 1,
  },
  txt: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  shadowContainer: {
    backgroundColor: "#B994AA",
    height: height * 0.41,
    width: width * 0.85,
    position: "absolute",
    left: 25,
    top: 15,
  },
});

export default ItemsView;
