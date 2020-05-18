import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

import { width } from "../constants/constants";

const TextInputPass = ({ onValueChange, defaultValue }) => {
  return (
    <View>
      <Text style={styles.dni}>contraseña</Text>
      <TextInput
        style={styles.inputPass}
        placeholder="Ingrese su D.N.I."
        textAlignVertical="center"
        underlineColorAndroid="transparent"
        keyboardType="default"
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        secureTextEntry={true}
        maxLength={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputPass: {
    height: 50,
    width: width - 55,
    opacity: 0.75,
    borderColor: "red",
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
  },
});

export default TextInputPass;
