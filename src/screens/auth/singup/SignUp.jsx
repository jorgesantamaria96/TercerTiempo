import React, { useReducer } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { width, mobileTT, colors } from "../../../constants/constants";

const initialState = {
  loading: false,
  dni: "",
  nombre: "",
  apellido: "",
  telefono: "",
  direccion: "",
  mail: "",
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "startLoading": {
      return { ...state, loading: true };
    }
    case "endLoading": {
      return { ...state, loading: false };
    }
    case "setDni": {
      return { ...state, dni: action.payload };
    }
    case "setNombre": {
      return { ...state, nombre: action.payload };
    }
    case "setApellido": {
      return { ...state, apellido: action.payload };
    }
    case "setTelefono": {
      return { ...state, telefono: action.payload };
    }
    case "setDireccion": {
      return { ...state, direccion: action.payload };
    }
    case "setMail": {
      return { ...state, mail: action.payload };
    }
    case "fetchError": {
      return { ...state, error: action.payload };
    }
    default:
      throw new Error();
  }
}

const SignUp = ({ route, navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  switch (state.loading) {
    case true: {
      return (
        <ActivityIndicator
          style={{ flex: 1 }}
          size="large"
          color={colors.ttred}
        />
      );
    }
    default: {
      return (
        <ScrollView>
          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <Text
              style={{ textAlign: "center", marginTop: 50, marginBottom: 10 }}
            >
              Por favor, ingrese los siguientes datos para completar su
              registro. Los campos con (*) son obligatorios.
            </Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder=" (*) D.N.I. (sin puntos)"
                defaultValue={state.dni}
                onChangeText={(value) =>
                  dispatch({ type: "setDni", payload: value })
                }
                keyboardType="numeric"
                maxLength={8}
                placeholderTextColor="grey"
              />
              <TextInput
                style={styles.input}
                placeholder=" (*) Nombre"
                defaultValue={state.nombre}
                onChangeText={(value) =>
                  dispatch({ type: "setNombre", payload: value })
                }
                keyboardType="default"
                placeholderTextColor="grey"
              />
              <TextInput
                style={styles.input}
                placeholder=" (*) Apellido"
                defaultValue={state.apellido}
                onChangeText={(value) =>
                  dispatch({ type: "setApellido", payload: value })
                }
                keyboardType="default"
                placeholderTextColor="grey"
              />
              <TextInput
                style={styles.input}
                placeholder=" (*) Telefono"
                defaultValue={state.telefono}
                onChangeText={(value) =>
                  dispatch({ type: "setTelefono", payload: value })
                }
                keyboardType="phone-pad"
                maxLength={10}
                placeholderTextColor="grey"
              />
              <TextInput
                style={styles.input}
                placeholder=" (*) Dirección"
                defaultValue={state.direccion}
                onChangeText={(value) =>
                  dispatch({ type: "setDireccion", payload: value })
                }
                keyboardType="default"
                placeholderTextColor="grey"
              />
              <TextInput
                style={styles.input}
                placeholder="Mail (opcional)"
                defaultValue={state.mail}
                onChangeText={(value) =>
                  dispatch({ type: "setMail", payload: value })
                }
                keyboardType="email-address"
                placeholderTextColor="grey"
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Wellcome", { nombre: state.nombre });
                /* const validate =
                  state.dni &&
                  state.nombre &&
                  state.apellido &&
                  state.telefono &&
                  state.direccion;
                if (validate) {
                  registerTT();
                } else {
                  Alert.alert(
                    "Ups!",
                    "Todos los campos son requeridos, a excepción del e-mail",
                    [
                      {
                        text: "Ok",
                        onPress: () => {},
                        style: "destructive",
                      },
                    ]
                  );
                } */
              }}
            >
              <LinearGradient
                colors={[colors.cornflowerblue, colors.blue, colors.ttblue]}
                style={styles.signUpButton}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Registrarme
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
  }

  async function registerTT() {
    try {
      dispatch({ type: "startLoading" });

      const body = {
        dni: state.dni,
        nombre: state.nombre,
        apellido: state.apellido,
        direccion: state.direccion,
        telefono: state.telefono,
        mail: state.mail,
      };

      const response = await fetch(`${mobileTT}/algo`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const responseJson = response.json();
      if ((responseJson.status = "200")) {
        dispatch({ type: "endLoading" });
        navigation.navigate("Wellcome", { nombre: state.nombre });
      } else {
        Alert.alert("Error", "Por favor reintente en un instante", [
          {
            text: "Ok",
            onPress: () => {},
            style: "destructive",
          },
        ]);
        dispatch({ type: "endLoading" });
      }
    } catch (err) {
      Alert.alert(
        "Ups!",
        "Ocurrió un error inesperado, por favor reintente en unos instantes",
        [
          {
            text: "Ok",
            onPress: () => {},
            style: "destructive",
          },
        ]
      );
      dispatch({ type: "endLoading" });
    }
  }
};

const styles = StyleSheet.create({
  input: {
    alignSelf: "center",
    borderBottomWidth: 1,
    paddingLeft: 10,
    borderColor: colors.ttblue,
    width: width - 55,
    marginVertical: 20,
  },
  signUpButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  signUpButton: {
    alignSelf: "center",
    borderRadius: 6,
    elevation: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginVertical: 20,
    paddingVertical: 10,
    width: width - 55,
  },
});

export default SignUp;
