import React, { useReducer, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../constants/constants";

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

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(true);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

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
        <View style={styles.screen}>
          <View
            style={{ flexDirection: "row", marginTop: 50, alignSelf: "center" }}
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
            }}
          >
            Inicie Sesión
          </Text>
          <ScrollView>
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
              <TouchableOpacity
                onPress={() => apiLogin()}
                style={{
                  paddingHorizontal: 5,
                  backgroundColor: colors.ttred,
                  paddingVertical: 10,
                  borderRadius: 5,
                  shadowOpacity: 0.2,
                  shadowRadius: 8,
                  elevation: 2,
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Iniciar Sesión
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUp")}
                style={{
                  paddingHorizontal: 5,
                  backgroundColor: "blue",
                  paddingVertical: 10,
                  borderRadius: 5,
                  shadowOpacity: 0.2,
                  shadowRadius: 8,
                  elevation: 2,
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Registrarme
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  alignSelf: "center",
                  alignItems: "center",
                  paddingVertical: 30,
                  paddingHorizontal: 100,
                  marginHorizontal: -120,
                }}
              >
                <Text style={{ fontSize: 12 }}>Al crear una cuenta, acepta nuestros</Text>
                <Text style={{ fontSize: 12 }}>Términos de servicio y Política de privacidad.</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  }

  async function apiLogin() {
    try {
      dispatch({ type: "startLoading" });

      const body = {
        dni: state.dni,
      };

      const response = await fetch("http://134.122.118.141/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const responseJson = await response.json();
      console.log(responseJson);
      if (responseJson.status === "200") {
        if (responseJson.session.user.dni === parseInt(state.dni)) {
          navigation.navigate("Main");
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
    paddingHorizontal: 40,
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 20,
    width: "100%",
    height: "10%",
  },
});

export default Login;
