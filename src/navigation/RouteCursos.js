import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cursos from "../screens/home/cursos/Cursos";
import Presentation from "../screens/home/inicio/Presentation";
import Clases from "../screens/home/inicio/Clases";
import Modulo from "../screens/home/inicio/Modulo";

import { CURSOS } from "../data/data";
import { colors } from "../constants/constants";

const RouteCursos = createStackNavigator();

const RouteCursosComponent = ({ route, navigation }) => {
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
    <RouteCursos.Navigator initialRouteName="Cursos">
      <RouteCursos.Screen
        name="Cursos"
        component={Cursos}
        initialParams={userParams}
        options={{
          headerShown: false,
        }}
      />
      <RouteCursos.Screen
        name="Presentacion"
        component={Presentation}
        initialParams={userParams}
        options={{
          headerTitle: null,
          headerTintColor: colors.textColor,
        }}
      />
      <RouteCursos.Screen
        name="Clases"
        component={Clases}
        initialParams={userParams}
        options={{
          headerTitle: null,
          headerTintColor: colors.textColor,
        }}
      />
    </RouteCursos.Navigator>
  );
};

export default RouteCursosComponent;
