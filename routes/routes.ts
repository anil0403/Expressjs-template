import { Router } from "express";
const router = Router();

import {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
} from "../controllers/controllers";

router.get("/get-users", getUsers);
router.get("/get-user-by-id/:id", getUserById);
router.post("/register", createUser);
router.delete("/delete-user", deleteUser);

export default router;
