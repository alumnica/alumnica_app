import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text
} from "react-native";
import Swiper from "react-native-swiper";
3
import Slide from "./Slide.js";
import ImageAutoHeight from "./ImageAutoHeight.js";

const SlideShow = props => {
  const [ratio, setRatio] = useState(1);
  const { width, height } = Dimensions.get("window");

  const styles = StyleSheet.create({
    slide: {
      height: "92%",
      width: width,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffdb5c"
    },
    image: {
      width: width * 0.5,
      height: (width * 0.5) / ratio
    },
    imagewrapper: {
      padding: "10%",
      width: width * 0.7,
      height: (width * 0.7) / ratio,
      backgroundColor: "red"
    },
    dot: {
      borderWidth: 1,
      borderColor: "#ffdb5c",
      width: 10,
      height: 10,
      borderRadius: 5,
      marginLeft: 5,
      marginRight: 5
    },
    activeDot: {
      backgroundColor: "#f9c200",
      width: 14,
      height: 14,
      borderRadius: 8,
      marginLeft: 5,
      marginRight: 5
    },
    paginationStyle: { bottom: "3%" },
    scrollView: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: "20%"
    }
  });

  const renderContents = () => {
    let content = props.content;

    return content.map(slide => {
      return <Slide key={slide.id} content={slide} />;
    });
  };

  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={styles.paginationStyle}
    >
      {renderContents()}
    </Swiper>
  );
};

export default SlideShow;
