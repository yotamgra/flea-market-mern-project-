import express from "express";
import { getItems, setItem, updateItem, deleteItem } from "../controllers/itemsController.js";

const router = express.Router();

router.route("/").get(getItems).post(setItem);

router.route("/:id").put(updateItem).delete(deleteItem);

export { router as itemsRoutes };