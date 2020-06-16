import React, { useEffect } from "react";
import { View, StyleSheet, BackHandler, Alert } from "react-native";

const AboutUs = ({ route, navigation }) => {
  useEffect(() => {
    const backAction = () => {
      navigation.pop();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return <View />;
};

const styles = StyleSheet.create({});

export default AboutUs;
