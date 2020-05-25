import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cursos = ({ route, navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Cursos</Text>
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

export default Cursos;