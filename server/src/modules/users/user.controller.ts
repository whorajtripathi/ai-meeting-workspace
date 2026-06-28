//Handles HTTP requests.

import { Request,Response } from "express";
import { userService, UserService } from "./user.service";
import { success } from "zod";

export class UserController{

    async register( req:Request, res:Response){
        
        const user = await userService.register(req.body);

        return res.status(201).json({
            success:true,
            message:"User registered Successfully",
            data:user,
        });
    }
}

export const userController=new UserController();


// Client
// ↓
// Route
// ↓
// Controller
// ↓
// Service
// ↓
// Repository
// ↓
// MongoDB