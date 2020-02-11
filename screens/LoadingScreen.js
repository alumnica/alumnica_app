import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loading = props => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Loading;
