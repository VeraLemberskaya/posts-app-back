import * as dotenv from "dotenv";
dotenv.config();
import express from "express";

import router from "./app/router";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.unsubscribe("/api", router);

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
