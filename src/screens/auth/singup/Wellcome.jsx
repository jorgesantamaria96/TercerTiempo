import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../constants/constants";
import Icon from "react-native-vector-icons/FontAwesome";

const Wellcome = ({ route, navigation }) => {
  // Datos traídos de las rutas
  const { dni, nombre, apellido, telefono, cursosData, mail } = route.params;
  const params = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    data: cursosData,
    mail: mail,
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* <LinearGradient
        colors={[
          colors.buttonLoginColor2,
          colors.buttonLoginColor3,
          colors.buttonLoginColor1,
        ]}
        style={{
          flex: 1,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      > */}
      <View
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}
      >
        <View style={{ alignSelf: "center", margin: 20 }}>
          <Image
            source={require("../../../../assets/images/icono.png")}
            style={{ width: 270, height: 200 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: colors.inicioText,
            }}
          >
            ¡¡Bienvenido!!
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: colors.textColor,
            }}
          >
            ¡{params.nombre}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: colors.textColor,
            }}
          >
            {params.apellido}!
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 15,
                color: colors.inicioText,
                alignSelf: "center",
              }}
            >
              Nos da gusto que formes parte de...
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              paddingTop: 10,
            }}
          >
            <Text
              style={{
                color: colors.ttblue,
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              ¡Tercer Tiempo!
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: colors.ttred,
                marginLeft: 10,
              }}
            >
              ;P
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}></View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Main", params )}
          style={{
            marginTop: 60,
            borderRadius: 50,
            backgroundColor: "white",
            borderWidth: 0.5,
            padding: 5,
            marginHorizontal: 80,
          }}
        >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                padding: 5,
                color: colors.inicioText,
              }}
            >
              Comenzar
            </Text>
            <Icon
              name="arrow-right"
              size={18}
              style={{ padding: 5, color: colors.inicioText }}
            />
          </View>
        </TouchableOpacity>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Wellcome;
