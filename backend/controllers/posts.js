//importing Model
import mongoose from "mongoose";
import postMessages from "../models/postMessages.js";

//The Brain part of the posts related requests

//as finding is an async function so we add await
export const getPosts = async (req, res) => {
  try {
    //fingind in database
    const postMessage = await postMessages.find();
    console.log(postMessage);
    //status code success
    res.status(200).json(postMessage);
  } catch (error) {
    //error
    res.status(500).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const { title, description, file, creater, tags } = req.body;

  const newPostMessage = new postMessages({
    title,
    description,
    file,
    creater,
    tags,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const removePosts = async (req, res) => {
  try {
  } catch (error) {}
};

export const updatePost = async (req, res) => {
  const { id } = req.params; //like :   https...posts/113 id=113
  const post = req.body; //new post to be updated

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with such id");

  const updatedPost = await postMessages.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};
