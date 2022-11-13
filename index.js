require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const router = require("./app/router");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use("/api", router);

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
