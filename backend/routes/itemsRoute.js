import express from "express";
import { getItems, setItem, updateItem, deleteItem } from "../controllers/itemsController.js";
import { protect } from "../middleweare/authMiddleweare.js";

const router = express.Router();

router.route("/").get(protect, getItems).post(protect, setItem);

router.route("/:id").put(protect, updateItem).delete(protect, deleteItem);

export { router as itemsRoutes };