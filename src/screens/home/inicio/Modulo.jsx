import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { colors } from "../../../constants/constants";
import Icon from "react-native-vector-icons/FontAwesome";

const Modulo = ({ route, navigation }) => {
  const { clase, indice } = route.params;
  console.log(clase);
  return (
    <View>
      <ScrollView>
        <View style={styles.screen}>
          {/* TÍTULO */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Clase {indice}</Text>
          </View>

          {/* TEXTO */}
          {clase.textClass.map((item, index) => {
            return (
              <View key={index}>
                <StyleTextClass
                  item={item.item}
                  title={item.title}
                  text={item.text}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const StyleTextClass = ({ item, title, text }) => {
  return (
    <View style={styles.textClassContainer}>
      {title ? (
        <Text style={styles.textTitle}>{text}</Text>
      ) : item ? (
        <View style={{ flexDirection: "row" }}>
          <Icon name="circle" size={14} style={{ marginTop: 10 }} />
          <Text style={styles.textItem}>{text}</Text>
        </View>
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleContainer: {
    padding: 20,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 24,
    color: colors.ttblue,
    fontWeight: "bold",
  },
  textClassContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 16,
    textAlign: "center",
    color: colors.ttred,
    fontWeight: "bold",
  },
  textItem: {
    paddingHorizontal: 20,
  },
  text: {},
});

export default Modulo;
