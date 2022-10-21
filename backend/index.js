//the pillars of MERN :express mongooose bodyparser cors

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";
//routers imports
import postRouter from "./Routes/posts.js";

const app = express();
//What Is Body-parser?
//Express body-parser is an npm module used to process data sent in an HTTP request body. \
//It provides four express middleware
//for parsing JSON, Text, URL-encoded,
//and raw data sets over an HTTP request body
app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

app.use(cors());

dotenv.config();
//use routes with appending the URI before redirecting to postrouts
app.use("/posts", postRouter); //postRoute

//get this uri from the mongoose cloud service
const CONNECTION_URL = process.env.CONNECTION_URL;
console.log(CONNECTION_URL);
const PORT = process.env.PORT;

//when mongoose connects it starts to listen
const listenToServer = () => {
  app.listen(PORT, () => console.log(`server running at ${PORT}\n\n`));
};

//mongoose connects us to the mongo service of database
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected Trying to create Listener\n");
    listenToServer();
  })
  .catch((e) => console.log(e.message));
