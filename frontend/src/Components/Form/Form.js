import React from "react";
import "./Form.scss";
import uploadSign from "../../Constants/upload-sign.png";
import { useState, useContext, useEffect } from "react";
import { context } from "../../store/context";

const Form = () => {
  const { state, dispatch } = useContext(context);
  const [formData, setFormData] = useState({
    creater: "",
    title: "",
    description: "",
    file: "",
    tags: [],
  });
  const [tag, setTag] = useState("");
  const clearForm = () => {
    const ref = document.getElementsByTagName("input");
    Array.from(ref).forEach((i) => {
      i.value = "";
    });
  };
  useEffect(() => {
    dispatch({
      type: "SET_POST",
      payload: formData,
    });
  }, [formData]);

  return (
    <div className="form">
      <p>Creater</p>
      <input
        type="text"
        placeholder="E.g Vaibhav"
        onChange={(e) => setFormData({ ...formData, creater: e.target.value })}
      />
      <p>Title</p>
      <input
        type="text"
        placeholder="E.g My portrait"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <p>Description</p>
      <input
        type="text"
        placeholder="E.g: We went on trip to Manali"
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <label htmlFor="picture">
        <img src={uploadSign} className="upload-sign"></img>
        DRAG-DROP OR CLICK TO UPLOAD
      </label>
      <input type="file" id="picture" className="file-input" />
      <p>Tags</p>
      <input
        type="text"
        placeholder="#"
        onChange={(e) => {
          setTag(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setFormData({ ...formData, tags: [...formData.tags, tag] });
            e.target.value = "";
            setTag("");
          }
        }}
      />
      <div className="form-button-group">
        <button
          className="form-button-group save"
          onClick={() => {
            setFormData({});
            clearForm();
            dispatch({
              type: "CLEAR_POST",
            });
          }}
        >
          SAVE
        </button>
        <button
          className="form-button-group clear"
          onClick={() => {
            setFormData({});
            clearForm();
            dispatch({
              type: "CLEAR_POST",
            });
          }}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Form;
