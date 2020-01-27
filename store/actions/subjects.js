import db from "../../config/firebase.js";

export const fetchSubjects = () => async dispatch => {
  let querySnapshot = await db.collection("materias").get();

  let data = await querySnapshot.docs;

  dispatch({ type: "FETCH_SUBJECTS", payload: data });
};

export const submitSubject = (nombre, id) => async dispatch => {
  db.collection("materias")
    .doc(id)
    .set({
      nombre
    });

  dispatch({ type: "SUBMIT_SUBJECTS"});
};
