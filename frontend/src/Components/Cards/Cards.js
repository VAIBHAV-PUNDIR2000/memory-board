import React, { useContext } from "react";
import "./Cards.scss";
import { BsHeart, BsTrashFill } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import moment from "moment";
import paperclip from "../../Constants/clip.png";
import { context } from "../../store/context";
const Cards = ({ tilt, data }) => {
  const { functionalityDispatch } = useContext(context);
  return (
    <div className="card" style={{ transform: `rotate(${tilt / 60}deg)` }}>
      <img src={paperclip} className="paperclip"></img>
      <span className="card-creater">
        {data?.creater} , {moment(data.createdAt).fromNow()}
        <div
          onClick={() => {
            functionalityDispatch({
              type: "CHANGE_SELECTED_POST",
              payload: data?._id,
            });
          }}
        >
          <GoKebabVertical />
        </div>
      </span>
      <div className="card-img">
        <div className="card-img-icon"></div>

        <img src={data?.file} alt={data?.title} />
        <span className="card-title">{data?.title}</span>

        <p className="card-description">{data?.description}</p>
        <div className="card-action-item-row">
          <BsHeart />

          <BsTrashFill />
        </div>
      </div>
    </div>
  );
};

export default Cards;
