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
    let backgroundColor = Colors.white
    let fontColor = Colors.black
    if(itemData.item.id%2===0){
      backgroundColor = Colors.black
      fontColor = Colors.white
    }

    return (
      <TouchableOpacity
        style={{...styles.container, backgroundColor: backgroundColor}}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'Momentos',
            params: {
              odaID: itemData.item.id,
              title: itemData.item.title
            }
          });
        }}
      >
        <Text style={{...styles.text, color: fontColor}}>{itemData.item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={props.odas}
      renderItem={renderODA}
    />
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 40,paddingBottom:40, flex: 1, alignItems: "center", justifyContent: "center"},
  text: {
    fontFamily: "lato-bold",
    fontSize: 30
  }
});

const mapStateToProps = state => ({
  odas: state.odas.odas
});

export default connect(mapStateToProps)(OdaSelectionScreen);
