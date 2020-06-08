import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/auth/signin/Login";
import SignUp from "../screens/auth/singup/SignUp";
import Wellcome from "../screens/auth/singup/Wellcome";
import Main from "./Main";

import { CURSOS } from "../data/data";

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
