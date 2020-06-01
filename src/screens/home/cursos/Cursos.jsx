import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import CardItem from "../../../components/home/CardItem";
import { colors } from "../../../constants/constants";

const Cursos = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);

  // Datos traídos de las rutas
  const { dni, nombre, apellido, telefono, cursosData, mail } = route.params;
  const params = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    data: cursosData,
    mail: mail,
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={{ marginTop: 40 }}>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <View style={styles.image}>
              <Image
                source={require("../../../../assets/images/sublogo.png")}
                style={{ width: 147, height: 130 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderColor: "black",
              justifyContent: "center",
              marginVertical: 5,
            }}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.textTitle}>Todos los cursos disponibles</Text>
            </View>
          </View>
        </View>
        <FlatList
          style={{ width: "100%" }}
          data={params.data}
          onRefresh={() => {} /* fetchData() */}
          refreshing={loading}
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
    backgroundColor: "white",
  },
  titleContainer: {},
  textTitle: {
    fontWeight: "bold",
    color: colors.inicioText,
    fontSize: 20,
    textShadowColor: "#000",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    paddingLeft: 2,
  },
  image: {
    borderColor: "red",
    padding: 10,
  },
});

export default Cursos;
