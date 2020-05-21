import React, { useReducer } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  BackHandler,
  Alert,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonCustom from "../../../components/common/ButtonCustom";
import { width, mobileTT, colors } from "../../../constants/constants";

const initialState = {
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

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView>
          <Text
            style={{ textAlign: "center", marginTop: 40, marginBottom: 20 }}
          >
            Por favor, ingrese los siguientes datos para completar su registro
          </Text>
          <TextInput
            style={styles.input}
            placeholder="D.N.I."
            defaultValue={state.dni}
            onChangeText={(value) =>
              dispatch({ type: "setDni", payload: value })
            }
            keyboardType="numeric"
            maxLength={8}
          />
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            defaultValue={state.nombre}
            onChangeText={(value) =>
              dispatch({ type: "setNombre", payload: value })
            }
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            defaultValue={state.apellido}
            onChangeText={(value) =>
              dispatch({ type: "setApellido", payload: value })
            }
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Telefono"
            defaultValue={state.telefono}
            onChangeText={(value) =>
              dispatch({ type: "setTelefono", payload: value })
            }
            keyboardType="phone-pad"
            maxLength={10}
          />
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            defaultValue={state.direccion}
            onChangeText={(value) =>
              dispatch({ type: "setDireccion", payload: value })
            }
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Mail (opcional)"
            defaultValue={state.mail}
            onChangeText={(value) =>
              dispatch({ type: "setMail", payload: value })
            }
            keyboardType="email-address"
          />
          <ButtonCustom
            text="Registrarme"
            textStyle={styles.signUpButtonText}
            buttonStyle={styles.signUpButton}
            onPress={() => {
              const validate =
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
              }
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );

  async function registerTT() {
    try {
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
        navigation.navigate("Main");
      } else {
        Alert.alert("Error", "Por favor reintente en un instante", [
          {
            text: "Ok",
            onPress: () => {},
            style: "destructive",
          },
        ]);
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
    }
  }
};

const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.ttblue,
    padding: 6,
    paddingHorizontal: 20,
    margin: 12,
    width: "90%",
    height: "9%",
  },
  signUpButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  signUpButton: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: width - 55,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 140,
    backgroundColor: colors.ttred,
    elevation: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});

export default SignUp;
