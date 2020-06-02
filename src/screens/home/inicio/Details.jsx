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

  const { title, image, detail, ranking } = route.params;

  const renderImage = (title) => {
    const Carpinteria = require("../../../../assets/images/carpinteriaDetail.png");
    const Barberia = require("../../../../assets/images/carpinteriaDetail.png");
    const Construccion = require("../../../../assets/images/carpinteriaDetail.png");
    const Soldadura = require("../../../../assets/images/carpinteriaDetail.png");
    const Torneria = require("../../../../assets/images/carpinteriaDetail.png");

    if (title === "Carpintería Básica") return Carpinteria;
    if (title === "Construcción en seco") return Barberia;
    if (title === "Tornería") return Construccion;
    if (title === "Barbería Masculina") return Soldadura;
    if (title === "Soldadura Básica") return Torneria;
  };

  const imageExample = require("../../../../assets/images/carpinteriaDetail.png");

  return (
    <View>
      <ScrollView>
        <View style={styles.screen}>
          <View style={{ paddingTop: 10 }}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={styles.author}>Por "Author"</Text>
          </View>
          <TouchableOpacity style={styles.image}>
            <Image
              source={imageExample}
              style={{ width: "100%", height: 160 }}
            />
            <Icon
              name="play-circle-o"
              style={{
                position: "absolute",
                color: "white",
                alignSelf: "center",
                marginTop: 20,
              }}
              size={100}
            />
          </TouchableOpacity>
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
  image: {
    alignSelf: "center",
    width: "100%",
  },
  title: {
    color: colors.ttblue,
    fontWeight: "bold",
    fontSize: 22,
  },
  author: {
    color: colors.nameAuthorTextColor,
    fontSize: 14,
  },
});

export default DetailsCourses;
