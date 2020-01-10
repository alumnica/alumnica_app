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
    text: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "left",
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

  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={styles.paginationStyle}
    >
      <Slide>
        <ImageAutoHeight src={require("../assets/img/1.png")} />
        <ImageAutoHeight src={require("../assets/img/2.png")} />
        <ImageAutoHeight src={require("../assets/img/modelar.png")} />
        <ImageAutoHeight src={require("../assets/img/aplicar.png")} />
        <ImageAutoHeight src={require("../assets/img/integrar.png")} />
      </Slide>
      <Slide>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          dolor sem, convallis at sagittis at, accumsan nec est. Morbi molestie
          eleifend risus ac sodales. Nunc euismod risus magna. Nullam sit amet
          tellus vel urna pulvinar varius non id purus. Suspendisse nec justo
          enim. Nulla tempus ullamcorper magna sit amet pretium. Maecenas
          volutpat viverra finibus. Aliquam sit amet magna nec mi efficitur
          suscipit. Sed suscipit, dui nec feugiat efficitur, lorem nisi
          condimentum orci, eget tincidunt velit nulla sed ligula. Sed at
          lobortis magna. Praesent vulputate varius accumsan. Fusce dignissim
          finibus risus iaculis tincidunt. Fusce sed mauris vitae risus tempor
          hendrerit sagittis eu mauris. Fusce posuere consectetur finibus. Cras
          malesuada sit amet mauris sed semper. Nunc et sapien quis felis
          vestibulum commodo. Quisque mi est, viverra in augue consectetur,
          placerat posuere risus. Sed et efficitur libero, porttitor venenatis
          mauris. Nunc auctor diam lorem, nec imperdiet orci lacinia sit amet.
          Integer volutpat massa in est aliquet pharetra. Aliquam finibus magna
          volutpat orci commodo rhoncus. Etiam et lectus a velit sagittis
          commodo. Cras aliquet justo vitae dui ultricies consequat. Quisque
          convallis leo et luctus bibendum. Suspendisse sem nunc, ornare sed dui
          vel, consectetur pharetra ex. In vulputate nisl at leo vulputate
          dignissim. Ut sed lacus magna. Etiam dictum tristique erat, id auctor
          lorem pharetra a. Nam quis purus ultrices, fringilla tellus nec,
          egestas sapien. Quisque malesuada leo vitae imperdiet mollis. Sed
          efficitur mi ut facilisis cursus. Proin ut ipsum vitae diam eleifend
          interdum in nec odio. Suspendisse accumsan, neque id faucibus blandit,
          sapien urna tincidunt ligula, varius venenatis est neque ut velit. Sed
          molestie placerat est, tincidunt venenatis lectus accumsan non.
          Suspendisse viverra dolor nibh, vel malesuada magna dictum non. Donec
          quis dui tincidunt, lobortis ligula vitae, rhoncus magna. Morbi
          fringilla rutrum massa euismod condimentum. Mauris in odio varius,
          luctus massa nec, blandit mauris. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Morbi in augue
          ligula. Quisque a rutrum nunc. Integer mollis eleifend facilisis. Nunc
          fermentum sem id egestas porttitor. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Phasellus molestie pharetra mauris,
          vitae iaculis dolor scelerisque at. Pellentesque rutrum risus sit amet
          commodo finibus. Mauris ac commodo ligula. Vestibulum vehicula ante in
          sem vulputate aliquam. Nam ac fringilla lacus.
        </Text>
      </Slide>
      <Slide>
        <ImageAutoHeight src={require("../assets/img/explorar.png")} />
      </Slide>
      <Slide>
        <ImageAutoHeight src={require("../assets/img/conectar.png")} />
      </Slide>
      <Slide>
        <ImageAutoHeight src={require("../assets/img/modelar.png")} />
      </Slide>
      <Slide>
        <ImageAutoHeight src={require("../assets/img/integrar.png")} />
      </Slide>
      <Slide>
        <ImageAutoHeight src={require("../assets/img/explorar.png")} />
        <ImageAutoHeight src={require("../assets/img/explorar.png")} />
        <ImageAutoHeight src={require("../assets/img/explorar.png")} />
        <ImageAutoHeight src={require("../assets/img/explorar.png")} />
        <ImageAutoHeight src={require("../assets/img/explorar.png")} />
      </Slide>
      <Slide>
        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            elit quam. Donec non volutpat lorem. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </Text>
        </View>

        <ImageAutoHeight src={require("../assets/img/explorar.png")} />
        <Text style={styles.text}>
          Suspendisse tincidunt ex ac risus tincidunt, id tincidunt justo
          fringilla. Nulla sit amet ornare enim. Phasellus iaculis nibh quis
          vulputate molestie. Cras in sapien at erat ornare pellentesque. Mauris
          congue diam in placerat hendrerit. Cras non feugiat ante, dapibus
          congue mauris. Nam facilisis tellus ac vehicula volutpat.
        </Text>
      </Slide>
    </Swiper>
  );
};

export default SlideShow;
