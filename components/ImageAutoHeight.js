import React, { useState, useEffect } from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";

const ImageAutoHeight = props => {
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    let info = Image.resolveAssetSource(props.src);
    setRatio(info.width / info.height);
  }, []);

  const { width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    image: {
      backgroundColor: "#ff81ae",
      width: width * 0.8,
      height: (width * 0.8) / ratio
    },
    imagewrapper: {
      padding: "5%",
      marginVertical: "5%",
      borderColor: "#222",
      borderWidth: 10,
      backgroundColor: "white",
      borderRadius: 5
    }
  });
  return (
    <View style={{ ...styles.imagewrapper, ...props.container }}>
      <Image
        style={{ ...styles.image, ...props.img }}
        source={props.src}
        resizeMode="contain"
      />
    </View>
  );
};

export default ImageAutoHeight;
//1
// import React, { useState, useEffect } from "react";
// import { View, Image, Dimensions, StyleSheet } from "react-native";
//
// const ImageAutoHeight = props => {
//   const [ratio, setRatio] = useState(1);
//
//   useEffect(() => {
//     let info = Image.resolveAssetSource(props.src);
//     setRatio(info.width / info.height);
//   }, []);
//
//   const { width } = Dimensions.get("window");
//
//   const styles = StyleSheet.create({
//     wrapper: {},
//     image: {
//       width: "90%",
//     },
//     imagewrapper: {
//       width: "100%",
//       height: width / ratio,
//       backgroundColor: "red",
//       borderWidth: 2,
//       borderColor: "blue",
//       alignItems: "center",
//       justifyContent: "center",
//       overflow:"hidden"
//     }
//   });
//   return (
//     <View style={{ ...styles.imagewrapper, ...props.container }}>
//       <Image
//         style={{ ...styles.image, ...props.img }}
//         source={props.src}
//         resizeMode="center"
//       />
//     </View>
//   );
// };
//
// export default ImageAutoHeight;
