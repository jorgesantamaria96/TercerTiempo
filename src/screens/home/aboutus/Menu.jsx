import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  BackHandler,
  Alert,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { colors } from "../../../constants/constants";
import Icon from "react-native-vector-icons/FontAwesome";
import Material from "react-native-vector-icons/MaterialCommunityIcons";

const Menu = ({ route, navigation }) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Atención!", "Desea cerrar sesión?", [
        {
          text: "NO",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "SI",
          onPress: () => {
            navigation.popToTop();
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

  const { dni, nombre, apellido, telefono, mail } = route.params;
  const params = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    mail: mail,
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.seleccionText}>
          Seleccione Fundación, para saber más sobre nosotros, o Capacitación,
          para comenzar el aprendizaje!
        </Text>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("About", params)}
        >
          <Icon name="trophy" size={100} style={styles.icon} />
          <View style={styles.container}>
            <Text style={styles.text}>Fundación</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("Main", params)}
        >
          <Material name="rugby" size={100} style={styles.icon} />
          <View style={styles.container}>
            <Text style={styles.text}>Capacitación</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    marginTop: 40,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  seleccionText: {
    textAlign: "center",
    color: colors.inicioText,
  },
  box: {
    borderWidth: 1,
    paddingTop: 10,
    alignItems: "center",
    width: "100%",
    height: 220,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 0.01,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
    backgroundColor: colors.background,
  },
  container: {
    justifyContent: "center",
    padding: 5,
  },
  text: {
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.ttblue,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    color: colors.ttred,
  },
});

export default Menu;
