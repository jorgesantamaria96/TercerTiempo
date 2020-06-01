import React, { useEffect, useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CardItem from "../../../components/home/CardItem";
import { colors } from "../../../constants/constants";
import Icon from "react-native-vector-icons/FontAwesome";

const initialState = {
  loading: false,
  search: "",
  searchs: [],
  cursos: [],
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

  // Datos traídos de las rutas
  const { dni, nombre, apellido, telefono, mail, cursosData } = route.params;
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
        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
          <Image
            source={require("../../../../assets/images/icono2.png")}
            style={{ width: 83, height: 50 }}
          />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.hi}>Hola {params.nombre}!</Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.whatsLearnToday}>Qué deseas aprender hoy?</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Buscar"
              placeholderTextColor={colors.inicioText}
              onChangeText={() => {}}
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.icon}>
            <Icon name="search" size={15} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.mostView}>
          <Text style={styles.mostViewText}>Los más vistos</Text>
        </View>
        <FlatList
          style={{ width: "100%" }}
          data={data}
          renderItem={({ item }) => {
            return (
              <CardItem
                title={item.title}
                image={item.image}
                detail={item.detail}
                rating={item.ranking}
                onPress={() =>
                  navigation.navigate("Details", {
                    item,
                  })
                }
              />
            );
          }}
          keyExtractor={(item, index) => `${index}_${item.id}`}
        />
      </View>
    </ScrollView>
  );


};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  hi: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.inicioText,
  },
  whatsLearnToday: {
    fontSize: 12,
    color: colors.inicioText,
  },
  containerInput: {
    width: 200,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 5,
    borderRadius: 40,
    elevation: 3,
    width: "100%",
    paddingBottom: 5,
  },
  mostView: {
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  mostViewText: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.inicioText,
  },
  icon: {
    borderWidth: 0.1,
    elevation: 1,
    margin: 10,
    marginLeft: -5,
    alignSelf: "center",
    padding: 10,
    borderRadius: 100,
    borderColor: "#fff",
  },
  searchIcon: {
    color: colors.inicioText,
  },
});

export default Inicio;
