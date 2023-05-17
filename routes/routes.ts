import { Router } from "express";
const router = Router();

import {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  createPost,
  getPosts,
  getPostsByUserId,
  deletePost,
  updatePost,
} from "../controllers/controllers";

import { login } from "../auth/login";
import { authMiddleware } from "../auth/middleware";
// users
router.get("/get-users", authMiddleware, getUsers);
router.get("/get-user-by-id/:id", authMiddleware, getUserById);
router.post("/register", createUser);
router.delete("/delete-user", authMiddleware, deleteUser);

// post
router.get("/get-posts", authMiddleware, getPosts);
router.get("/get-by-user-id/:id", authMiddleware, getPostsByUserId);
router.post("/create-post", authMiddleware, createPost);
router.patch("/update-post", authMiddleware, updatePost);

// login
router.post("/login", login);

export default router;
