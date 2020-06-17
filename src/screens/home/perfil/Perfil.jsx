import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors, version } from "../../../constants/constants";
import { LinearGradient } from "expo-linear-gradient";

const Perfil = ({ route, navigation }) => {
  // Datos traídos de las rutas
  const { dni, nombre, apellido, telefono, cursosData, mail } = route.params;
  const params = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    mail: mail,
  };
  const data = cursosData;

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.textTitle}>Mis Datos</Text>
        <Text
          style={{
            textAlign: "center",
            color: colors.textColor,
            borderWidth: 1,
            borderRadius: 10,
            padding: 4,
            borderColor: colors.textColor,
            backgroundColor: colors.background,
          }}
        >
          Muy pronto estaremos realizando cambios, incluyendo la posibilidad de
          editar tus datos personales y agregar más funcionalidades.
        </Text>
        <View style={{}}>
          <View style={styles.box}>
            <Text style={styles.textDetail}>Nombre: </Text>
            <Text style={styles.textData}>{params.nombre}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textDetail}>Apellido: </Text>
            <Text style={styles.textData}>{params.apellido}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textDetail}>DNI: </Text>
            <Text style={styles.textData}>{params.dni}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textDetail}>Teléfono: </Text>
            <Text style={styles.textData}>{params.telefono}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textDetail}>Mail: </Text>
            <Text style={styles.textData}>{params.mail}</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("About", params)}
          >
            <LinearGradient
              colors={[
                colors.buttonLoginColor3,
                colors.buttonLoginColor2,
                colors.buttonLoginColor1,
              ]}
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 5,
                shadowOpacity: 0.2,
                shadowRadius: 8,
                elevation: 2,
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Fundación
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Contacto")}>
            <LinearGradient
              colors={[colors.social1, colors.social2, colors.social3]}
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 5,
                shadowOpacity: 0.2,
                shadowRadius: 8,
                elevation: 2,
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Contacto
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <LinearGradient
              colors={[colors.cornflowerblue, colors.blue, colors.ttblue]}
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 5,
                shadowOpacity: 0.2,
                shadowRadius: 8,
                elevation: 2,
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Cerrar Sesión
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10, marginBottom: 5 }}>
          <Text style={{ textAlign: "center" }}>Versión: {version}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.textColor,
    marginBottom: 10,
  },
  box: {
    flexDirection: "row",
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.inicioText,
    alignSelf: "center",
  },
  textDetail: {
    fontSize: 20,
    color: colors.ttblue,
    marginRight: 5,
  },
  textData: {
    fontSize: 20,
    color: colors.ttred,
  },
});

export default Perfil;
