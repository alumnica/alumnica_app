import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TextInput = props => {
  return (
    <>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{props.label}</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans"
  }
});

export default TextInput;
