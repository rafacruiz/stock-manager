
import express from "express";
import cors from "cors";
import morgan from "morgan";

import './src/config/db.config.js';

import './src/api/index.js';

//import apiRoute from './src/api/index.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

//app.use('/api/v1', apiRoute);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})