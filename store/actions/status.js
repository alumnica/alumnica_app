import { LOADING, SET_ERROR, READY, TO_AUTH } from "./types.js";

export const isLoading = () => {
  return { type: LOADING };
};

export const setError = (errorMessage="") => {
  return { type: SET_ERROR,payload:errorMessage };
};

export const isReady = () => {
  return { type: READY };
};


export const sendToAuth = () => {
  return { type: TO_AUTH };
};
