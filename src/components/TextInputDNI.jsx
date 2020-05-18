import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

import { width } from "../constants/constants";

const TextInputDNI = ({ onValueChange, defaultValue }) => {
  return (
    <View>
      <Text style={styles.dni}>d.n.i.</Text>
      <TextInput
        style={styles.inputDNI}
        placeholder="Ingrese su D.N.I."
        textAlignVertical="center"
        underlineColorAndroid="transparent"
        keyboardType="numeric"
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        maxLength={9}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputDNI: {
    height: 50,
    width: width - 55,
    opacity: 0.75,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    padding: 10,
    paddingHorizontal: 20,
  },
  dni: {
      fontSize: 12,
      padding: 10,
      paddingHorizontal: 20,
      color: "red",
  }
});

export default TextInputDNI;
