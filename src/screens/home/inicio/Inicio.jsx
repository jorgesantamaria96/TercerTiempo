import React, { useEffect, useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  Alert,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { colors } from "../../../constants/constants";
import Icon from "react-native-vector-icons/FontAwesome";

const initialState = {
  loading: false,
  search: "",
  searchs: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "startLoading": {
      return { ...state, loading: true };
    }
    case "endLoading": {
      return { ...state, loading: false };
    }
    case "setSearch": {
      return { ...state, search: action.payload };
    }
    case "setListSearchs": {
      return { ...state, searchs: action.payload };
    }
    default: {
      throw new Error();
    }
  }
}

const Inicio = ({ route, navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Manejador del botón de Android
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Atención!",
        "Desea cerrar sesión y salir de Tercer Tiempo?",
        [
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
        ]
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const { dni, nombre, apellido, telefono } = route.params;
  const params = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={{ marginTop: 40 }}>
          <Image
            source={require("../../../../assets/images/icono2.png")}
            style={{ width: 83, height: 50 }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: colors.inicioText,
            }}
          >
            Hola {params.nombre}!
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 12, color: colors.inicioText }}>
            Qué deseas aprender hoy?
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Buscar"
            placeholderTextColor={colors.inicioText}
            style={styles.input}
          />
          <Icon
            name="search"
            size={15}
            style={{
              color: colors.inicioText,
              padding: 10,
              marginLeft: -37
            }}
          />
        </View>
        <View style={{ alignSelf: "flex-start", marginVertical: 20 }}>
          <Text style={{ fontSize: 15 }}>Los más vistos</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 40,
    elevation: 3,
    width: "70%",
    height: "100%",
  },
});

export default Inicio;
