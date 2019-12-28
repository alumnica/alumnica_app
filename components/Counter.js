import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

import { connect } from "react-redux";
import { increment, decrement } from "../store/actions/counter.js";

import Colors from "../constants/Colors.js";

const Counter = ({ count, dispatch }) => {
  console.log("HOLA")
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(increment());
        }}
        style={{ ...styles.buttonWrapper, backgroundColor: Colors.green }}
      >
        <View style={styles.button}>
          <Text style={{ ...styles.buttonText, color: Colors.dark_green }}>
            +
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.counterWrapper}>
        <Text style={styles.text}>{count}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(decrement());
        }}
        style={{ ...styles.buttonWrapper, backgroundColor: Colors.red }}
      >
        <View style={styles.button}>
          <Text style={{ ...styles.buttonText, color: Colors.dark_red }}>
            -
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttonWrapper: {
    flex: 1
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontFamily: "lato-black",
    fontSize: 120
  },
  text: {
    fontFamily: "lato-regular",
    fontSize: 200
  },
  counterWrapper: {
    flex: 4,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({
  count: state.counter.count
});

export default connect(mapStateToProps)(Counter);
