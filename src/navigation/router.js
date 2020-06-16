import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/auth/signin/Login";
import SignUp from "../screens/auth/singup/SignUp";
import Wellcome from "../screens/auth/singup/Wellcome";
import Menu from "../screens/home/aboutus/Menu";
import AboutUs from "../screens/home/aboutus/AboutUs";
import Main from "./Main";

import { CURSOS } from "../data/data";
import { colors } from "../constants/constants";

const Root = createStackNavigator();

const Router = () => {
  const cursosData = CURSOS;
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
          initialParams={cursosData}
        />
        <Root.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
        <Root.Screen
          name="About"
          component={AboutUs}
          options={{
            headerTitle: "Fundación Tercer Tiempo",
            headerTintColor: colors.inicioText,
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

export default Router;
