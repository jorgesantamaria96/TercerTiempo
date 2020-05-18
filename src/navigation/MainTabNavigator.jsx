import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from "../screens/home/Inicio";
import Cursos from "../screens/home/Cursos";
import Perfil from "../screens/home/Perfil";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Cursos" component={Cursos} />
      <Tab.Screen name="Mi Perfíl" component={Perfil} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
