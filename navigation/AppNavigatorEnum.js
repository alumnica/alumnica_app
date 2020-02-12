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
import ErrorScreen from "../screens/ErrorScreen.js";
import LoadingScreen from "../screens/LoadingScreen.js";
import FirebaseTestsSnapShot from "../screens/FirebaseTestsSnapShot.js";
import { handleSignOut, getLocalUser } from "../store/actions/auth.js";

const Stack = createStackNavigator();

const AppNavigator = props => {
  useEffect(() => {
    props.getLocalUser();
  }, []);

  const renderScreens = props => ({
    loading: (
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
      </Stack.Navigator>
    ),
    error: (
      <Stack.Navigator>
        <Stack.Screen
          name="Error"
          component={ErrorScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
      </Stack.Navigator>
    ),
    ready: (
      <Stack.Navigator
        screenOptions={{
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => {
                props.handleSignOut();
              }}
            >
              <Feather name="log-out" size={32} color="#15527F" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#FFCE1F"
          }
        }}
      >
        <Stack.Screen
          name="🔥FireBaseSnapShot🔥"
          component={FirebaseTestsSnapShot}
        />
        <Stack.Screen name="ODAs" component={OdaSelectionScreen} />
        <Stack.Screen name="Momentos" component={MomentoSelectionScreen} />
        <Stack.Screen name="Contenidos" component={ContentScreen} />
      </Stack.Navigator>
    ),
    no_user: (
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
    )
  });

  return (
    <NavigationContainer>
    {renderScreens(props)[props.status]}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  status: state.status.status
});

export default connect(
  mapStateToProps,
  { handleSignOut, getLocalUser }
)(AppNavigator);
