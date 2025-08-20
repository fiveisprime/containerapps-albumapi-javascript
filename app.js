import express from 'express';
import logger from 'morgan'

import router from "./routes/index.js";

const app = express();

//enable cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(logger("dev"));
app.use(express.json({ type: ["application/json"] }));
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

console.log("Container Apps Node Sample");

export default app;
