import express from "express";
import { registerUser, loginUser, getMe } from "../controllers/usersController.js";

const router = express.Router();

router.post("/",registerUser);
router.post("/login",loginUser);
router.get("/me",getMe);

// router.route("/:id").put(updateItem).delete(deleteItem);

export { router as usersRoutes };