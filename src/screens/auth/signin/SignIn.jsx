import React, { useReducer } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TextInput
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const SignIn = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigation = useNavigation();

  switch (state.loading) {
    case true: {
      return <ActivityIndicator size="large" style={{ flex: 1 }} color="red" />;
    }
    default: {
      return (
        <View style={styles.screen}>
          <Text>Bienvenido</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su D.N.I."
            defaultValue={state.dni}
            onChangeText={(value) =>
              dispatch({ type: "setDni", payload: value })
            }
            keyboardType="numeric"
            maxLength={8}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
              <Button
                onPress={() => {
                  apiLogin();
                }}
                color="red"
                title="Iniciar Sesión"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
              <Button
                onPress={() => navigation.navigate("SignUp")}
                color="blue"
                title="Registrarse"
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  async function apiLogin() {
    try {
      dispatch({ type: "startLoading" });

      const response = await fetch(`${mobileTT}/algo`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const responseJson = await response.json();

      if (responseJson.status === "200") {
        if (responseJson.dni === state.dni) {
          navigation.navigate("Main");
        } else {
          Alert.alert("Cuidado", "Ingrese su D.N.I. correctamente", [
            {
              text: "Ok",
              onPress: () => {},
              style: "destructive",
            },
          ]);
        }
      } else {
        Alert.alert("Error", "Por favor reintente en un momento", [
          {
            text: "Ok",
            onPress: () => {},
            style: "destructive",
          },
        ]);
      }
    } catch (err) {
      Alert.alert("Error", "Intente nuevamente", [
        {
          text: "Ok",
          style: "destructive",
          onPress: () => {},
        },
      ]);
    }
  }
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
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "red",
    paddingHorizontal: 20,
    marginVertical: 20,
    width: "80%",
    height: "9%",
  },
});

export default SignIn;
