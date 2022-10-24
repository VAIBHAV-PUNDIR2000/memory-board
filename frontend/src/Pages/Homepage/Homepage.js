import React from "react";
import "./Homepage.scss";
import Cards from "../../Components/Cards/Cards";
import Form from "../../Components/Form/Form";
const Homepage = () => {
  const plusOrMinus = (val) => {
    return val < 1 ? -1 : 1;
  };
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
  return (
    <div className="homepage">
      <div className="homepage-cards">
        {cards.map((_, index) => (
          <Cards
            key={index}
            tilt={(index % 3) * 100 * plusOrMinus(index % 3)}
          />
        ))}
      </div>
      <div className="homepage-form ">
        <Form />
      </div>
    </div>
  );
};

export default Homepage;
