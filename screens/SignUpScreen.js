import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";

import { db, auth } from "../config/firebase.js";
import { handleSignUp } from "../store/actions/auth.js";
import { connect } from "react-redux";
import Colors from "../constants/Colors.js";

const SignUpScreen = props => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(" ");

  const handleSignUp = async (email, password, passwordConfirmation) => {
    setError(" ");
    try {
      if (password !== passwordConfirmation) {
        throw {
          message: "contraseña != comfirmación",
          code: "auth/confimation"
        };
      }
      await props.handleSignUp(email, password);
    } catch (e) {
      setError(e.code);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.error}>{error}</Text>
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

        <View style={styles.labelContainer}>
          <Text style={styles.label}>comfirmar contraseña</Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={text => setPasswordConfirmation(text)}
          value={passwordConfirmation}
          secureTextEntry={true}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            handleSignUp(email, password, passwordConfirmation);
          }}
        >
          <Text style={styles.buttonText}>Crear Usuario</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpWrapper}>
        <Text style={styles.signUpText}>¿Ya tienes cuenta? </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.replace("LogIn");
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
            Inicia sesión.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pink,
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
    backgroundColor: Colors.pink,
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
  },
  error: { color: "red", fontFamily: "lato-bold", fontSize: 20,marginBottom:20 }
});

export default connect(
  null,
  { handleSignUp }
)(SignUpScreen);
