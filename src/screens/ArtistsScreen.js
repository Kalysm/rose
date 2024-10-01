import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/ui/Header";
import { electroCategories, rapCategories } from "../data/artistsCategories";
import GoBackButton from "../components/ui/buttons/GoBackButton";
import ItemsList from "../components/ui/items/ItemsList";

const ArtistsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <GoBackButton title="Les artistes" />

      <ScrollView>
        <ItemsList
          horizontal={true}
          categorieTitle="Rap"
          data={rapCategories}
          isTouchable={false}
        />

        <ItemsList
          horizontal={true}
          categorieTitle="Electro"
          data={electroCategories}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDB0D8",
  },
});

export default ArtistsScreen;
