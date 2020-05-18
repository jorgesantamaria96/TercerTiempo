import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from './AuthStack';
import MainTab from './MainTabNavigator';
import SignIn from '../screens/auth/signin/SignIn';

const AppStack = createStackNavigator();

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <NavigationContainer>
            <AppStack.Navigator>
                {isLoggedIn ? (
                    <AppStack.Screen name="Home" component={MainTab} />
                ) : (
                    <AppStack.Screen name="SignIn" component={SignIn} options={{
                        headerStyle: {
                            backgroundColor: '#fff'
                        }
                    }} />
                )}
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Router;