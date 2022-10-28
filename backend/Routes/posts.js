//Posts.js - contains all the routes for Posts

import express from "express";

//importing Controller part
import { getPosts, createPosts, updatePost } from "../controllers/posts.js";

// instantiate router
const postRouter = express.Router();

//ROUTES :------------------------

postRouter.get("/", getPosts);
postRouter.post("/", createPosts);
postRouter.patch("/:id", updatePost);

export default postRouter;
