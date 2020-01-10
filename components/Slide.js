import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
const { width } = Dimensions.get("window");

import ImageAutoHeight from "./ImageAutoHeight.js";

const Slide = props => {
  const renderContents = () => {
    return props.content.map(content => {
      switch (content.type) {
        case "Text":
          return <Text>{content.content}</Text>;
        case "Image":
          return <ImageAutoHeight src={require("../assets/img/conectar.png")} />;
        default:
        return null
      }
    });
  };

  return (
    <View style={{ ...styles.slide, ...props.slide }}>
      <ScrollView
        contentContainerStyle={{ ...styles.scrollView, ...props.scrollView }}
      >
        {renderContents()}
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
