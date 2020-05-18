import React, { useState, useReducer } from "react";
import { SafeAreaView, Text, StyleSheet, View, ScrollView } from "react-native";

import TextInputDNI from "../../../components/TextInputDNI";
import TextInputPass from "../../../components/TextInputPass";

const initialState = {
  dni: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setDni": {
      return { ...state, dni: action.payload };
    }
    case "setPass": {
      return { ...state, password: action.payload };
    }
    default:
      throw new Error();
  }
}

const SignIn = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ScrollView style={styles.appContainer}>
      <Wellcome />
      <InicieSesion />
      <TextInputDNI
        onValueChange={(value) => {
          dispatch({ type: "setDni", payload: value });
        }}
        defaultValue={state.dni}
      />
      <TextInputPass
        onValueChange={(value) => {
          dispatch({ type: "setDni", payload: value });
        }}
        defaultValue={state.password}
      />
    </ScrollView>
  );
};

const Wellcome = () => {
  return (
    <View style={styles.wellcome}>
      <Text style={styles.wellcomeText}>Bienvenido</Text>
    </View>
  );
};

const InicieSesion = () => {
  return (
    <View styles={styles.textIniciarSesion}>
      <Text style={styles.textIS}>Inicie Sesión</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
  },
  signin: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  wellcome: {
    flexDirection: "row",
    paddingTop: 120,
    alignItems: "flex-start",
    color: "red",
  },
  wellcomeText: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
  },
  textIniciarSesion: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  textIS: {
    color: "blue",
    alignItems: "flex-start",
    paddingBottom: 20,
  },
});

export default SignIn;
