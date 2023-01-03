import express from "express";
import { registerUser, loginUser, getMe } from "../controllers/usersController.js";
import { protect } from "../middleweare/authMiddleweare.js";

const router = express.Router();

router.post("/",registerUser);
router.post("/login",loginUser);
router.get("/me",protect, getMe);

// router.route("/:id").put(updateItem).delete(deleteItem);

export { router as usersRoutes };