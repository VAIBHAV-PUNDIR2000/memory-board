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
        payload: false,
      });
    })
    .catch((e) => console.log(e.message));
};

export const pushPost = async (dispatch, formData, state) => {
  await axios
    .post(url, formData)
    .then((e) => {
      console.log({ formData });
      dispatch({
        type: "ADD_POST",
        payload: formData,
      });
    })
    .then(() => {})
    .catch((e) => console.log(e));
};

export const removePost = async (id) => {
  await axios
    .patch()
    .then(() => {})
    .catch((e) => console.log(e));
};

export const updatePost = async (
  dispatch,
  formdata,
  id,
  functionalityDispatch
) => {
  await axios.patch(`${url}/${id}`, formdata).then(() => {
    getPosts(dispatch, functionalityDispatch).then(() => {
      functionalityDispatch({
        type: "CHANGE_SELECTED_POST",
        payload: "",
      });
    });
  });
};
