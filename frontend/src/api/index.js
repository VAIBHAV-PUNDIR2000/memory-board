import axios from "axios";

const url = "http://localhost:5000/posts";

//for getting posts from server
export const getPosts = async (dispatch, functionalityDispatch) => {
  await axios
    .get(url)
    .then((e) => {
      dispatch({
        type: "SET_POST",
        payload: e.data,
      });
      if (functionalityDispatch) {
        functionalityDispatch({
          type: "TOGGLE_LOADING",
          payload: false,
        });
      }
    })
    .catch((e) => console.log(e.message));
};

//for pushing a new post to server
export const pushPost = async (dispatch, formData, state) => {
  await axios
    .post(url, formData)
    .then((e) => {
      console.log({ formData });
      dispatch({
        type: "ADD_POST",
        payload: e.data,
      });
      console.log(e.data);
    })
    .then(() => {})
    .catch((e) => console.log(e));
};

//for deleting a post from server
export const deletePost = async (id, dispatch) => {
  await axios
    .delete(`${url}/${id}`)
    .then(dispatch({ type: "DELETE_POST", payload: id }))
    .catch((e) => console.log(e));
};

//for updating an existing post on server

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

//for changing a prop ob an object on server

export const likePost = async (id, data, dispatch, functionalityDispatch) => {
  await axios
    .patch(`${url}/${id}/likePost`)
    .then((e) => dispatch({ type: "LIKE_POST", payload: e }))

    .catch((E) => console.log(E));
};
