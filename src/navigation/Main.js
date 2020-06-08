import React, { useEffect } from "react";
import { BackHandler, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import RouteInicioComponent from "./RouteInicio";
import RouteCursosComponent from "./RouteCursos";
import Perfil from "../screens/home/perfil/Perfil";

import { CURSOS } from "../data/data";
import { colors } from "../constants/constants";

const TabApp = createBottomTabNavigator();

const Main = ({ route, navigation }) => {
  // Manejador del botón de Android
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Atención!", "Desea cerrar sesión?", [
        {
          text: "NO",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "SI",
          onPress: () => {
            navigation.popToTop();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const { dni, nombre, apellido, telefono, mail } = route.params;

  const userParams = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    mail: mail,
    cursosData: CURSOS,
  };

  return (
    <TabApp.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Cursos") {
            iconName = focused ? "graduation-cap" : "graduation-cap";
          } else {
            iconName = focused ? "user" : "user";
          }

          return <FontAwesomeIcon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.ttred,
        inactiveTintColor: "grey",
      }}
    >
      <TabApp.Screen
        name="Inicio"
        component={RouteInicioComponent}
        initialParams={userParams}
      />
      <TabApp.Screen
        name="Cursos"
        component={RouteCursosComponent}
        initialParams={userParams}
      />
      <TabApp.Screen
        name="Perfil"
        component={Perfil}
        initialParams={userParams}
      />
    </TabApp.Navigator>
  );
};

export default Main;
