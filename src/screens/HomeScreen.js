import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/ui/Header";
import { useNavigation } from "@react-navigation/native";
import LeftRectangle from "../components/ui/buttons/LeftRectangle";
import RightRectangle from "../components/ui/buttons/RightRectangle";
import { height, width } from "../utils/dimensions";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.sloganContainer}>
        <Text style={[styles.sloganText, { lineHeight: 32, fontSize: 28 }]}>
          VOYONS LA VIE EN ROSE !
        </Text>
      </View>

      <View style={{ flex: 0.5 }}>
        <RightRectangle onPress={() => navigation.navigate("Artists")}>
          <View style={styles.txtImgContainer}>
            <Text style={styles.sloganText}>Les artistes</Text>

            <View style={styles.imgContainer}>
              <Image
                source={require("../../assets/icons/micro.png")}
                style={styles.img}
              />
            </View>
            <View style={styles.shadowImgContainer} />
          </View>
        </RightRectangle>

        <LeftRectangle onPress={() => navigation.navigate("Food")}>
          <View style={styles.txtImgContainer}>
            <View style={[styles.shadowImgContainer, { left: 10 }]} />
            <View style={styles.imgContainer}>
              <Image
                source={require("../../assets/icons/burrito.png")}
                style={styles.img}
              />
            </View>
            <Text style={[styles.sloganText]}>À table</Text>
          </View>
        </LeftRectangle>

        <RightRectangle
          onPress={() => navigation.navigate("Pass")}
          rectangleStyle={{
            backgroundColor: "#FF2C9A",
            left: 45,
          }}
        >
          <View style={styles.txtImgContainer}>
            <Text style={styles.sloganText}>Les Pass'</Text>

            <View style={styles.imgContainer}>
              <Image
                source={require("../../assets/icons/billet.png")}
                style={styles.img}
              />
            </View>
            <View style={styles.shadowImgContainer} />
          </View>
        </RightRectangle>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDB0D8",
  },
  sloganContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sloganText: {
    fontFamily: "MuseoModerno",
    fontSize: 38,
    color: "white",
    textShadowOffset: { width: -3, height: 2 },
    textShadowRadius: 1,
    lineHeight: 60,
    marginHorizontal: 20,
  },
  txtImgContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  imgContainer: {
    width: width * 0.15,
    height: height * 0.075,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    zIndex: 1,
  },
  shadowImgContainer: {
    position: "absolute",
    width: width * 0.15,
    height: width * 0.15,
    backgroundColor: "black",
    borderRadius: 20,
    right: 10,
    marginTop: 5,
  },
  img: {
    height: "55%",
    width: "55%",
    resizeMode: "contain",
  },
});

export default HomeScreen;
