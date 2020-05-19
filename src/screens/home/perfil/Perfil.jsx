import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const Perfil = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Perfil</Text>
      <TouchableOpacity>
        <Button
          title="Logout"
          onPress={() => {
            props.navigation.navigate("Login", { screen: "Login" });
          }}
          color="blue"
        />
      </TouchableOpacity>
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

export default Perfil;
