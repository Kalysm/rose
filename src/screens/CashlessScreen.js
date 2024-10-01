import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/ui/Header";
import { useBoughtPass } from "../../provider/BoughtPassProvider";
import MainButton from "../components/ui/buttons/MainButton";
import { height, width } from "../utils/dimensions";

const CashlessScreen = ({ navigation }) => {
  const myTickets = useBoughtPass();

  console.log(myTickets.boughtPass);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.soldeContainer}>
        <Text style={styles.soldeTitle}>Mon solde: </Text>
        <Text
          style={[styles.soldeTitle, { fontSize: 45, marginVertical: -15 }]}
        >
          19,38€
        </Text>
        <MainButton
          title="Recharger"
          buttonStyle={{ backgroundColor: "black" }}
        />
      </View>

      <View style={styles.ticketContainer}>
        <Text style={styles.titleText}>Mes billets</Text>
        {myTickets.boughtPass.length === 0 ? (
          <>
            <Text style={[styles.ticketTitle, { color: "grey" }]}>
              Aucun Pass' disponible
            </Text>
            <MainButton
              title="Acheter"
              onPress={() => navigation.navigate("Pass")}
            />
          </>
        ) : (
          <>
            <View style={{ flexDirection: "row" }}>
              <View>
                {myTickets.boughtPass.slice(0, 3).map((item, index) => (
                  <Text key={index} style={styles.ticketTitle}>
                    {item.qty}x {item.pass.title}
                  </Text>
                ))}
              </View>

              <View>
                {myTickets.boughtPass.slice(3, 6).map((item, index) => (
                  <Text key={index} style={styles.ticketTitle}>
                    {item.qty}x {item.pass.title}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.qrcodeContainer}>
              <Image
                source={require("../../assets/icons/qrcode.png")}
                style={styles.qrcodeImg}
              />
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDB0D8",
    flex: 1,
  },
  soldeContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  soldeTitle: {
    fontFamily: "MuseoModerno",
    fontSize: 35,
    color: "white",
    textShadowOffset: { width: -3, height: 2 },
    textShadowRadius: 1,
  },
  titleText: {
    fontFamily: "MuseoModerno",
    fontSize: 30,
    color: "white",
    marginTop: 30,
  },
  refillContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
    width: 130,
    height: 50,
    alignSelf: "center",
    marginTop: 20,
  },
  refillButton: {
    fontFamily: "MuseoModerno",
    fontSize: 18,
    color: "white",
  },
  ticketContainer: {
    flex: 1,
    backgroundColor: "black",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
  },
  ticketTitle: {
    fontFamily: "MuseoModerno",
    fontSize: 19,
    color: "white",
  },
  qrcodeContainer: {
    height: height * 0.17,
    width: width * 0.38,
    backgroundColor: "pink",
    marginTop: 25,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  qrcodeImg: {
    height: height * 0.125,
    width: width * 0.25,
  },
  boughtTicketContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDB0D8",
    borderRadius: 20,
    width: width * 0.3,
    height: height * 0.07,
    alignSelf: "center",
    marginTop: 20,
  },
  buyTicket: {
    fontFamily: "MuseoModerno",
    fontSize: 18,
    color: "white",
  },
});

export default CashlessScreen;
