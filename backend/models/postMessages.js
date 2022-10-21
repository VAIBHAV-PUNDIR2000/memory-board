import mongoose from "mongoose";

//schema :Structure of how the structure of data is gonna be like
const postSchema = mongoose.Schema({
  //main data
  title: String,
  message: String,
  creater: String,

  //meta data
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    initial: 0,
  },

  //creating data
  createdAt: {
    type: Date,
    initial: Date.now(),
  },
});

//model : The actual entity out of that schema
//say if schema is sth about a post
//then mode is actual post of you from paris

const postMessage = mongoose.model("PostMessage", postSchema);
export default postMessage;
//postMessage is the name which is gonna be instantiated in
//mongo db cluster
