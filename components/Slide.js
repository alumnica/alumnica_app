import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const Slide = props => {
  return (
    <View style={{ ...styles.slide, ...props.slide }}>
      <ScrollView
        contentContainerStyle={{ ...styles.scrollView, ...props.scrollView }}
      >
        {props.children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    height: "92%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffdb5c"
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
    marginTop: "10%",
    paddingBottom: "10%",
    paddingLeft: "5%",
    paddingRight: "5%"
  }
});

export default Slide;
