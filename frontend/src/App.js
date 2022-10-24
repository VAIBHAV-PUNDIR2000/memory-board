import React from "react";
import "./App.scss";
import { useReducer } from "react";

import "./Components/Header/Header";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import { postStore } from "./store/postStore";
import { postReducer } from "./Reducers/postReducer";
import { context } from "./store/context.js";

const App = () => {
  const [state, dispatch] = useReducer(postReducer, postStore);

  return (
    <context.Provider value={{ state, dispatch }}>
      <div className="app">
        <Header />
        <Homepage />
      </div>
    </context.Provider>
  );
};

export default App;
