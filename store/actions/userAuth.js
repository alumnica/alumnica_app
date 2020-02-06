import { db, auth } from "../../config/firebase.js";
import { AsyncStorage } from "react-native";

export const getLocalToken = () => async dispatch => {
  try {
    let userData = await AsyncStorage.getItem("user");
    let data = await JSON.parse(userData);
    dispatch({ type: "RESTORE_TOKEN", payload: data });
  } catch (e) {
    alert(e);
  }
};

export const handleSignIn = (email, password) => async dispatch => {
  try {
    let response = await auth.signInWithEmailAndPassword(email, password);
    let user = response.user;
    dispatch({ type: "SIGN_IN", payload: user });
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (e) {
    alert(e);
  }
};

export const handleSignOut = () => async dispatch => {
  try {
    await auth.signOut();
    await AsyncStorage.removeItem("user");
    dispatch({ type: "SIGN_OUT" });
  } catch (e) {
    alert(e);
  }
};

export const handleSignUp = (email, password) => async dispatch => {
  try {
    let response = await auth.createUserWithEmailAndPassword(email, password);
    let user = response.user;
    dispatch({ type: "SIGN_UP", payload: user });
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (e) {
    alert(e);
  }
};
