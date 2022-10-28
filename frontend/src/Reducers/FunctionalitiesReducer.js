export const FunctionalityReducer = (state, dispatch) => {
  switch (dispatch.type) {
    case "TOGGLE_LOADING":
      return { ...state, isLoading: dispatch.payload };

    case "CHANGE_SELECTED_POST": {
      return { ...state, postSelected: dispatch.payload };
    }
    default:
      return state;
  }
};
