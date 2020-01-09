import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export default () => {
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    const dimensionChange = () => {
      setWidth(Dimensions.get("window").width);
      setHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", dimensionChange);

    return () => {
      Dimensions.removeEventListener("change", dimensionChange);
    };
  });

  return [width, height];
};
