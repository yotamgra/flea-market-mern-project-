import express from "express";
import colors from 'colors'
import * as dotenv from "dotenv";
import { itemsRoutes } from "./routes/itemsRoute.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use("/items", itemsRoutes);

app.listen(port, () => console.log(`server is running on port ${port}`));