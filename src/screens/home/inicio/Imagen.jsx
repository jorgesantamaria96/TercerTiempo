import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const Imagen = ({ route, navigation }) => {
  const { imagen } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={RenderImageClase(imagen)}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
      width: width * 1.2,
      height: width * 2,
      transform: [{ rotate: '90deg' }],
  },
});

const RenderImageClase = (image) => {
  const Reciclado = require("../../../../assets/images/cursos/reciclado/clases/reciclado.jpg");
  const ArbolRecicldo = require("../../../../assets/images/cursos/reciclado/clases/arbolreciclado.jpg");
  const CicloPapel = require("../../../../assets/images/cursos/reciclado/clases/cicloPapel.jpg");
  const CicloPlastico = require("../../../../assets/images/cursos/reciclado/clases/cicloPlastico.jpg");
  const Contenedores = require("../../../../assets/images/cursos/reciclado/clases/contenedores.jpg");
  const Tabla = require("../../../../assets/images/cursos/reciclado/clases/tabla.jpg");
  const EscuelaDeRugby = require("../../../../assets/images/cursos/escueladerugby/escueladerugby.jpg");

  if (image === "reciclado") return Reciclado;
  if (image === "arbolreciclado") return ArbolRecicldo;
  if (image === "cicloPapel") return CicloPapel;
  if (image === "cicloPlastico") return CicloPlastico;
  if (image === "contenedores") return Contenedores;
  if (image === "table") return Tabla;
  if (image === "escueladerugby") return EscuelaDeRugby;
};

export default Imagen;
