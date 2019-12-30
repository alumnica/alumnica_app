import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

import Colors from "../constants/Colors.js";
import { MOMENTOS, ODAS } from "../data/dummy_data.js";

const OdaSelectionScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ODAs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: {
    fontFamily: "lato-regular",
    fontSize: 50
  }
});

export default OdaSelectionScreen;
