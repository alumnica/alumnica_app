import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";

import SlideShow from "../components/SlideShow.js";

const ContentScreen = props => {
  return <SlideShow content={props.content} />;
};

const mapStateToProps = ({ contents }, { navigation }) => {
  const momentoID = navigation.getParam("momentoID");
  const content = contents.contents.filter(content => {
    return content.momentoID === momentoID;
  });

  return { content };
};

export default connect(mapStateToProps)(ContentScreen);
