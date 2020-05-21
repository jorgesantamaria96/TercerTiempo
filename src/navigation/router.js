import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../screens/auth/signin/Login';
import White from '../screens/auth/signin/White';
import SignUp from '../screens/auth/singup/SignUp';
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
                <Root.Screen name="Main" component={Main} options={{
                    headerShown: false,
                }} />
                <Root.Screen name="White" component={White} options={{
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
