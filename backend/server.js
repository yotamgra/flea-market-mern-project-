import express from "express";
import colors from 'colors'
import * as dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => console.log(`server is running on port ${port}`));