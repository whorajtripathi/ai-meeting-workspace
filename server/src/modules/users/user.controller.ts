//Handles HTTP requests.

// import { Request,Response } from "express";
// import { userService, UserService } from "./user.service";
// import { success } from "zod";

// export class UserController{

//     async register( req:Request, res:Response){
        
//         const user = await userService.register(req.body);

//         return res.status(201).json({
//             success:true,
//             message:"User registered Successfully",
//             data:user,
//         });
//     }
// }

// export const userController=new UserController();


import { Request,Response } from "express";
import { userService} from "./user.service";
import {ApiResponse} from "../../utils/ApiResponse";

export const userController={

    register:async (req:Request,res:Response)=>{

        const userData=req.body;

        const user=await userService.register(userData);

        return res.status(201).json(
            new ApiResponse(
                201,
                "User registered Successfully",
                user
            )
        );
    }
};


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