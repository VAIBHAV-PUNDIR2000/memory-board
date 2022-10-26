import axios from "axios";

const url = "http://localhost:5000/posts";

export const getPosts = async (dispatch, functionalityDispatch) => {
  await axios
    .get(url)
    .then((e) => {
      console.log(e);
      dispatch({
        type: "SET_POST",
        payload: e.data,
      });
      functionalityDispatch({
        type: "TOGGLE_LOADING",
      });
    })
    .catch((e) => console.log(e.message));
};

export const pushPost = async (dispatch, formData, clearForm, state) => {
  await axios
    .post(url, formData)
    .then((e) => {
      console.log("this", { formData });
      dispatch({
        type: "ADD_POST",
        payload: formData,
      });
    })
    .then(() => clearForm())
    .catch((e) => console.log(e));
};

export const removePost = async (id) => {
  await axios
    .post(id)
    .then(() => {})
    .catch((e) => console.log(e));
};
