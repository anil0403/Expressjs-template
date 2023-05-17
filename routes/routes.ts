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

// users
router.get("/get-users", getUsers);
router.get("/get-user-by-id/:id", getUserById);
router.post("/register", createUser);
router.delete("/delete-user", deleteUser);

// post
router.get("/get-posts", getPosts);
router.get("/get-by-user-id/:id", getPostsByUserId);
router.post("/create-post", createPost);
router.patch("/update-post", updatePost);

export default router;
