import React, { useReducer, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { colors, mobileTT } from "../../../constants/constants";
import { LinearGradient } from "expo-linear-gradient";

const initialState = {
  dni: "",
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setDni": {
      return { ...state, dni: action.payload };
    }
    case "startLoading": {
      return { ...state, loading: true };
    }
    case "endLoading": {
      return { ...state, loading: false };
    }
    default: {
      throw new Error();
    }
  }
}

const Login = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isFocused, setIsFocused] = useState(true);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  switch (state.loading) {
    case true: {
      return (
        <ActivityIndicator
          style={{ flex: 1, backgroundColor: colors.background }}
          size="large"
          color={colors.ttred}
        />
      );
    }
    default: {
      return (
        <ScrollView>
          <View style={styles.screen}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 50,
                alignSelf: "center",
              }}
            >
              <Image
                source={require("../../../../assets/images/icono2.png")}
                style={{ height: 165, width: 268 }}
                height={165}
                width={268}
              />
            </View>
            <Text
              style={{
                alignSelf: "flex-start",
                fontSize: 40,
                fontWeight: "bold",
                color: colors.ttred,
              }}
            >
              Bienvenido
            </Text>
            <Text
              style={{
                alignSelf: "flex-start",
                fontSize: 19,
                color: colors.ttblue,
                marginTop: -5,
              }}
            >
              Inicie Sesión
            </Text>
            <TextInput
              style={[
                styles.input,
                { borderColor: isFocused ? "red" : "grey" },
              ]}
              placeholder="Ingrese su D.N.I."
              defaultValue={state.dni}
              onChangeText={(value) =>
                dispatch({ type: "setDni", payload: value })
              }
              keyboardType="numeric"
              maxLength={8}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <View style={{ marginVertical: 10 }}>
              <TouchableOpacity onPress={() => apiLogin()}>
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
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    Iniciar Sesión
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
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
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    Registrarme
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View
                style={{
                  alignSelf: "center",
                  alignItems: "center",
                  paddingVertical: 50,
                  paddingHorizontal: 100,
                  marginHorizontal: -120,
                }}
              >
                <Text style={{ fontSize: 12 }}>
                  Al crear una cuenta, acepta nuestros
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{ fontSize: 12, color: colors.buttonLoginColor1 }}
                  >
                    Términos de servicio
                  </Text>
                  <Text style={{ fontSize: 12 }}> y </Text>
                  <Text
                    style={{ fontSize: 12, color: colors.buttonLoginColor1 }}
                  >
                    Política de privacidad
                  </Text>
                  <Text style={{ fontSize: 12 }}>.</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }
  }

  async function apiLogin() {
    try {
      dispatch({ type: "startLoading" });

      const body = {
        dni: state.dni,
      };

      const response = await fetch(`${mobileTT}/api/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const responseJson = await response.json();

      if (responseJson.status === "200") {
        if (responseJson.session.user.dni === parseInt(state.dni)) {
          navigation.navigate("Main", {
            dni: responseJson.session.user.dni
              ? responseJson.session.user.dni
              : "--",
            nombre: responseJson.session.user.nombre
              ? responseJson.session.user.nombre
              : "--",
            apellido: responseJson.session.user.apellido
              ? responseJson.session.user.apellido
              : "--",
            telefono: responseJson.session.user.telefono !== null
              ? responseJson.session.user.telefono
              : "--",
            mail: responseJson.session.user.mail
              ? responseJson.session.user.mail
              : "--",
          });
          dispatch({ type: "endLoading" });
        } else {
          Alert.alert("Cuidado", `${responseJson.message}`, [
            {
              text: "Ok",
              onPress: () => {},
              style: "destructive",
            },
          ]);
          dispatch({ type: "endLoading" });
        }
      } else {
        Alert.alert("Ups!", `${responseJson.message}`, [
          {
            text: "Ok",
            onPress: () => {},
            style: "destructive",
          },
        ]);
        dispatch({ type: "endLoading" });
      }
    } catch (err) {
      Alert.alert("Error", "Intente nuevamente", [
        {
          text: "Ok",
          style: "destructive",
          onPress: () => {},
        },
      ]);
      dispatch({ type: "endLoading" });
    }
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: "100%",
    height: "10%",
  },
});

export default Login;
