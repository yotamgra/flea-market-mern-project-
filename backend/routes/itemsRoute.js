import express from "express";
import { getItems, setItems, updateItem, deleteItem } from "../controllers/itemsController.js";

const router = express.Router();

router.route("/").get(getItems).post(setItems);

router.route("/:id").put(updateItem).delete(deleteItem);

export { router as itemsRoutes };