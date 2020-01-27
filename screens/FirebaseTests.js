import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { fetchSubjects, submitSubject } from "../store/actions/subjects.js";

const FirebaseTests = props => {
  useEffect(() => {
    props.fetchSubjects();
  }, []);

  const [textInput, setTextInput] = useState("");

  const onSubmit = () => {
    if (textInput.length > 4) {
      let id = "m" + props.subjects.length.toString();
      props.submitSubject(textInput,id);
      setTextInput("")
    }
  };

  const renderMateria = itemData => {
    return (
      <View style={styles.materiaContainer}>
        <Text style={styles.text}>{itemData.item.data().nombre}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 80,
          margin: 20,
          flexDirection: "row",
          width: "90%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            height: "90%",
            width: "65%",
            backgroundColor: "white",
            borderBottomColor: "#000000",
            borderBottomWidth: 1,
            margin: 10
          }}
        >
          <TextInput
            style={{
              height: "100%",
              width: "100%",
              fontSize: 32
            }}
            maxLength={40}
            onChangeText={text => setTextInput(text)}
            value={textInput}
          />
        </View>
        <View
          style={{
            height: "90%",
            width: "25%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={() => {
              onSubmit()
            }}
          >
            <Text style={{ ...styles.text, fontSize: 60 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.subjects}
        renderItem={renderMateria}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    marginTop: 40
  },
  text: {
    fontFamily: "lato-black",
    fontSize: 30
  },
  materiaContainer: { paddingBottom: 20 },
  touchable: {
    width: "25%",
    height: 100,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green"
  }
});
// <View
//   style={{
//     height: 100,
//     width: "65%",
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//     backgroundColor: "pink"
//   }}
// >
//   <TextInput
//     style={{
//       backgroundColor: "blue",
//       widht: "100%",
//       borderBottomColor: "#000000",
//       borderBottomWidth: 1
//     }}
//     onChangeText={text => setTextInput(text)}
//     value={textInput}
//   />
// </View>
//
// <TouchableOpacity style={styles.touchable}>
//   <Text style={{ ...styles.text, fontSize: 80 }}>+</Text>
// </TouchableOpacity>
const mapStateToProps = state => ({
  subjects: state.subjects.subjects
});

export default connect(
  mapStateToProps,
  { fetchSubjects, submitSubject }
)(FirebaseTests);
