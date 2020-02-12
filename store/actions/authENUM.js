import { db, auth } from "../../config/firebase.js";
import { AsyncStorage } from "react-native";
import {
  RESTORE_TOKEN,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  READY,
  TO_AUTH,
  SET_ERROR
} from "./types.js";

export const getLocalUser = () => async dispatch => {
  try {
    let userData = await AsyncStorage.getItem("user");
    let data = await JSON.parse(userData);
    if (data) {
      dispatch({ type: RESTORE_TOKEN, payload: data });
      dispatch({ type: READY });
    } else {
      dispatch({ type: TO_AUTH });
    }
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e });
  }
};

export const handleSignIn = (email, password) => async dispatch => {
  try {
    let response = await auth.signInWithEmailAndPassword(email, password);
    let user = response.user;
    if (user) {
      dispatch({ type: SIGN_IN, payload: user });
      AsyncStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: READY });
    } else {
      dispatch({ type: TO_AUTH });
    }
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e });
  }
};

export const handleSignOut = () => async dispatch => {
  try {
    await auth.signOut();
    await AsyncStorage.removeItem("user");
    dispatch({ type: SIGN_OUT });
    dispatch({ type: TO_AUTH });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e });
  }
};

export const handleSignUp = (email, password) => async dispatch => {
  try {
    let response = await auth.createUserWithEmailAndPassword(email, password);
    let user = response.user;

    if (user) {
      dispatch({ type: SIGN_UP, payload: user });
      AsyncStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: READY });
    } else {
      dispatch({ type: TO_AUTH });
    }

  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e });
  }
};
