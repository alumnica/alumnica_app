import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import counterReducer from "./store/reducers/counter.js";
import Counter from "./components/Counter.js"

const rootReducer = combineReducers({
  counter: counterReducer
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
        <Counter/>
    </Provider>
  );
}
