import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const Perfil = ({ route, navigation }) => {
  // Datos traídos de las rutas
  const { dni, nombre, apellido, telefono, cursosData } = route.params;
  const params = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
  };

  const data = cursosData;

  return (
    <View style={styles.screen}>
      <Text>Perfil</Text>
      <TouchableOpacity>
        <Button
          title="Logout"
          onPress={() => {
            navigation.navigate("Login", { screen: "Login" });
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
