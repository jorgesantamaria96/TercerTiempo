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

const DetailsCourses = ({ route, navigation }) => {
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

  const { clases, level } = route.params;

  return (
    <View>
      <ScrollView>
        <View style={styles.screen}>
          {/* TÍTULO */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Todas las clases disponible para el Nivel {level}:
            </Text>
          </View>

          {/* CLASES */}
          {clases.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.cardClass}
                key={index}
                onPress={() =>
                  navigation.navigate("Modulo", {
                    clase: item,
                    indice: index + 1,
                  })
                }
              >
                <Text style={styles.cardTextClass}>Clase {index + 1}</Text>
              </TouchableOpacity>
            );
          })}
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
    paddingVertical: 10,
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: colors.ttblue,
    fontWeight: "bold",
  },
  cardClass: {
    alignSelf: "center",
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: colors.background,
  },
  cardTextClass: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.ttred,
  },
});

export default DetailsCourses;
