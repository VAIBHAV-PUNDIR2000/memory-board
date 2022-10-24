import React from "react";
import "./Cards.scss";
import paperclip from "../../Constants/clip.png";
const Cards = ({ tilt }) => {
  return (
    <div className="card" style={{ transform: `rotate(${tilt / 60}deg)` }}>
      <img src={paperclip} className="paperclip"></img>
      <div className="card-img">
        <img src="https://source.unsplash.com/random" alt="memory" />
        <span className="card-title">Title</span>

        <p className="card-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          dolorem similique. Temporibus quisquam odit eligendi id aut rem,
          recusandae aspernatur doloribus amet nesciunt labore tempore
          consectetur reprehenderit! Eligendi corporis nesciunt corrupti rem.
          Ipsa, placeat!
        </p>
        <div className="card-action-item-row">
          <p>LIKE </p>
          <p>DELETE </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
