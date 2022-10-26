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
    case "ADD_POST": {
      console.log(action.payload);
      return [...state, action.payload];

      break;
    }
    default:
      return state;
  }
};
