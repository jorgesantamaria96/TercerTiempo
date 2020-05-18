import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/auth/signin/SignIn";
import SignUp from "../screens/auth/signup/SignUp";

const Auth = createStackNavigator();

const AuthStack = () => {
  const [resgister, setRegister] = useState(true);
  return (
    <Auth.Navigator>
      {register ? (
        <Auth.Screen name="SignIn" component={SignIn} />
      ) : (
        <Auth.Screen name="SignUp" component={SignUp} />
      )}
    </Auth.Navigator>
  );
};

export default AuthStack;
