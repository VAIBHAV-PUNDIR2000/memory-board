import React, { useContext } from "react";
import "./Homepage.scss";
import LoadingBar from "../../Components/LoadingBar/LoadingBar";
import { context } from "../../store/context";
import Cards from "../../Components/Cards/Cards";
import Form from "../../Components/Form/Form";
import EmptyShow from "../../Components/EmptyShow";
const Homepage = () => {
  const { state, dispatch, functionalityState } = useContext(context);

  console.log({ state });
  const plusOrMinus = (val) => {
    return val < 1 ? -1 : 1;
  };
  return functionalityState.isLoading ? (
    <LoadingBar />
  ) : (
    <div className="homepage">
      {state.length ? (
        <div className="homepage-cards">
          {state.map((i, index) => (
            <Cards
              data={i}
              key={index}
              tilt={(index % 3) * 100 * plusOrMinus(index % 3)}
            />
          ))}
        </div>
      ) : (
        <EmptyShow />
      )}
      <div className="homepage-form ">
        <Form />
      </div>
    </div>
  );
};

export default Homepage;
