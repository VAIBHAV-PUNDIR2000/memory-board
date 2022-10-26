export const FunctionalityReducer = (state, dispatch) => {
  switch (dispatch.type) {
    case "TOGGLE_LOADING":
      return { ...state, isLoading: !state.isLoading };

    default:
      return state;
  }
};
