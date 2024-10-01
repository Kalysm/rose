import React, { useState, useRef } from "react";
import {
  Animated,
  Modal,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const AnimatedModal = ({ children, setIsVisible, isVisible, onClose }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  const resetTranslateY = () => {
    translateY.setValue(0);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Déplacez la modal en fonction du geste
        if (gestureState.dy > 0) {
          // Permettez uniquement le glissement vers le bas (fermeture de la modal)
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          // Fermez la modal si le geste atteint une certaine distance
          setIsVisible(false);
        } else {
          // Réinitialisez la position de la modal si le geste n'a pas atteint la distance de fermeture
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.modalContainer,
          {
            transform: [{ translateY: translateY }],
          },
        ]}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => {
                onClose();
                resetTranslateY();
              }}
              style={styles.crossButton}
            >
              <Entypo
                name="cross"
                size={30}
                color="grey"
                style={{ padding: 10 }}
              />
            </TouchableOpacity>
            {children}
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
});

export default AnimatedModal;
