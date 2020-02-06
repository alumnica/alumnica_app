import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import OdaSelectionScreen from "../screens/OdaSelectionScreen.js";
import MomentoSelectionScreen from "../screens/MomentoSelectionScreen.js";
import ContentScreen from "../screens/ContentScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import SignUpScreen from "../screens/SignUpScreen.js";

const Stack = createStackNavigator();

const AppNavigatorV5 = props => {
  return (
    <NavigationContainer>
      {props.auth.userToken === null ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LogIn"
            component={LoginScreen}
            options={{ headerShown: false, animationEnabled: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false, animationEnabled: false }}
          />
        </Stack.Navigator>
      ) : (
        <OdaSelectionScreen />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.userAuth
});

export default connect(mapStateToProps)(AppNavigatorV5);
