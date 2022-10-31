import * as dotenv from "dotenv";
dotenv.config();
import express from "express";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
