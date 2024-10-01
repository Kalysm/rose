import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import ItemsView from "./ItemsView";

const ItemsList = ({
  categorieTitle,
  data,
  horizontal,
  isTouchable,
  onPress,
}) => {
  return (
    <>
      {categorieTitle !== null && (
        <Text style={styles.title}>{categorieTitle}</Text>
      )}
      <FlatList
        horizontal={horizontal}
        data={data}
        renderItem={({ item }) => (
          <ItemsView
            title={item.title}
            highlightedTitle={item.highlightedTitle}
            img={item.image}
            surroundedTitle={item.surroundedTitle}
            isTouchable={isTouchable}
            onPress={() => onPress(item)}
          />
        )}
        contentContainerStyle={{ marginBottom: 15 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "MuseoModerno",
    fontSize: 40,
    color: "white",
    textShadowOffset: { width: -3, height: 2 },
    textShadowRadius: 1,
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default ItemsList;
