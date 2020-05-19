import React, { useReducer } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignSelf: "center",
        padding: 20,
        alignItems: "center",
      }}
    >
      <ScrollView>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ textAlign: "center" }}>
            Por favor, ingrese los siguientes datos para completar su registro
          </Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ textAlign: "left", paddingLeft: 20 }}>D.N.I.</Text>
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
          <Text style={{ textAlign: "left", paddingLeft: 20 }}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            defaultValue={state.nombre}
            onChangeText={(value) =>
              dispatch({ type: "setNombre", payload: value })
            }
            keyboardType="default"
          />
          <Text style={{ textAlign: "left", paddingLeft: 20 }}>Apellido</Text>
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            defaultValue={state.apellido}
            onChangeText={(value) =>
              dispatch({ type: "setApellido", payload: value })
            }
            keyboardType="default"
          />
          <Text style={{ textAlign: "left", paddingLeft: 20 }}>Telefono</Text>
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
          <Text style={{ textAlign: "left", paddingLeft: 20 }}>Dirección</Text>
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            defaultValue={state.direccion}
            onChangeText={(value) =>
              dispatch({ type: "setDireccion", payload: value })
            }
            keyboardType="default"
          />
          <Text style={{ textAlign: "left", paddingLeft: 20 }}>Mail (opcional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Mail"
            defaultValue={state.mail}
            onChangeText={(value) =>
              dispatch({ type: "setMail", payload: value })
            }
            keyboardType="email-address"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "red",
    paddingHorizontal: 20,
    marginVertical: 10,
    width: "100%",
    height: '9%',
  },
});

export default SignUp;
