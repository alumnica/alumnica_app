import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  View,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

import Colors from "../constants/Colors.js";

const MomentoSelectionScreen = props => {
  const renderODA = itemData => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          props.navigation.navigate({
            routeName: "Content"
          });
        }}
      >
        <Text style={styles.text}>{itemData.item.type}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={props.oda}
      renderItem={renderODA}
    />
  );
};

MomentoSelectionScreen.navigationOptions = navigationData => {
  const odaTitle = navigationData.navigation.getParam("title");

  return {
    headerTitle: odaTitle
  };
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    margin: 5
  },
  text: {
    fontFamily: "lato-bold",
    fontSize: 30
  }
});

const mapStateToProps = ({ momentos }, { navigation }) => {
  // const {navigation} = ownProps
  // const {momentos} = state

  const odaID = navigation.getParam("odaID");
  const oda = momentos.momentos.filter(momento => {
    return momento.odaID === odaID;
  });

  return { oda };
};

export default connect(mapStateToProps)(MomentoSelectionScreen);
