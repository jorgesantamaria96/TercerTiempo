import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../screens/auth/signin/Login';
import SignUp from '../screens/auth/singup/SignUp';
import Wellcome from '../screens/auth/singup/Wellcome';
import Cursos from '../screens/home/cursos/Cursos';
import Inicio from '../screens/home/inicio/Inicio';
import Perfil from '../screens/home/perfil/Perfil';

const Root = createStackNavigator();
const TabApp = createBottomTabNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Root.Navigator initialRouteName="Login">
                <Root.Screen name="Login" component={Login} options={{
                    headerShown: false,
                }} />
                <Root.Screen name="SignUp" component={SignUp} options={{
                    headerShown: false,
                }} />
                <Root.Screen name="Wellcome" component={Wellcome} options={{
                    headerShown: false,
                }} />
                <Root.Screen name="Main" component={Main} options={{
                    headerShown: false,
                }} />
            </Root.Navigator>
        </NavigationContainer>
    );
};

const Main = () => {
    return (
        <TabApp.Navigator initialRouteName="Inicio">
            <TabApp.Screen name="Inicio" component={Inicio} />
            <TabApp.Screen name="Cursos" component={Cursos} />
            <TabApp.Screen name="Perfil" component={Perfil} />
        </TabApp.Navigator>
    );
};

export default Router;
