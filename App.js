import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import AppNavigator from "./navigation/AppNavigator.js";

import reducers from "./store/reducers"


const store = createStore(reducers, applyMiddleware(thunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "lato-black": require("./assets/fonts/Lato-Black.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "playfair-bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf")
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setIsReady(true)} />
    );
  }
//Agregar AppNavigator al acabar tests
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
