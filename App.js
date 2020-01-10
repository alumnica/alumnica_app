import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import AppNavigator from "./navigation/AppNavigator.js";
import odasReducer from "./store/reducers/odas.js";
import momentosReducer from "./store/reducers/momentos.js";
import contentsReducer from "./store/reducers/contents.js";

const rootReducer = combineReducers({
  odas: odasReducer,
  momentos: momentosReducer,
  contents: contentsReducer
});

const store = createStore(rootReducer);

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

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
