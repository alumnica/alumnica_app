import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";

import { db, auth } from "../config/firebase.js";
import Colors from "../constants/Colors.js";

const LoginScreen = props => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        if (user) {
          console.log("log");
        }
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Tu constraseña es incorrecta");
        } else if (errorCode === "auth/user-not-found") {
          alert("Ese email no esta registrado con ningun usuario.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>email</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
          autoCapitalize={"none"}
        />

        <View style={styles.labelContainer}>
          <Text style={styles.label}>contraseña</Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => {
          handleLogIn(email,password)
        }}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpWrapper}>
        <Text style={styles.signUpText}>¿No tienes cuenta? </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.replace({
              routeName: "SignUp"
            });
          }}
        >
          <Text
            style={{
              ...styles.signUpText,
              textDecorationLine: "underline",
              fontFamily: "lato-bold",
              color: Colors.blue
            }}
          >
            Crea una cuenta aquí.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

LoginScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.yellow,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  label: {
    fontFamily: "lato-bold",
    fontSize: 20,
    textTransform: "uppercase"
  },
  labelContainer: {
    width: "100%"
  },
  input: {
    height: "10%",
    width: "100%",
    borderBottomColor: "#000000",
    borderBottomWidth: 3,
    fontSize: 20,
    marginBottom: 40,
    marginTop: 10,
    fontFamily: "lato-regular"
  },
  buttonText: {
    fontSize: 20,
    textTransform: "uppercase",
    fontFamily: "lato-black",
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  button: {
    backgroundColor: Colors.yellow,
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  signUpText: {
    fontFamily: "lato-regular",
    fontSize: 15,
    marginTop: 25
  },
  signUpWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoginScreen;
