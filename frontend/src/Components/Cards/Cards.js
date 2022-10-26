import React from "react";
import "./Cards.scss";
import paperclip from "../../Constants/clip.png";
const Cards = ({ tilt, data }) => {
  return (
    <div className="card" style={{ transform: `rotate(${tilt / 60}deg)` }}>
      <img src={paperclip} className="paperclip"></img>
      <div className="card-img">
        <img src={data?.file} alt={data?.title} />
        <span className="card-title">{data?.title}</span>

        <p className="card-description">{data?.description}</p>
        <div className="card-action-item-row">
          <p>LIKE </p>
          <p onClick={() => {}}>DELETE </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
