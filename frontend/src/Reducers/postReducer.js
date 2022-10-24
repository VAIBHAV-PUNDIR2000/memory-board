export const postReducer = (state, dispatch) => {
  switch (dispatch.type) {
    case "SET_POST": {
      console.log(dispatch.payload);
      return { state: dispatch.payload };
    }
    case "SET_ERR": {
      return { ...state, state: dispatch.payload };
    }
    case "CLEAR_POST":
      return {
        ...state,
        creater: "",
        title: "",
        description: "",
        image: "",
        tags: [],
      };
    default:
      return state;
  }
};
