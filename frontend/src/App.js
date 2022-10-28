import React from "react";
import "./App.scss";
import { useReducer, useEffect } from "react";

import "./Components/Header/Header";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import { postStore } from "./store/postStore";
import { FunctionalietiesStore } from "./store/FunctionalitiesStore";
import { postReducer } from "./Reducers/postReducer";
import { FunctionalityReducer } from "./Reducers/FunctionalitiesReducer";
import { context } from "./store/context.js";
import { getPosts } from "./api";

const App = () => {
  const [state, dispatch] = useReducer(postReducer, postStore);
  const [functionalityState, functionalityDispatch] = useReducer(
    FunctionalityReducer,
    FunctionalietiesStore
  );
  useEffect(() => {
    setTimeout(() => {
      getPosts(dispatch, functionalityDispatch);
    }, 1000);
  }, [functionalityState.userSelected]);

  return (
    <context.Provider
      value={{ state, dispatch, functionalityDispatch, functionalityState }}
    >
      <div className="app">
        <Header />
        <Homepage />
      </div>
    </context.Provider>
  );
};

export default App;
