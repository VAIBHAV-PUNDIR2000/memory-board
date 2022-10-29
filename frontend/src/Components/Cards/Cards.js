import React, { useContext } from "react";
import "./Cards.scss";
import { BsHeart, BsTrashFill } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import moment from "moment";
import paperclip from "../../Constants/clip.png";
import { context } from "../../store/context";
import { deletePost, getPosts, likePost } from "../../api";
const Cards = ({ tilt, data }) => {
  const { functionalityDispatch, functionalityState, dispatch } =
    useContext(context);
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
          {data?.likeCount}
          <BsHeart
            onClick={() => {
              likePost(data?._id, data, dispatch, functionalityDispatch);
              dispatch({
                type: "LIKE_POST",
                payload: data?._id,
              });
            }}
          />

          <BsTrashFill
            onClick={() => {
              console.log(data._id);
              console.log(dispatch);
              deletePost(data._id, dispatch);

              console.log("here");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
