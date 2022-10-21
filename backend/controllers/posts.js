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

export const createPosts = (req, res) => {};
