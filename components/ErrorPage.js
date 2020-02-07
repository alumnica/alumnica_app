import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorPage = props => {
  return (
    <View style={styles.container}>
      <Feather name="alert-triangle" size={200} color="#FFCE1F" />
        <Text style={styles.text}>error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center"
  },
  text: { fontSize: 80, color: "#FFCE1F",fontFamily: "lato-bold" }
});

export default ErrorPage;
