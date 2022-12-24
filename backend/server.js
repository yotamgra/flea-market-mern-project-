import express from "express";
import colors from 'colors'
import * as dotenv from "dotenv";
import { itemsRoutes } from "./routes/itemsRoute.js";
import { errorHandler } from './middleweare/errorMiddleware.js'
import {connectDB} from './config/db.js'

dotenv.config();
const port = process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/items", itemsRoutes);

app.use(errorHandler)

app.listen(port, () => console.log(`server is running on port ${port}`));