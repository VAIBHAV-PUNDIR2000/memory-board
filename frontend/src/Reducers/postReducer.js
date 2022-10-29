export const postReducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case "SET_POST": {
      return action.payload;
    }
    case "SET_ERR": {
      {
        return { ...state, state: action.payload };
      }
    }
    case "CLEAR_POST": {
      return {
        ...state,
        creater: "",
        title: "",
        description: "",
        file: "",
        tags: [],
      };
    }

    case "LIKE_POST": {
      // console.log();
      const ar = state.map((i) =>
        i._id === action.payload ? { ...i, likeCount: i.likeCount + 1 } : i
      );
      // console.log(state);
      console.log("here before returning ar", state[1].likeCount);
      return ar;
    }
    case "ADD_POST": {
      console.log(action.payload);
      return [...state, action.payload];

      break;
    }

    case "DELETE_POST": {
      console.log(action.payload);
      console.log(state);

      return state.filter((i) => i._id !== action.payload);
    }
    default:
      return state;
  }
};
