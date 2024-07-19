import express from "express";
import {
  getUsers,
  getUser,
  addUser,
  updateUserById,
  deleteUserById,
} from "../controllers/userController";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", addUser);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", deleteUserById);

export default router;
