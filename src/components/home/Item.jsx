import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/constants";

const Item = ({ type, title, detailCard, onPress }) => {
  const renderImagePresentation = (image) => {
    const Reciclado = require("../../../assets/images/cursos/reciclado/reciclado.jpg");
    const Barbijo = require("../../../assets/images/cursos/barbijos/barbijos.jpg");
    const BloquesYAdoquines = require("../../../assets/images/cursos/bloquesyadoquines/bloquesyadoquines.jpg");
    const Termotanque = require("../../../assets/images/cursos/termotanques/termotanque.jpeg");
    const Peluqueria = require("../../../assets/images/cursos/peluqueria/peluqueria.jpg");
    const EscuelaDeRugby = require("../../../assets/images/cursos/escueladerugby/escueladerugby.jpg");

    if (image === "barbijos") return Barbijo;
    if (image === "reciclado") return Reciclado;
    if (image === "bloquesyadoquines") return BloquesYAdoquines;
    if (image === "termotanque") return Termotanque;
    if (image === "peluqueria") return Peluqueria;
    if (image === "escueladerugby") return EscuelaDeRugby;
  };

  return (
    <View style={styles.box}>
      <View style={{ flex: 1 }}>
        {/* TÍTULO */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* IMÁGEN */}
        <View style={styles.imageContainer}>
          <Image source={renderImagePresentation(type)} style={styles.image} />
        </View>

        {/* PRESENTACIÓN */}
        <View style={styles.presentationContainer}>
          <Text style={styles.presentation}>{detailCard}</Text>
        </View>

        {/* COMENZAR */}
        <View style={styles.start}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Text
              style={{ fontSize: 14, color: colors.ttred }}
              onPress={onPress}
            >
              Comenzar
            </Text>
            <Icon
              name="arrow-right"
              size={10}
              color={colors.ttred}
              style={{ padding: 5, paddingLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderWidth: 0.01,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  titleContainer: {
    alignSelf: "center",
    padding: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.ttblue,
  },
  imageContainer: {
    alignSelf: "center",
  },
  image: {
    width: 200,
    height: 100,
  },
  presentationContainer: {
    alignSelf: "center",
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  presentation: {
    textAlign: "center",
    fontSize: 12,
    color: colors.inicioText,
    padding: 3,
  },
  start: {
    paddingLeft: 10,
  },
});

export default Item;
