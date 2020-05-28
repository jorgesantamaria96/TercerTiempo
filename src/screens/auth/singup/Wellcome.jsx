import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../constants/constants";

const Wellcome = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[
          colors.buttonLoginColor3,
          colors.buttonLoginColor2,
          colors.buttonLoginColor1,
        ]}
        style={{
          flex: 1,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              Bienvenido!!
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>
              Nos da gusto que formes parte de Tercer Tiempo...
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Wellcome;
