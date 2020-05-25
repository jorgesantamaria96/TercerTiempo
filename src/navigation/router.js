import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import Login from "../screens/auth/signin/Login";
import SignUp from "../screens/auth/singup/SignUp";
import Wellcome from "../screens/auth/singup/Wellcome";
import Cursos from "../screens/home/cursos/Cursos";
import Inicio from "../screens/home/inicio/Inicio";
import Perfil from "../screens/home/perfil/Perfil";
import { colors } from "../constants/constants";

const Root = createStackNavigator();
const TabApp = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="Login">
        <Root.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Root.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Root.Screen
          name="Wellcome"
          component={Wellcome}
          options={{
            headerShown: false,
          }}
        />
        <Root.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

const Main = ({ route, navigation }) => {
  const { dni, nombre, apellido, telefono } = route.params;

  const userParams = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
  }

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

          return <FontAwesomeIcon name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.ttred,
        inactiveTintColor: "grey",
      }}
    >
      <TabApp.Screen name="Inicio" component={Inicio} initialParams={userParams} />
      <TabApp.Screen name="Cursos" component={Cursos} initialParams={userParams} />
      <TabApp.Screen name="Perfil" component={Perfil} initialParams={userParams} />
    </TabApp.Navigator>
  );
};

export default Router;
