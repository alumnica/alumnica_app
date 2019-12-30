import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import OdaSelectionScreen from "../screens/OdaSelectionScreen.js"

const AppNavigation = createStackNavigator(
  {
    Odas: OdaSelectionScreen,
  },
  {
    initialRouteName: 'Odas',
  }
);

export default createAppContainer(AppNavigation);
