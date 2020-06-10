import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Inicio from "../screens/home/inicio/Inicio";
import Presentation from "../screens/home/inicio/Presentation";
import Clases from "../screens/home/inicio/Clases";
import Modulo from "../screens/home/inicio/Modulo";
import VideoPlayer from "../screens/home/inicio/VideoPlayerView";
import PdfView from "../screens/home/inicio/PdfView";
import Imagen from "../screens/home/inicio/Imagen";

import { CURSOS } from "../data/data";
import { colors } from "../constants/constants";

const RouteInicio = createStackNavigator();

const RouteInicioComponent = ({ route, navigation }) => {
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
    <RouteInicio.Navigator initialRouteName="Inicio">
      <RouteInicio.Screen
        name="Inicio"
        component={Inicio}
        initialParams={userParams}
        options={{
          headerShown: false,
        }}
      />
      <RouteInicio.Screen
        name="Presentacion"
        component={Presentation}
        initialParams={userParams}
        options={{
          headerTitle: null,
          headerTintColor: colors.textColor,
        }}
      />
      <RouteInicio.Screen
        name="Clases"
        component={Clases}
        initialParams={userParams}
        options={{
          headerTitle: null,
          headerTintColor: colors.textColor,
        }}
      />
      <RouteInicio.Screen
        name="Modulo"
        component={Modulo}
        options={{
          headerTitle: null,
          headerTintColor: colors.textColor,
        }}
      />
      <RouteInicio.Screen
        name="Video"
        component={VideoPlayer}
        options={{
          headerTitle: null,
          headerTintColor: colors.textColor,
        }}
      />
      <RouteInicio.Screen
        name="Pdf"
        component={PdfView}
        options={{
          headerTitle: null,
          headerTintColor: colors.textColor,
        }}
      />
      <RouteInicio.Screen
        name="Imagen"
        component={Imagen}
        options={{
          headerTitle: null,
          headerTintColor: colors.textColor,
        }}
      />
    </RouteInicio.Navigator>
  );
};

export default RouteInicioComponent;
