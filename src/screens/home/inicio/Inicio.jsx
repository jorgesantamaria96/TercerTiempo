import React, { useEffect } from "react";
import { View, Text, StyleSheet, BackHandler, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Inicio = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Atención!", "Desea cerrar sesión y salir de Tercer Tiempo?", [
        {
          text: "NO",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "SI",
          onPress: () => {
            navigation.navigate("Login");
            BackHandler.exitApp();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

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
