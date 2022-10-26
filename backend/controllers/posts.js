//importing Model
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
