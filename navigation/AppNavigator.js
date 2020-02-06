import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import OdaSelectionScreen from "../screens/OdaSelectionScreen.js";
import MomentoSelectionScreen from "../screens/MomentoSelectionScreen.js";
import ContentScreen from "../screens/ContentScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import SignUpScreen from "../screens/SignUpScreen.js";

const AppNavigation = createStackNavigator(
  {
    Odas: OdaSelectionScreen,
    Momentos: MomentoSelectionScreen,
    Content: ContentScreen,
    LogIn: LoginScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: "LogIn",
    defaultNavigationOptions: { title: "Alúmnica" }
  }
);

export default createAppContainer(AppNavigation);
