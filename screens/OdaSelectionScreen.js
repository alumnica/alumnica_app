import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  View
} from "react-native";
import { connect } from "react-redux";

import Colors from "../constants/Colors.js";

const OdaSelectionScreen = props => {
  const renderODA = itemData => {
    let backgroundColor = "#fff";
    let fontColor = "#000";
    if (itemData.item.id % 2 === 0) {
      fontColor = "#000";
    }

    return (
      <TouchableOpacity
        style={{ ...styles.container, backgroundColor: backgroundColor }}
        onPress={() => {
          props.navigation.navigate({
            routeName: "Momentos",
            params: {
              odaID: itemData.item.id,
              title: itemData.item.title
            }
          });
        }}
      >
        <Text style={{ ...styles.text, color: fontColor }}>
          {itemData.item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={props.odas}
      renderItem={renderODA}
      style={{backgroundColor: "#F7F8FC"}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "rgba(0,0,0,0.11)",
    shadowOffset: {
      width: 1.5,
      height: 1.5
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    margin: 15,
    borderRadius: 12,
    paddingTop: 40,
    paddingBottom: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "lato-black",
    fontSize: 30
  }
});

const mapStateToProps = state => ({
  odas: state.odas.odas
});

export default connect(mapStateToProps)(OdaSelectionScreen);
