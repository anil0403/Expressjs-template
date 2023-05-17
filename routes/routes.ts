import { Router } from "express";
const router = Router();

import { getUsers } from "../controllers/controllers";

router.get("/get-users", getUsers);

export default router;
