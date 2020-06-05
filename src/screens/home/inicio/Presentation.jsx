import React, { useEffect } from "react";
import { View, Text, StyleSheet, BackHandler, ScrollView } from "react-native";
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

  return (
    <View>
      <ScrollView>
        <View style={styles.screen}>
          {/* TÍTULO */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>

          {/* IMÁGEN */}
          
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
});

export default Presentation;
