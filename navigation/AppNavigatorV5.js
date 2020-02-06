import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import OdaSelectionScreen from "../screens/OdaSelectionScreen.js";
import MomentoSelectionScreen from "../screens/MomentoSelectionScreen.js";
import ContentScreen from "../screens/ContentScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import SignUpScreen from "../screens/SignUpScreen.js";
import { handleSignOut, getLocalToken } from "../store/actions/userAuth.js";

const Stack = createStackNavigator();

const AppNavigatorV5 = props => {
  useEffect(() => {
    props.getLocalToken();
  }, []);

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
        <Stack.Navigator
          screenOptions={{
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() => {
                  props.handleSignOut();
                }}
              >
                <Feather name="log-out" size={32} color="red" />
              </TouchableOpacity>
            )
          }}
        >
          <Stack.Screen name="ODAs" component={OdaSelectionScreen} />
          <Stack.Screen name="Momentos" component={MomentoSelectionScreen} />
          <Stack.Screen name="Contenidos" component={ContentScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.userAuth
});

export default connect(
  mapStateToProps,
  { handleSignOut, getLocalToken }
)(AppNavigatorV5);
