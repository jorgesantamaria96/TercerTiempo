import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Inicio = () => {
  return (
    <View style={styles.screen}>
      <Text>Inicio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Inicio;
