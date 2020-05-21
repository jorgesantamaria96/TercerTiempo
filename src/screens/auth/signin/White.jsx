import React, { useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const White = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("Login");
  }, []);

  return <View style={{ flex: 1, backgroundColor: "#fff" }} />;
};

export default White;
