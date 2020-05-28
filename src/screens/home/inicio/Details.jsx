import React, { useEffect } from "react";
import { View, Text, StyleSheet, BackHandler } from "react-native";

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

  const renderImage = (image) => {
    const Carpinteria = require("../../../../assets/images/carpinteriaDetail.png");
    const Barberia = require("../../../../assets/images/carpinteriaDetail.png");
    const Construccion = require("../../../../assets/images/carpinteriaDetail.png");
    const Soldadura = require("../../../../assets/images/carpinteriaDetail.png");
    const Torneria = require("../../../../assets/images/carpinteriaDetail.png");

    if (image === "carpinteria") return Carpinteria;
    if (image === "barberia") return Barberia;
    if (image === "construccion") return Construccion;
    if (image === "soldadura") return Soldadura;
    if (image === "torneria") return Torneria;
  };

  return (
    <View>
      <Text style={{ alignItems: "center", justifyContent: "center" }}>
        Details
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailsCourses;
