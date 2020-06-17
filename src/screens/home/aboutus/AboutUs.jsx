import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  BackHandler,
  ScrollView,
  Text,
  Image,
} from "react-native";
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
            if (item.title === false) {
              return (
                <View style={styles.text} key={index}>
                  <Text style={styles.infoText}>{item.t}</Text>
                </View>
              );
            }
            return (
              <View style={styles.titleTextContainer}>
                <Text style={styles.titleText}>{item.t}</Text>
              </View>
            );
          })}
        </View>

        {/* IMÁGENES */}
        <Text style={{ alignSelf: "flex-start", paddingVertical: 5, color: colors.nextInf }}>Algunas imágenes que nos representan!</Text>
        <View style={styles.imageContainer}>
          {params.data[0].imagenes.map((item, index) => {
            return (
              <Image
                source={renderImage(item)}
                style={{ width: "100%", height: 200, marginVertical: 10 }}
                key={index}
              />
            );
          })}
        </View>

        <View style={{ marginBottom: 10 }} />
      </View>
    </ScrollView>
  );
};

function renderImage(image) {
  const CartelComedor = require("../../../../assets/images/fundacion/cartelcomedor.jpg");
  const Comedor = require("../../../../assets/images/fundacion/comedor.jpg");
  const comedor1 = require("../../../../assets/images/fundacion/comedor1.jpg");
  const EntregaCertificados = require("../../../../assets/images/fundacion/entregacertificados.jpg");
  const EquipoHipodromo = require("../../../../assets/images/fundacion/equipohipodromo.jpg");
  const Grupo = require("../../../../assets/images/fundacion/grupo.jpg");
  const HipodromoByn = require("../../../../assets/images/fundacion/hipodromobyn.jpg");
  const Partido = require("../../../../assets/images/fundacion/partido.jpg");
  const Polideportivo = require("../../../../assets/images/fundacion/polideportivo.jpg");
  const RepartoDeBarbijos = require("../../../../assets/images/fundacion/repartodebarbijos.jpg");
  const Roperito = require("../../../../assets/images/fundacion/roperito.jpg");
  const TodosORC = require("../../../../assets/images/fundacion/todosorc.jpg");
  const TorneoEnLaPlaya = require("../../../../assets/images/fundacion/torneoenlaplaya.jpg");
  const TorneoEnLaPlaya1 = require("../../../../assets/images/fundacion/torneoenlaplaya1.jpg");
  const Vestuario = require("../../../../assets/images/fundacion/vestuario.jpg");

  if (image === "cartelcomedor") return CartelComedor;
  if (image === "comedor") return Comedor;
  if (image === "comedor1") return comedor1;
  if (image === "entregacertificados") return EntregaCertificados;
  if (image === "equipohipodromo") return EquipoHipodromo;
  if (image === "grupo") return Grupo;
  if (image === "hipodromobyn") return HipodromoByn;
  if (image === "partido") return Partido;
  if (image === "polideportivo") return Polideportivo;
  if (image === "repartodebarbijos") return RepartoDeBarbijos;
  if (image === "roperito") return Roperito;
  if (image === "todosorc") return TodosORC;
  if (image === "torneoenlaplaya") return TorneoEnLaPlaya;
  if (image === "torneoenlaplaya1") return TorneoEnLaPlaya1;
  if (image === "vestuario") return Vestuario;
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 10,
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
    color: colors.inicioText,
  },
  imageContainer: {},
  titleTextContainer: {
    alignItems: "center",
    padding: 10,
  },
  titleText: {
    color: colors.ttred,
    fontWeight: "bold",
    fontSize: 18
  }
});

export default AboutUs;
