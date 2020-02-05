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

import { db } from "../config/firebase.js";

const FirebaseTestsSnapShot = props => {
  const [materiasRef, setMateriasRef] = useState("");
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    // const fetchData = async () => {
    //   let ref = await db.collection("materias");
    //   setMateriasRef(ref);
    //   let unsubscribe = await ref.onSnapshot(querySnapshot => {
    //     let rawDocs = querySnapshot.docs;
    //     setData(rawDocs);
    //   });
    // };
    // fetchData();
    let ref = db.collection("materias");
    setMateriasRef(ref);

    let unsubscribe = ref.onSnapshot(querySnapshot => {
      let rawDocs = querySnapshot.docs;
      setData(rawDocs);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const onSubmit = () => {
    if (textInput.length >= 4) {
      let id = "m" + (data.length + 1).toString();
      materiasRef.doc(id).set({
        nombre: textInput
      });
      setTextInput("");
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
      <View style={styles.buttonInputContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            maxLength={40}
            onChangeText={text => setTextInput(text)}
            value={textInput}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onSubmit();
            }}
          >
            <Text style={{ ...styles.text, fontSize: 60 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={data}
          renderItem={renderMateria}
        />
      </View>
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
  buttonInputContainer: {
    height: 80,
    margin: 20,
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    height: "90%",
    width: "65%",
    backgroundColor: "white",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    margin: 10
  },
  input: {
    height: "100%",
    width: "100%",
    fontSize: 32
  },
  buttonContainer: {
    height: "90%",
    width: "25%",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "lato-black",
    fontSize: 30
  },
  materiaContainer: { paddingTop: 20, alignItems: "center" },
  button: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default FirebaseTestsSnapShot;
