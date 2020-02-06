import { db, auth } from "../../config/firebase.js";

export const getLocalToken = () => async dispatch => {
  let querySnapshot = await db.collection("materias").get();

  let data = await querySnapshot.docs;

  dispatch({ type: "RESTORE_TOKEN", payload: data });
};

export const handleSignIn = (email, password) => async dispatch => {
  try {
    let response = await auth.signInWithEmailAndPassword(email, password);
    console.log(response.user)
  } catch (e) {
    alert(e);
  }
};

export const handleSignOut = () => ({ type: "SIGN_OUT" });

export const handleSignUp = (email, password) => async dispatch => {
  try {
    let response = await auth.createUserWithEmailAndPassword(email, password);
  } catch (e) {
    alert(e);
  }
};
