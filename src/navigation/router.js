import React, { useEffect } from "react";
import { BackHandler, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import Login from "../screens/auth/signin/Login";
import SignUp from "../screens/auth/singup/SignUp";
import Wellcome from "../screens/auth/singup/Wellcome";
import Cursos from "../screens/home/cursos/Cursos";
import Inicio from "../screens/home/inicio/Inicio";
import Details from "../screens/home/inicio/Details";
import Perfil from "../screens/home/perfil/Perfil";
import { colors } from "../constants/constants";
import { DATA } from "../data/data";

const Root = createStackNavigator();
const TabApp = createBottomTabNavigator();
const RouteInicio = createStackNavigator();
const RouteCursos = createStackNavigator();

const Router = () => {
  const cursosData = DATA;
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

  const { dni, nombre, apellido, telefono } = route.params;

  const userParams = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    cursosData: DATA,
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

const RouteInicioComponent = ({ route, navigation }) => {
  const { dni, nombre, apellido, telefono } = route.params;

  const userParams = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    cursosData: DATA,
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
        name="Details"
        component={Details}
        initialParams={userParams}
        options={{
          headerTitle: null,
          headerTintColor: colors.textColor,
        }}
      />
    </RouteInicio.Navigator>
  );
};

const RouteCursosComponent = ({ route, navigation }) => {
  const { dni, nombre, apellido, telefono } = route.params;

  const userParams = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    cursosData: DATA,
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
        name="Details"
        component={Details}
        initialParams={userParams}
        options={{
          headerTitle: null,
          headerTintColor: colors.textColor,
        }}
      />
    </RouteCursos.Navigator>
  );
};

export default Router;
