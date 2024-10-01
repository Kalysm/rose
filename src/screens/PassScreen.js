import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/ui/Header";
import { passCategories } from "../data/passCategories";
import { useBoughtPass } from "../../provider/BoughtPassProvider";
import GoBackButton from "../components/ui/buttons/GoBackButton";
import QuantityButton from "../components/ui/buttons/QuantityButton";
import ItemsList from "../components/ui/items/ItemsList";
import AnimatedModal from "../components/ui/AnimatedModal";
import MainButton from "../components/ui/buttons/MainButton";

const PassScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPass, setSelectedPass] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { setPass } = useBoughtPass();

  const onPress = (item) => {
    setSelectedPass(item);
    setIsVisible(!isVisible);
  };

  const increaseQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <GoBackButton title="Billeterie" />

      <ItemsList
        categorieTitle="Du 18 au 21 janvier"
        data={passCategories}
        onPress={onPress}
      />

      {isVisible && (
        <AnimatedModal
          setIsVisible={setIsVisible}
          isVisible={isVisible}
          onClose={() => {
            setIsVisible(isVisible === false);
            setSelectedPass(passCategories);
            setSelectedQuantity(1);
          }}
        >
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>Acheter un Pass'</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <QuantityButton
                onDecrease={decreaseQuantity}
                onIncrease={increaseQuantity}
                selectedQuantity={selectedQuantity}
              />

              <View style={{ marginHorizontal: 20 }}>
                <Text style={[styles.itemTxt, { color: "black" }]}>
                  {selectedPass.title}
                </Text>
                <Text style={styles.itemTxt}>
                  {selectedPass.surroundedTitle
                    ? (
                        parseFloat(
                          selectedPass.surroundedTitle.replace(",", ".")
                        ) * selectedQuantity
                      ).toFixed(2) + "€"
                    : "Price not available"}
                </Text>
              </View>
              <Image source={selectedPass.image} style={styles.itemImg} />
            </View>
          </View>

          <MainButton
            title="Valider"
            buttonStyle={{ backgroundColor: "black" }}
            onPress={() => {
              setPass(selectedPass, selectedQuantity);
              setIsVisible(false);
            }}
          />
        </AnimatedModal>
      )}
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
  title: {
    fontFamily: "MuseoModerno",
    fontSize: 44,
    color: "white",
    textShadowOffset: { width: -3, height: 2 },
    textShadowRadius: 1,
  },
  img: {
    height: 40,
    width: 40,
  },
  txt: {
    fontFamily: "MuseoModerno",
    fontSize: 25,
    color: "white",
    textShadowOffset: { width: -3, height: 2 },
    textShadowRadius: 1,
    marginLeft: 15,
  },
  itemTxt: {
    fontFamily: "MuseoModerno",
    fontSize: 18,
    color: "grey",
  },
  itemImg: {
    height: 50,
    width: 70,
  },

  modalContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "white",
    height: 250,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  crossButton: {
    width: 70,
    alignItems: "center",
  },
  descriptionContainer: {
    marginBottom: 30,
    marginHorizontal: 80,
    marginTop: -15,
  },
  descriptionText: {
    color: "black",
    fontFamily: "MuseoModerno",
    fontSize: 16,
    textAlign: "center",
  },

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

  validateContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
    width: 130,
    height: 50,
    alignSelf: "center",
    marginTop: 20,
  },
  validateButton: {
    fontFamily: "MuseoModerno",
    fontSize: 18,
    color: "white",
  },
});

export default PassScreen;
