import React from "react";
import "./Form.scss";
import uploadSign from "../../Constants/upload-sign.png";
import { useState, useContext, useEffect } from "react";
import { context } from "../../store/context";
import FileBase from "react-file-base64";
import { pushPost, updatePost } from "../../api";

const Form = () => {
  const { state, dispatch, functionalityDispatch, functionalityState } =
    useContext(context);

  const [formData, setFormData] = useState({
    creater: "",
    title: "",
    description: "",
    file: "",
    tags: [],
  });

  const [tag, setTag] = useState("");

  useEffect(() => {
    if (functionalityState.postSelected) {
      const [postD] = state.filter(
        (i) => i._id == functionalityState.postSelected
      );
      console.log(postD);
      setFormData(postD);
    }
  }, [functionalityState.postSelected]);

  return (
    <div className="form">
      <div className="form-heading">
        {functionalityState.postSelected ? "Editing" : "Creating"} a Memory
      </div>
      <p>Creater</p>
      <input
        type="text"
        placeholder="E.g Vaibhav"
        value={formData.creater}
        onChange={(e) => setFormData({ ...formData, creater: e.target.value })}
      />
      <p>Title</p>
      <input
        type="text"
        placeholder="E.g My portrait"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <p>Description</p>
      <input
        type="text"
        placeholder="E.g: We went on trip to Manali"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <FileBase
        type="file"
        id="pic"
        multiple={false}
        value={formData.file}
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
        value={formData.tags}
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
            !functionalityState.postSelected
              ? pushPost(dispatch, formData, state)
              : updatePost(
                  dispatch,
                  formData,
                  functionalityState.postSelected,
                  functionalityDispatch
                );

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
            functionalityDispatch({
              type: "CHANGE_SELECTED_POST",
              dispatch: "",
            });
            setFormData({
              creater: "",
              title: "",
              description: "",
              file: "",
              tags: [],
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
