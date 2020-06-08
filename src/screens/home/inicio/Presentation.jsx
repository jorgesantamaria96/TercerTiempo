import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../constants/constants";

const Presentation = ({ route, navigation }) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.dispatch.length > 0) {
        navigation.pop();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const { type, title, curso, presentation } = route.params;

  const renderImageCurso = (type) => {
    const Reciclado = require("../../../../assets/images/cursos/reciclado/reciclado.jpg");
    const Barbijos = require("../../../../assets/images/cursos/barbijos/barbijos.jpg");

    if (type === "reciclado") return Reciclado;
    if (type === "barbijos") return Barbijos;
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.screen}>
          {/* TÍTULO */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>

          {/* IMÁGEN */}
          <View style={styles.imageContainer}>
            <Image source={renderImageCurso(type)} style={styles.image} />
          </View>

          {/* TEXTO DE PRESENTACIÓN */}
          <View style={styles.presentationContainer}>
            {presentation.map((item, index) => {
              return (
                <View style={{ paddingHorizontal: 10 }} key={index}>
                  {!item.item ? (
                    <Text style={styles.text}>{item.text}</Text>
                  ) : (
                    <Text style={styles.itemText}>
                      <Icon />
                      {item.text}
                    </Text>
                  )}
                </View>
              );
            })}
          </View>

          {/* NIVELES */}
          <View>
            <Text style={styles.levelsLabel}>Niveles:</Text>
            {curso.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.levelContainer}>
                  <Text style={styles.levelTitle}>Nivel {index + 1}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{ marginBottom: 10 }} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleContainer: {
    paddingTop: 10,
  },
  title: {
    color: colors.ttblue,
    fontWeight: "bold",
    fontSize: 16,
  },
  imageContainer: {
    alignSelf: "center",
    padding: 10,
  },
  image: {
    height: 200,
    width: 300,
  },
  text: {
    paddingVertical: 5,
    fontSize: 14,
    color: colors.inicioText,
  },
  itemText: {},
  levelsLabel: {
    alignSelf: "flex-start",
    paddingHorizontal: 5,
    color: colors.nameCardAndclockText,
  },
  levelContainer: {
    alignSelf: "center",
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: colors.levelsBackground,
  },
  levelTitle: {
    textAlign: "center",
    color: colors.ttred,
    fontWeight: "bold",
  },
});

export default Presentation;
