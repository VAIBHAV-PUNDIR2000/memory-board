import React from "react";
import "./Form.scss";
import uploadSign from "../../Constants/upload-sign.png";
import { useState, useContext, useEffect } from "react";
import { context } from "../../store/context";
import FileBase from "react-file-base64";
import { pushPost } from "../../api";
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

      <FileBase
        type="file"
        id="pic"
        multiple={false}
        label="Document"
        onDone={({ base64 }) => {
          setFormData({ ...formData, file: base64 });
        }}
        className="file-input"
      ></FileBase>

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
            pushPost(dispatch, formData, clearForm, state);
            clearForm();
            setFormData({
              creater: "",
              title: "",
              description: "",
              file: "",
              tags: [],
            });
          }}
        >
          SAVE
        </button>
        <button
          className="form-button-group clear"
          onClick={() => {
            setFormData({
              creater: "",
              title: "",
              description: "",
              file: "",
              tags: [],
            });
            clearForm();
          }}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Form;
