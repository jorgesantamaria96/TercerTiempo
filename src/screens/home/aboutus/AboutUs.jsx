import React, { useEffect } from "react";
import { View, StyleSheet, BackHandler, ScrollView, Text } from "react-native";
import { ABOUT } from "../../../data/fundacion";
import { colors } from "../../../constants/constants";

const AboutUs = ({ route, navigation }) => {
  useEffect(() => {
    const backAction = () => {
      navigation.pop();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const { dni, nombre, apellido, telefono, mail } = route.params;
  const params = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    data: ABOUT,
    mail: mail,
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>¡Conocenos un poco!</Text>

        {/* TEXTO */}
        <View style={styles.textContainer}>
          {params.data[0].text.map((item, index) => {
            return (
              <View style={styles.text} key={index}>
                <Text style={styles.infoText}>{item.t}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: colors.ttblue,
  },
  textContainer: {
    paddingVertical: 20,
  },
  text: {
    paddingVertical: 5,
  },
  infoText: {
      color: colors.inicioText
  },
});

export default AboutUs;
