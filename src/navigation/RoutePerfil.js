import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Perfil from "../screens/home/perfil/Perfil";
import About from "../screens/home/aboutus/AboutUs";
import Contacto from "../screens/home/perfil/Contacto";
import { colors } from "../constants/constants";

const RoutePerfil = createStackNavigator();

const RoutePerilComponent = ({ route, navigation }) => {
  const { dni, nombre, apellido, telefono, mail } = route.params;

  const userParams = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    mail: mail,
  };
  return (
    <RoutePerfil.Navigator initialRouteName="Perfil">
      <RoutePerfil.Screen
        name="Perfil"
        component={Perfil}
        initialParams={userParams}
        options={{ headerShown: false }}
      />
      <RoutePerfil.Screen
        name="About"
        component={About}
        initialParams={userParams}
        options={{
          headerTitle: "Fundación Tercer Tiempo",
          headerTintColor: colors.inicioText,
        }}
      />
      <RoutePerfil.Screen
        name="Contacto"
        component={Contacto}
        initialParams={userParams}
        options={{
            headerTitle: "Contacto",
            headerTintColor: colors.inicioText,
          }}
      />
    </RoutePerfil.Navigator>
  );
};

export default RoutePerilComponent;
