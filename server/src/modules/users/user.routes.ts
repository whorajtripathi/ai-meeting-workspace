//Maps URLs.
// POST /register
// ↓
// userController.register

import { Router } from "express";
import { userController, UserController } from "./user.controller";

const router=Router();

router.post("/register" , (req,res)=> userController.register(req,res));

export default router;
