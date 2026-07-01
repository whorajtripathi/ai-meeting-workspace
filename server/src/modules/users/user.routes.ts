//Maps URLs.
// POST /register
// ↓
// userController.register

import { Router } from "express";
import { userController, UserController } from "./user.controller";
import {validate} from "../../middlewares/validate.middleware";
import { registerUserSchema } from "./user.validation";
import { asyncHandler } from "../../utils/asyncHandler";


const router=Router();

router.post(
    "/register" ,
    validate(registerUserSchema) ,
    asyncHandler(userController.register) );

export default router;
