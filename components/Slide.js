import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
const { width } = Dimensions.get("window");

import ImageAutoHeight from "./ImageAutoHeight.js";

const Slide = props => {
  const renderContents = () => {
    let content = props.content
    return content.data.map((data,i) => {
      let key = content.id + i.toString()
      switch (data.type) {
        case "Text":
          return <Text key={key} style={styles.text}>{data.content}</Text>;
        case "Image":
          return <ImageAutoHeight key={key} src={require("../assets/img/conectar.png")} />;
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
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "#ffdb5c"
  }
});

export default Slide;
