import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import bookRoutes from './Routes/bookRoutes.js'

const app = express();
app.use(express.json())
app.use('/books',bookRoutes)

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App is connecting to db ");
    app.listen(PORT, () => {
      console.log(`listening on  port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`error connecting`, error);
  });
